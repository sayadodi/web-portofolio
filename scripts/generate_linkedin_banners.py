import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_banner_1():
    # Render at 2x (3168 x 792) then downsample with Lanczos to 1584 x 396 for ultra-crisp edges
    W = 1584 * 2
    H = 396 * 2
    
    # 1. Base Image
    base = Image.new("RGBA", (W, H), (8, 8, 10, 255)) # #08080a
    
    # 2. Ambient Glow (Subtle emerald / cyan tech glow on top-right)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    
    # Emerald glow around x=2600, y=200
    for r in range(450, 0, -20):
        alpha = int(22 * (1 - r / 450))
        glow_draw.ellipse(
            [2500 - r, 200 - r, 2500 + r, 200 + r],
            fill=(16, 185, 129, alpha)
        )
        
    # Blue/Indigo glow around x=2000, y=600
    for r in range(400, 0, -20):
        alpha = int(18 * (1 - r / 400))
        glow_draw.ellipse(
            [2100 - r, 550 - r, 2100 + r, 550 + r],
            fill=(59, 130, 246, alpha)
        )
        
    base = Image.alpha_composite(base, glow)
    
    # 3. Dot Grid (like website DotGrid.tsx)
    grid_img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_img)
    grid_spacing = 64 # 32px at 1x
    dot_radius = 2.5
    for x in range(grid_spacing // 2, W, grid_spacing):
        for y in range(grid_spacing // 2, H, grid_spacing):
            grid_draw.ellipse(
                [x - dot_radius, y - dot_radius, x + dot_radius, y + dot_radius],
                fill=(255, 255, 255, 18)
            )
    base = Image.alpha_composite(base, grid_img)
    
    # 4. Content Elements
    draw = ImageDraw.Draw(base)
    
    # Fonts
    font_dr = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 100)
    font_name = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 80)
    font_role = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 46)
    font_badge = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 34)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 32)
    font_url = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 34)

    # Content starts at X = 860 (Leaving the left 800px for avatar safe zone)
    # Actually, LinkedIn avatar is on the left (0 to ~650px at 2x).
    start_x = 880
    start_y = 130
    
    # Draw Brand Logo Card "Dr."
    card_w = 210
    card_h = 160
    card_x = start_x
    card_y = start_y
    
    # Card background (dark elevated)
    draw.rounded_rectangle(
        [card_x, card_y, card_x + card_w, card_y + card_h],
        radius=36,
        fill=(18, 20, 26, 230),
        outline=(255, 255, 255, 45),
        width=3
    )
    
    # "Dr" text + dot inside card
    # Draw "Dr"
    draw.text((card_x + 36, card_y + 16), "Dr", font=font_dr, fill=(244, 244, 245, 255))
    # Dot
    dot_x = card_x + 158
    dot_y = card_y + 104
    draw.ellipse([dot_x - 9, dot_y - 9, dot_x + 9, dot_y + 9], fill=(16, 185, 129, 255)) # emerald dot!
    
    # Next to Card: Name & Title
    name_x = card_x + card_w + 46
    name_y = start_y + 8
    draw.text((name_x, name_y), "DODI DWI RISKIANTO", font=font_name, fill=(244, 244, 245, 255))
    
    # Role line
    role_y = name_y + 96
    # Emerald accent bar before roles
    draw.rounded_rectangle([name_x, role_y + 6, name_x + 6, role_y + 44], radius=3, fill=(16, 185, 129, 255))
    draw.text((name_x + 22, role_y), "Software Engineer  ·  Multimedia Creative  ·  IT Support", font=font_role, fill=(212, 212, 216, 255))
    
    # Divider line
    div_y = start_y + 200
    draw.line([start_x, div_y, W - 140, div_y], fill=(255, 255, 255, 30), width=2)
    
    # Credential Badges Row (Below divider)
    badges = [
        ("S1 TEKNIK INFORMATIKA (IPK 3.93)", (16, 185, 129, 35), (52, 211, 153, 255), (16, 185, 129, 80)),
        ("BNSP CERTIFIED SOFTWARE ENGINEER", (59, 130, 246, 35), (96, 165, 250, 255), (59, 130, 246, 80)),
        ("HAKI KEMENKUMHAM & AI RESEARCH", (168, 85, 247, 35), (192, 132, 252, 255), (168, 85, 247, 80))
    ]
    
    bx = start_x
    by = div_y + 45
    badge_h = 70
    
    for text, bg_col, text_col, border_col in badges:
        bbox = draw.textbbox((0, 0), text, font=font_badge)
        tw = bbox[2] - bbox[0]
        pad_x = 36
        bw = tw + pad_x * 2
        
        # Pill background
        draw.rounded_rectangle(
            [bx, by, bx + bw, by + badge_h],
            radius=badge_h // 2,
            fill=bg_col,
            outline=border_col,
            width=2
        )
        # Indicator dot
        draw.ellipse([bx + 20 - 4, by + badge_h//2 - 4, bx + 20 + 4, by + badge_h//2 + 4], fill=text_col)
        # Pill text
        draw.text((bx + 38, by + 12), text, font=font_badge, fill=text_col)
        bx += bw + 24
        
    # Footer Row (Bottom): URL & Location
    bottom_y = H - 110
    url_text = "dodi-portofolio-gilt.vercel.app"
    draw.text((start_x, bottom_y), f"PORTFOLIO  •  {url_text}", font=font_url, fill=(161, 161, 170, 220))
    draw.text((W - 380, bottom_y), "PROBOLINGGO, ID", font=font_url, fill=(113, 113, 122, 200))
    
    # Downscale 2x -> 1x
    final = base.resize((1584, 396), Image.Resampling.LANCZOS)
    return final

def create_banner_2():
    # Minimalist Monokrom Design
    W = 1584 * 2
    H = 396 * 2
    
    base = Image.new("RGBA", (W, H), (10, 10, 12, 255))
    draw = ImageDraw.Draw(base)
    
    # Elegant grid lines
    draw.line([760, 0, 760, H], fill=(255, 255, 255, 14), width=2)
    draw.line([0, 520, W, 520], fill=(255, 255, 255, 14), width=2)
    
    # Fonts
    font_dr = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 160)
    font_name = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 92)
    font_role = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 50)
    font_sub = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 36)
    
    # Big stylized Dr. badge
    bx = 840
    by = 130
    
    # Draw huge crisp Dr.
    draw.text((bx, by), "Dr", font=font_dr, fill=(244, 244, 245, 255))
    draw.ellipse([bx + 205, by + 130, bx + 229, by + 154], fill=(244, 244, 245, 255))
    
    # Vertical line next to Dr
    draw.line([bx + 270, by + 10, bx + 270, by + 180], fill=(255, 255, 255, 40), width=3)
    
    # Text right of Dr.
    tx = bx + 310
    draw.text((tx, by + 15), "DODI DWI RISKIANTO", font=font_name, fill=(255, 255, 255, 255))
    draw.text((tx, by + 115), "Software Engineer  ·  Multimedia Creative  ·  IT Support", font=font_role, fill=(161, 161, 170, 255))
    
    # Sub tags in bottom bar
    draw.text((bx, 570), "S1 TEKNIK INFORMATIKA (IPK 3.93)  /  BNSP CERTIFIED  /  RESEARCH & MULTIMEDIA", font=font_sub, fill=(113, 113, 122, 230))
    draw.text((W - 680, 570), "dodi-portofolio-gilt.vercel.app", font=font_sub, fill=(16, 185, 129, 240))
    
    final = base.resize((1584, 396), Image.Resampling.LANCZOS)
    return final

if __name__ == "__main__":
    os.makedirs("public/banners", exist_ok=True)
    
    b1 = create_banner_1()
    b1.save("public/banners/sampul-linkedin-utama.png")
    
    b2 = create_banner_2()
    b2.save("public/banners/sampul-linkedin-minimalis.png")
    
    print("Banners generated successfully in public/banners/!")
