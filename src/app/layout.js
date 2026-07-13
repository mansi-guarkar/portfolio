import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mansi Gaurkar | GTM & Revenue Automation Architect",
  description: "I build automated GTM engines that scale revenue. Leading performance marketing campaigns, data pipelines (SQL, Python), and AI automation to turn digital spend into predictable ROI.",
  keywords: ["GTM Specialist", "Revenue Automation", "Growth Marketing Head", "Performance Marketing", "Zapier", "Make.com", "Python Pandas", "Power BI", "GA4", "GTM Engineer", "RevOps"],
  authors: [{ name: "Mansi Gaurkar" }],
  creator: "Mansi Gaurkar",
  openGraph: {
    title: "Mansi Gaurkar | GTM & Revenue Automation Architect",
    description: "I build automated GTM engines that scale revenue. Leading performance marketing campaigns, data pipelines, and AI automation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-gray-100 font-sans selection:bg-brand-neon/30 selection:text-brand-neon">
        {children}
      </body>
    </html>
  );
}

