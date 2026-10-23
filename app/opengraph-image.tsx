
import { ImageResponse } from "next/og";

export const alt =
  "Milestone Agency — Strategy, creativity and measurable digital growth";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          padding: "62px 70px",
          background: "#101114",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: -120,
            top: -260,
            width: 650,
            height: 650,
            borderRadius: "50%",
            border: "1px solid #b9f76b55",
            boxShadow: "0 0 0 42px #a893ff0d, 0 0 0 95px #b9f76b08",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 5,
              width: 41,
              height: 41,
              transform: "rotate(-5deg)",
            }}
          >
            <span style={{ display: "flex", width: 18, height: 18, background: "#b9f76b", borderRadius: 3 }} />
            <span style={{ display: "flex", width: 18, height: 18, background: "#a893ff", borderRadius: 3 }} />
            <span style={{ display: "flex", width: 18, height: 18, background: "#a893ff", borderRadius: 3 }} />
            <span style={{ display: "flex", width: 18, height: 18, background: "#b9f76b", borderRadius: 3 }} />
          </div>

          <span style={{ display: "flex", fontSize: 31, fontWeight: 800, letterSpacing: -2 }}>
            milestone<span style={{ display: "flex", color: "#b9f76b" }}>.</span>
          </span>

          <span
            style={{
              display: "flex",
              fontSize: 12,
              letterSpacing: 3,
              color: "#a8aab2",
              marginLeft: 7,
            }}
          >
            GROWTH AGENCY
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 21,
            zIndex: 1,
            maxWidth: 850,
          }}
        >
          <span style={{ display: "flex", fontSize: 15, color: "#b9f76b", letterSpacing: 3 }}>
            STRATEGY · CREATIVITY · PERFORMANCE
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 69,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -4,
            }}
          >
            <span style={{ display: "flex" }}>Make your digital</span>
            <span style={{ display: "flex" }}>
              presence <span style={{ display: "flex", color: "#b9f76b", marginLeft: 16 }}>work harder.</span>
            </span>
          </div>

          <p
            style={{
              display: "flex",
              margin: 0,
              fontSize: 22,
              lineHeight: 1.5,
              color: "#c2c3ca",
              maxWidth: 760,
            }}
          >
            SEO, paid ads, websites and smarter marketing systems—built around your business goals.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 13,
            zIndex: 1,
          }}
        >
          <span style={{ display: "flex", padding: "10px 14px", border: "1px solid #ffffff33", borderRadius: 22, fontSize: 13, color: "#c6c7ce" }}>
            Organic growth
          </span>
          <span style={{ display: "flex", padding: "10px 14px", border: "1px solid #ffffff33", borderRadius: 22, fontSize: 13, color: "#c6c7ce" }}>
            Paid performance
          </span>
          <span style={{ display: "flex", padding: "10px 14px", border: "1px solid #ffffff33", borderRadius: 22, fontSize: 13, color: "#c6c7ce" }}>
            Digital experience
          </span>
          <span
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: 13,
              color: "#b9f76b",
              letterSpacing: 1,
            }}
          >
            BUILT FOR WHAT&apos;S NEXT ↗
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
