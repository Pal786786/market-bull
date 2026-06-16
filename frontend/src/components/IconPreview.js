import React, { useState } from "react";

const SIZES = [1024, 512, 192, 180, 152, 120, 96, 72, 48];
const ICON_BASE = "/icons/my_funding_bank_icon_";

export default function IconPreview() {
  const [variant, setVariant] = useState(1024);
  const masterUrl = `${ICON_BASE}1024.png`;

  return (
    <div
      data-testid="icon-preview-page"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% 0%, #0b3b6b 0%, #06182f 55%, #03060d 100%)",
        color: "#e7ecf3",
        fontFamily: "'Fraunces', 'Cormorant Garamond', Georgia, serif",
        padding: "56px 24px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                letterSpacing: "0.22em",
                fontSize: 12,
                color: "#ffd66b",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                margin: 0,
              }}
            >
              PREMIUM FINTECH ASSET — DELIVERABLE
            </p>
            <h1
              data-testid="icon-preview-title"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                margin: "10px 0 0",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              My Funding Bank — App Icon
            </h1>
            <p
              style={{
                marginTop: 12,
                maxWidth: 620,
                color: "#9fb0c8",
                fontSize: 16,
                lineHeight: 1.55,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Aggressive 3D bull head, glowing crimson eyes, gold rupee medallion
              and rising candlestick chart on a sky-to-deep-blue gradient.
              1024×1024 master, optimized for Play Store &amp; App Store.
            </p>
          </div>

          <a
            data-testid="download-master-btn"
            href={masterUrl}
            download
            style={{
              padding: "14px 22px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#ffd66b,#c98a17)",
              color: "#1a0f00",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 12px 30px rgba(201,138,23,0.35)",
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: "0.04em",
            }}
          >
            DOWNLOAD 1024×1024 PNG
          </a>
        </header>

        <main
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 1.1fr) 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <section
            data-testid="icon-stage"
            style={{
              position: "relative",
              padding: 32,
              borderRadius: 28,
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,214,107,0.18)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 18,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#ffd66b",
                letterSpacing: "0.2em",
              }}
            >
              ICON · {variant}×{variant}
            </div>

            <div
              style={{
                aspectRatio: "1 / 1",
                width: "100%",
                borderRadius: 36,
                overflow: "hidden",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05) inset",
                background: "#000",
              }}
            >
              <img
                data-testid="icon-master-img"
                key={variant}
                src={`${ICON_BASE}${variant}.png`}
                alt="My Funding Bank icon"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 22,
              }}
            >
              {SIZES.map((s) => (
                <button
                  key={s}
                  data-testid={`size-chip-${s}`}
                  onClick={() => setVariant(s)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 999,
                    border:
                      variant === s
                        ? "1px solid #ffd66b"
                        : "1px solid rgba(255,255,255,0.14)",
                    background:
                      variant === s
                        ? "rgba(255,214,107,0.14)"
                        : "transparent",
                    color: variant === s ? "#ffd66b" : "#cdd6e3",
                    cursor: "pointer",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                  }}
                >
                  {s}px
                </button>
              ))}
            </div>
          </section>

          <section data-testid="specs-panel">
            <h2
              style={{
                fontSize: 22,
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
                fontWeight: 500,
              }}
            >
              Design specs
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 12,
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 15,
                color: "#bcc7d8",
              }}
            >
              {[
                ["Format", "Rounded-square, 1024×1024, PNG"],
                ["Subject", "Front-facing 3D bull, sharp geometric vector"],
                ["Eyes", "Crimson glow with realistic bloom"],
                ["Gold element", "Embossed ₹ rupee coin medallion"],
                ["Chart", "Rising candlestick + arrow, neon green"],
                ["Background", "Sky blue → deep navy gradient"],
                ["Optimized for", "Google Play & Apple App Store"],
              ].map(([k, v]) => (
                <li
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "12px 0",
                    borderBottom: "1px dashed rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ color: "#7f8fa6", letterSpacing: "0.04em" }}>
                    {k}
                  </span>
                  <span style={{ textAlign: "right", color: "#e7ecf3" }}>
                    {v}
                  </span>
                </li>
              ))}
            </ul>

            <h3
              style={{
                fontSize: 18,
                margin: "28px 0 12px",
                fontWeight: 500,
              }}
            >
              Export variants
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gap: 12,
              }}
            >
              {SIZES.map((s) => (
                <a
                  key={s}
                  data-testid={`download-${s}`}
                  href={`${ICON_BASE}${s}.png`}
                  download
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    padding: 12,
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                    color: "#e7ecf3",
                    background: "rgba(255,255,255,0.02)",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = "#ffd66b";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  <img
                    src={`${ICON_BASE}${s}.png`}
                    alt={`${s}px icon`}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 14,
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#9fb0c8",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s}×{s}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer
          style={{
            marginTop: 56,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 12,
            color: "#6a778c",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
          }}
        >
          GENERATED · GEMINI 3 PRO IMAGE · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
