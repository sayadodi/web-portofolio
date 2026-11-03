"""Prepare the hero portrait.

Keeps the photograph as a photograph: crops to a 4:5 headshot and converts to
a neutral grayscale so it sits inside the monochrome theme without competing
with it. No halftone, no background removal.

Run:  python scripts/prepare-photo.py
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

SRC = Path(r"C:\Users\lapto\Downloads\WhatsApp Image 2026-11-04 at 03.06.23.jpeg")
OUT = Path(__file__).resolve().parent.parent / "public" / "portrait.webp"

# 4:5 portrait crop, keeping the full width and trimming a little headroom.
CROP_TOP = 26
CROP_BOTTOM = 804
TARGET = (840, 1050)


def main() -> None:
    image = Image.open(SRC).convert("RGB")
    width, _ = image.size

    image = image.crop((0, CROP_TOP, width, CROP_BOTTOM))
    image = image.resize(TARGET, Image.LANCZOS)
    image = image.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=3))

    gray = ImageOps.grayscale(image)
    gray = ImageOps.autocontrast(gray, cutoff=(0.3, 0.5))

    # Gentle S-curve: a touch more separation in the midtones without clipping.
    arr = np.asarray(gray).astype(np.float32) / 255.0
    arr = np.clip(arr, 0.0, 1.0)
    arr = arr + 0.06 * np.sin(np.pi * arr) * (arr - 0.45)
    arr = np.clip(arr * 1.02, 0.0, 1.0)

    rgb = Image.fromarray((arr * 255).astype(np.uint8), mode="L").convert("RGB")
    rgb = ImageEnhance.Contrast(rgb).enhance(1.04)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT, "WEBP", quality=88, method=6)
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB, {rgb.size[0]}x{rgb.size[1]})")


if __name__ == "__main__":
    main()
