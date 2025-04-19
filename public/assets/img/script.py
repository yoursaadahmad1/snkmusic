import os
import requests
from PIL import Image
from io import BytesIO

# Set your Pexels API Key here
PEXELS_API_KEY = "tbfbH04Koh7Bnxa6j1JhXS3f5kN8Qs8S3ptu26WgVzxIt4F6NpPs2gqr"
PEXELS_API_URL = "https://api.pexels.com/v1/search"

# Base folder containing your image directories
BASE_DIR = "D:\\Envato\\Websites\\music-bands-musicians-nextjs-template-musicly-2025-01-18-13-26-04-utc\\musicly-react\\public\\assets\\img"

# Folder-specific queries
FOLDER_QUERIES = {
    "about": "music about",
    "advice": "music advice",
    "banner": "music banner",
    "bg": "music background",
    "brand-song": "music brand song",
    "choose": "music choose",
    "contact": "music contact",
    "cta": "music cta",
    "error": "music error",
    "event": "music event",
    "footer": "music footer",
    "function-brand": "music function-brand",
    "genres": "music genres",
    "header": "music header",
    "news": "music news",
    "partner": "music companies",
    "popular": "popular music",
    "shiping": "music shipping",
    "shop": "music shop",
    "team": "music team",
    "testimonial": "music testimonial",
    "trending": "music trending",
    "work": "music work"
}

HEADERS = {
    "Authorization": PEXELS_API_KEY
}

def fetch_image_urls(query, count):
    per_page = min(count, 80)
    response = requests.get(PEXELS_API_URL, headers=HEADERS, params={
        "query": query,
        "per_page": per_page
    })
    data = response.json()
    photos = data.get("photos", [])
    return [photo["src"]["large2x"] for photo in photos[:count]]

def resize_image_preserving_aspect(img, target_size):
    """Resize while preserving aspect ratio and crop to exact size."""
    img_ratio = img.width / img.height
    target_ratio = target_size[0] / target_size[1]

    if img_ratio > target_ratio:
        new_height = target_size[1]
        new_width = int(new_height * img_ratio)
    else:
        new_width = target_size[0]
        new_height = int(new_width / img_ratio)

    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

    # Crop to center
    left = (new_width - target_size[0]) // 2
    top = (new_height - target_size[1]) // 2
    right = left + target_size[0]
    bottom = top + target_size[1]

    return img.crop((left, top, right, bottom))

def replace_images():
    for folder, query in FOLDER_QUERIES.items():
        folder_path = os.path.join(BASE_DIR, folder)
        if not os.path.isdir(folder_path):
            print(f"Skipping missing folder: {folder}")
            continue

        image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif'))]
        image_urls = fetch_image_urls(query, len(image_files))

        if not image_urls:
            print(f"No images found for '{query}'")
            continue

        for i, filename in enumerate(image_files):
            file_path = os.path.join(folder_path, filename)
            try:
                with Image.open(file_path) as original_img:
                    target_size = original_img.size

                image_url = image_urls[i % len(image_urls)]
                response = requests.get(image_url)
                new_img = Image.open(BytesIO(response.content)).convert("RGB")
                resized_img = resize_image_preserving_aspect(new_img, target_size)
                resized_img.save(file_path)
                print(f"✔ Replaced {file_path}")

            except Exception as e:
                print(f"✖ Error replacing {file_path}: {e}")

if __name__ == "__main__":
    replace_images()
