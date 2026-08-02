import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiHealth — Private signals for healthier screen-based work",
  description: "DigiHealth turns passive posture samples into practical signals for healthier screen-based work—without storing camera footage.",
  metadataBase: new URL("https://digihealth.example"),
  openGraph: {
    title: "DigiHealth — Private signals for healthier screen-based work",
    description: "Private, on-device posture signals for healthier screen-based work.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
