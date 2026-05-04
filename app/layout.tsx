import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sunhof - Zonnebank Studio",
  description: "Welkom bij Sunhof, uw zonnebank studio met 4 zonnebanken en een Sunpilot stoel. Geniet van een natuurlijke, gezonde kleur het hele jaar door.",
  icons: {
    icon: "/logo/sunhoflogodef.jpg",
    shortcut: "/logo/sunhoflogodef.jpg",
    apple: "/logo/sunhoflogodef.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
