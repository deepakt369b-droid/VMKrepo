from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(filename, text, color, size=(800, 600)):
    img = Image.new('RGB', size, color=color)
    d = ImageDraw.Draw(img)
    
    # Try to load a font, otherwise default
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font = ImageFont.load_default()
        
    # Text positioning (rough center)
    bbox = d.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    d.text(((size[0]-text_w)/2, (size[1]-text_h)/2), text, fill=(255,255,255), font=font)
    
    img.save(filename, 'WEBP')
    print(f"Created {filename}")

# Ensure directories exist
os.makedirs('assets/images', exist_ok=True)
os.makedirs('video-frames', exist_ok=True)

# Generate Card Images
create_placeholder('assets/images/card_planning.webp', 'Planning & Approvals', '#2C3E50', (600, 800))
create_placeholder('assets/images/card_construction.webp', 'Construction', '#C5A059', (600, 800))
create_placeholder('assets/images/card_handover.webp', 'Handover', '#27AE60', (600, 800))

# Generate Video Frames (0 to 119)
# We will just generate a few keyframes and copy them or just generate all 120 simple ones
# To save time, let's generate 120 small frames with changing numbers
font_size = 60
for i in range(120):
    filename = f"video-frames/frame_{i:03d}.webp"
    
    # Gradient-ish color change
    r = int((i / 120) * 255)
    g = int(50)
    b = int(100)
    
    img = Image.new('RGB', (1920, 1080), color=(r, g, b))
    d = ImageDraw.Draw(img)
    d.text((50, 50), f"Frame {i}", fill=(255,255,255))
    
    img.save(filename, 'WEBP')

print("All placeholders generated.")
