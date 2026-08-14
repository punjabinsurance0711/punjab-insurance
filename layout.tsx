import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.punjabinsuranceagency.com"),
  title: "Punjab Insurance | Auto, Home, Commercial & SR-22 Insurance",
  description:
    "Punjab Insurance has served California families and businesses since 2000. Get Home, Auto, Commercial, Flood and SR-22 insurance with personalized service and competitive rates.",
  keywords: [
    "insurance Sacramento",
    "insurance Elk Grove",
    "auto insurance Sacramento",
    "home insurance Sacramento",
    "commercial insurance Sacramento",
    "SR-22 Sacramento",
    "Punjab Insurance"
  ],
  openGraph: {
    title: "Punjab Insurance | Trusted Since 2000",
    description:
      "Home, Auto, Commercial, Flood and SR-22 insurance for Sacramento and surrounding communities.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}