import { ImageResponse } from "next/og";

export const alt = "PrimeGlass commercial window cleaning across New York City";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "linear-gradient(135deg, #071a2b 0%, #0c4a6e 48%, #0891b2 100%)",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "72px 78px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          display: "flex",
          inset: 0,
          position: "absolute",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 720,
          position: "relative",
        }}
      >
        <div
          style={{
            color: "#a5f3fc",
            display: "flex",
            fontSize: 23,
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          NYC Commercial Window Cleaning
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.02,
          }}
        >
          Every size. Every shape. Every clear view.
        </div>
        <div
          style={{
            color: "#cffafe",
            display: "flex",
            fontSize: 26,
            lineHeight: 1.4,
            marginTop: 30,
          }}
        >
          Interior and exterior window cleaning across all five boroughs.
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          background: "rgba(255,255,255,.1)",
          border: "2px solid rgba(255,255,255,.2)",
          borderRadius: 36,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          height: 250,
          justifyContent: "center",
          position: "relative",
          width: 250,
        }}
      >
        <div
          style={{
            color: "#ff5a5f",
            display: "flex",
            fontSize: 43,
            fontWeight: 800,
          }}
        >
          Prime
          <span style={{ color: "white" }}>Glass</span>
        </div>
        <div
          style={{
            color: "#a5f3fc",
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          New York City
        </div>
      </div>
    </div>,
    size,
  );
}
