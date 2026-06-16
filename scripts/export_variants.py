"""Export resized variants and a clean PNG master from the generated icon."""
from PIL import Image
from pathlib import Path

SRC = Path("/app/frontend/public/icons/my_funding_bank_icon_1024.png")
OUT = SRC.parent

im = Image.open(SRC).convert("RGB")
print("Source:", im.size, im.format)

# Re-save master as true PNG
master_png = OUT / "my_funding_bank_icon_1024.png"
im.save(master_png, format="PNG", optimize=True)
print(f"Master PNG: {master_png} -> {master_png.stat().st_size} bytes")

# Play Store + iOS standard sizes
sizes = [512, 192, 180, 152, 120, 96, 72, 48]
for s in sizes:
    out = OUT / f"my_funding_bank_icon_{s}.png"
    resized = im.resize((s, s), Image.LANCZOS)
    resized.save(out, format="PNG", optimize=True)
    print(f"{out.name}: {out.stat().st_size} bytes")

print("Done.")
