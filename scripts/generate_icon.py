"""Generate premium 'My Funding Bank' app icon using Gemini Nano Banana."""
import asyncio
import os
import base64
import sys
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

PROMPT = """Ultra high resolution 1024x1024 premium mobile app icon for a fintech investment app called "My Funding Bank".

Composition: Rounded-square app icon (iOS / Play Store style). Centered, perfectly symmetrical, front-facing close-up of an aggressive yet professional 3D stock-market bull head with sharp geometric vector facets — strong jaw, flared nostrils, powerful pointed horns curving upward. The bull is rendered in polished metallic deep navy and chrome silver with subtle gold accents on the horn tips.

Eyes: Glowing crimson red eyes with realistic volumetric lighting, soft red bloom and lens-flare highlights — intense but luxurious, not cartoonish.

Behind the bull: A large circular gold coin halo with a clearly embossed Indian Rupee symbol (₹) on it, glowing warmly, looking like brushed 18k gold. The coin sits directly behind the bull's head like a sun/medallion.

Integrated growth chart: A sharp upward-rising candlestick / line graph in luminous neon-green and white emerging from the bottom of the icon and ascending behind the bull's shoulders, with a glowing arrow tip pointing up to the top-right. Subtle grid lines.

Background: Smooth premium gradient from deep navy blue at the bottom to bright sky blue at the top, with soft radial glow behind the coin. Slight subtle bokeh/particles of gold dust for luxury feel.

Style: Modern fintech branding, clean minimal luxury, sharp geometric vector design with premium 3D appearance, high contrast, crisp edges, ultra-detailed, photoreal-meets-vector. Strong rim lighting. Looks similar in quality to top investment / trading app icons (Groww, Zerodha, Robinhood, Coinbase tier).

Strictly NO text, NO letters, NO words, NO numbers anywhere on the icon. No cartoon style. No clutter. Just the bull + gold rupee coin + upward chart on the blue gradient.

Format: Perfect square 1024x1024, rounded-square app icon shape with soft inner shadow on the rounded corners. Play Store and App Store optimized."""


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        print("ERROR: EMERGENT_LLM_KEY not found", file=sys.stderr)
        sys.exit(1)

    out_dir = Path("/app/frontend/public/icons")
    out_dir.mkdir(parents=True, exist_ok=True)

    chat = LlmChat(
        api_key=api_key,
        session_id="myfundingbank-icon-gen",
        system_message="You are an elite app-icon designer for premium fintech brands."
    )
    chat.with_model("gemini", "gemini-3-pro-image-preview").with_params(modalities=["image", "text"])

    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    print("Model text response (truncated):", (text or "")[:200])

    if not images:
        print("ERROR: No images returned", file=sys.stderr)
        sys.exit(2)

    for i, img in enumerate(images):
        print(f"Image {i} mime: {img['mime_type']}, preview: {img['data'][:10]}")
        image_bytes = base64.b64decode(img['data'])
        master_path = out_dir / "my_funding_bank_icon_1024.png"
        with open(master_path, "wb") as f:
            f.write(image_bytes)
        print(f"Saved master icon -> {master_path} ({len(image_bytes)} bytes)")

    return str(out_dir / "my_funding_bank_icon_1024.png")


if __name__ == "__main__":
    asyncio.run(main())
