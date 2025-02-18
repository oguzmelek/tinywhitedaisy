from PIL import Image, ImageDraw, ImageFont
import os

def create_test_image(filename, color, text):
    # Create a new image with a solid color background (4:3 aspect ratio)
    img = Image.new('RGB', (1600, 1200), color)  # 4:3 aspect ratio
    draw = ImageDraw.Draw(img)
    
    # Add text to the image
    text_color = 'white'
    text_position = (800, 600)  # Center of the image
    
    # Draw text
    draw.text(text_position, text, fill=text_color, anchor="mm", font=None)
    
    # Ensure the images directory exists
    os.makedirs('images', exist_ok=True)
    
    # Save the image
    img.save(f'images/{filename}.jpg')

# Create test images
create_test_image('grasspath-001', '#228B22', 'Starting Scene\nClick arrows to navigate')
create_test_image('grasspath-forest-002', '#006400', 'Forest Scene\nClick down arrow to go back')
create_test_image('sandyshore-path-004', '#F4A460', 'Sandy Shore\nClick up arrow to go back') 