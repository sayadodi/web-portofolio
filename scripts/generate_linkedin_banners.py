import os
from PIL import Image, ImageDraw, ImageFont

def create_banner_clean():
    # Render at 2x (3168 x 792) for razor-sharp edges
    W = 1584 * 2
    H = 396 * 2
    
    # 1. Dark Base Canvas (#08080a)
    base = Image.new("RGBA", (W, H), (8, 8, 10, 255))
    
    # 2. Ambient Tech Glow
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    
    # Emerald glow on top-right
    for r in range(500, 0, -25):
        alpha = int(24 * (1 - r / 500))
        glow_draw.ellipse(
            [2500 - r, 200 - r, 2500 + r, 200 + r],
            fill=(16, 185, 129, alpha)
        )
        
    # Subtle blue glow on bottom-right
    for r in range(400, 0, -25):
        alpha = int(16 * (1 - r / 400))
        glow_draw.ellipse(
            [2200 - r, 550 - r, 2200 + r, 550 + r],
            fill=(59, 130, 246, alpha)
        )
    base = Image.alpha_composite(base, glow)
    
    # 3. Dot Grid Pattern (Subtle & Modern)
    grid_img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_img)
    grid_spacing = 64
    dot_radius = 2.5
    for x in range(grid_spacing // 2, W, grid_spacing):
        for y in range(grid_spacing // 2, H, grid_spacing):
            grid_draw.ellipse(
                [x - dot_radius, y - dot_radius, x + dot_radius, y + dot_radius],
                fill=(255, 255, 255, 16)
            )
    base = Image.alpha_composite(base, grid_img)
    
    # 4. Content Typography & Layout
    draw = ImageDraw.Draw(base)
    
    # Fonts
    font_dr = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 112)
    font_name = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 86)
    font_role = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 48)
    font_url = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 36)
    
    # Safe zone for avatar: X >= 880
    start_x = 880
    
    # Vertical centering for clean aesthetic
    # Total content height: Card (170px) + spacing (35px) + divider + url (40px)
    center_y = 230
    
    # Card "Dr."
    card_w = 220
    card_h = 170
    card_x = start_x
    card_y = center_y
    
    draw.rounded_rectangle(
        [card_x, card_y, card_x + card_w, card_y + card_h],
        radius=38,
        fill=(18, 20, 26, 235),
        outline=(255, 255, 255, 45),
        width=3
    )
    
    # "Dr" text inside card
    draw.text((card_x + 36, card_y + 16), "Dr", font=font_dr, fill=(244, 244, 245, 255))
    # Emerald period dot
    dot_x = card_x + 168
    dot_y = card_y + 116
    draw.ellipse([dot_x - 10, dot_y - 10, dot_x + 10, dot_y + 10], fill=(16, 185, 129, 255))
    
    # Name & Role next to the card
    text_x = card_x + card_w + 48
    name_y = center_y + 12
    draw.text((text_x, name_y), "DODI DWI RISKIANTO", font=font_name, fill=(244, 244, 245, 255))
    
    # Role Line
    role_y = name_y + 102
    draw.rounded_rectangle([text_x, role_y + 8, text_x + 6, role_y + 44], radius=3, fill=(16, 185, 129, 255))
    draw.text((text_x + 24, role_y), "Software Engineer  ·  Multimedia Creative  ·  IT Support", font=font_role, fill=(212, 212, 216, 255))
    
    # Subtle elegant bottom line
    line_y = center_y + 240
    draw.line([start_x, line_y, W - 140, line_y], fill=(255, 255, 255, 28), width=2)
    
    # Footer Row: Website & Location
    draw.text((start_x, line_y + 36), "PORTFOLIO  •  dodi-portofolio-gilt.vercel.app", font=font_url, fill=(161, 161, 170, 220))
    draw.text((W - 400, line_y + 36), "PROBOLINGGO, ID", font=font_url, fill=(113, 113, 122, 200))
    
    # Downsample 2x -> 1x (1584 x 396)
    final = base.resize((1584, 396), Image.Resampling.LANCZOS)
    return final

if __name__ == "__main__":
    os.makedirs("public/banners", exist_ok=True)
    banner = create_banner_clean()
    banner.save("public/banners/sampul-linkedin-utama.png")
    print("Clean banner generated successfully!")
