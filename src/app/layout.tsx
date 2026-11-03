import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Harsh Verma · Video Editor Portfolio";
const description =
  "Reels, ads and brand films for coaches, clinics, founders and growing businesses, edited to keep people watching.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Harsh Verma Portfolio",
  authors: [{ name: "Harsh Verma" }],
  keywords: [
    "video editor",
    "video editing",
    "reels editor",
    "short form video",
    "brand films",
    "Harsh Verma",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Harsh Verma · Video Editor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
