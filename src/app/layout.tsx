import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keerti-bhatnagar.vercel.app"), // Change this!
  title: {
    default: "Keerti Bhatnagar",
    template: "%s | Keerti Bhatnagar",
  },
  description: "bringing ideas to life with code!",

  openGraph: {
    title: "Keerti Bhatnagar",
    description: "bringing ideas to life with code!",
    url: "/",
    siteName: "Keerti Bhatnagar",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Keerti Bhatnagar",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Keerti Bhatnagar",
    description: "bringing ideas to life with code!",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";

  return (
    <html lang="en" className={theme}>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
