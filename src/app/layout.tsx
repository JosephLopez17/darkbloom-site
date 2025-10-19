import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darkbloom Digital",
  description: "Automation. Elevated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
