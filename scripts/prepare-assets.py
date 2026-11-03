"""Copy and optimise the assets that live outside the repo.

The source files sit in Downloads and in the thesis folders. Hosting only sees
what is inside this project, so everything the site references must end up in
public/. This script copies the originals it needs into assets/source/ and
writes web-optimised versions to public/.

Run:  python scripts/prepare-assets.py
"""

from pathlib import Path
import shutil

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SOURCE = ROOT / "assets" / "source"

PORTRAIT_SRC = Path(r"C:\Users\lapto\Downloads\WhatsApp Image 2026-11-04 at 03.06.23.jpeg")
PORTRAIT_ORIGINAL = SOURCE / "portrait-original.jpeg"

GLUCOVA_SCREENSHOTS = Path(r"C:\Users\lapto\Documents\Data Dodi\glucova_v1\screenshots")
GLUCOVA_POSTER = Path(r"C:\Users\lapto\Documents\Data Dodi\FILE SIDANG\Poster Glucova Dodi.png")
GLUCOVA_OUT = PUBLIC / "projects" / "glucova"


def save_webp(image: Image.Image, dest: Path, width: int, quality: int = 82) -> None:
    if image.width > width:
        height = round(image.height * width / image.width)
        image = image.resize((width, height), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    image.save(dest, "WEBP", quality=quality, method=6)
    print(
        f"wrote {dest.relative_to(ROOT)} "
        f"({dest.stat().st_size // 1024} KB, {image.width}x{image.height})"
    )


def main() -> None:
    # Keep the original portrait so the project is self-contained and the
    # crop can be regenerated later with scripts/prepare-photo.py.
    if PORTRAIT_SRC.exists():
        PORTRAIT_ORIGINAL.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(PORTRAIT_SRC, PORTRAIT_ORIGINAL)
        print(f"copied {PORTRAIT_ORIGINAL.relative_to(ROOT)}")

    # Poster doubles as the project cover; centre crop to the 16:10 card ratio.
    if GLUCOVA_POSTER.exists():
        poster = Image.open(GLUCOVA_POSTER).convert("RGB")
        target_ratio = 16 / 10
        current_ratio = poster.width / poster.height
        if current_ratio < target_ratio:
            height = round(poster.width / target_ratio)
            offset = (poster.height - height) // 2
            poster = poster.crop((0, offset, poster.width, offset + height))
        elif current_ratio > target_ratio:
            width = round(poster.height * target_ratio)
            offset = (poster.width - width) // 2
            poster = poster.crop((offset, 0, offset + width, poster.height))

        save_webp(poster, GLUCOVA_OUT / "cover.webp", 1600, quality=85)
        save_webp(Image.open(GLUCOVA_POSTER).convert("RGB"), GLUCOVA_OUT / "poster.webp", 1600, 85)

    # App screenshots used in the project gallery.
    for index, source in enumerate(sorted(GLUCOVA_SCREENSHOTS.glob("ss*.jpeg")), start=1):
        save_webp(
            Image.open(source).convert("RGB"),
            GLUCOVA_OUT / f"ss{index}.webp",
            540,
            quality=84,
        )


if __name__ == "__main__":
    main()
