import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const stack = profile.stackLine.split(" · ");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#0a0c10",
        backgroundImage:
          "radial-gradient(ellipse 900px 420px at 50% -10%, rgba(37,99,235,0.35), transparent 70%)",
        color: "#e8ebf0",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 14,
            border: "3px solid #2563eb",
            fontSize: 26,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a3abb9" }}>
          {profile.location} · {profile.availability}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 12, color: "#e8ebf0" }}>
          {profile.role}
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid #2c3442",
                backgroundColor: "#11151c",
                color: "#7fb0ff",
                fontSize: 26,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
