import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "LivedIt — Your Social Bucket List",
  description:
    "Save experiences you want to do, complete them with photos and notes, and share the memories with friends. Available on iOS.",
  openGraph: {
    title: "LivedIt — Your Social Bucket List",
    description:
      "Save, complete, and share your bucket list experiences with friends.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
