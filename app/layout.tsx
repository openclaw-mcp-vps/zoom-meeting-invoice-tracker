import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom Meeting Invoice Tracker — Convert Zoom calls into billable time entries",
  description: "Automatically extract meeting attendees, duration, and project context from Zoom to create invoice line items with client billing rates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bcdc8ebd-aabd-4aa7-93a5-94a6892b4788"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
