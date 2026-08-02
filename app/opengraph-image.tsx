import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DigiHealth — Private signals for healthier screen-based work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() { return new ImageResponse(<div style={{ height: "100%", width: "100%", background: "#0a1015", color: "#e8ece8", display: "flex", flexDirection: "column", padding: "72px", fontFamily: "sans-serif", position: "relative" }}><div style={{ color: "#7af7d0", fontSize: 28, letterSpacing: 4 }}>DIGIHEALTH</div><div style={{ fontSize: 78, letterSpacing: -5, lineHeight: 1.02, width: 820, marginTop: 80 }}>Private signals for healthier screen-based work.</div><div style={{ display: "flex", gap: 12, marginTop: 55 }}><div style={{ padding: "14px 24px", border: "1px solid #7af7d055", color: "#7af7d0", borderRadius: 30 }}>ON-DEVICE</div><div style={{ padding: "14px 24px", border: "1px solid #7af7d055", color: "#7af7d0", borderRadius: 30 }}>PRIVATE BY DESIGN</div></div></div>, size); }
