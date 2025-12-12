import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://philippetedajo.com"),
  title: {
    default: "Philippe Tedajo - Frontend Engineer",
    template: "%s | Philippe Tedajo",
  },
  description:
    "Philippe Tedajo - Frontend Engineer specializing in React, Next.js, and modern web technologies. AI enthusiast building innovative digital experiences.",
  keywords: [
    "Philippe Tedajo",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "AI",
    "Software Engineer",
  ],
  authors: [{ name: "Philippe Tedajo", url: "https://philippetedajo.com" }],
  creator: "Philippe Tedajo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://philippetedajo.com",
    siteName: "Philippe Tedajo",
    title: "Philippe Tedajo - Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and modern web technologies. AI enthusiast building innovative digital experiences.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 800,
        height: 800,
        alt: "Philippe Tedajo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philippe Tedajo - Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and modern web technologies. AI enthusiast building innovative digital experiences.",
    images: ["/avatar.jpeg"],
    creator: "@philippetedajo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
