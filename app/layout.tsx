import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SEOHead from "@/components/seo-head"
import AdvancedAnalytics from "@/components/analytics/advanced-analytics"
import ContentSecurity from "@/components/security/content-security"
import { generatePersonStructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Srinivas Nampalli - AI & Automation Engineer | Professional Services",
    template: "%s | Srinivas Nampalli",
  },
  description:
    "Professional AI development, automation, and consulting services. Transform your business with custom chatbots, machine learning models, and intelligent workflows. Expert freelancer specializing in AI solutions.",
  keywords: [
    "AI Engineer",
    "Automation",
    "Machine Learning",
    "Mechanical Engineering",
    "Python",
    "React",
    "Next.js",
    "AI Consulting",
    "Chatbot Development",
    "Business Automation",
    "Freelancer",
    "AI Services",
    "Custom AI Solutions",
    "Technical Consulting",
  ],
  authors: [{ name: "Srinivas Nampalli", url: "https://srinivas26k.github.io" }],
  creator: "Srinivas Nampalli",
  publisher: "Srinivas Nampalli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srinivas26k.github.io",
    title: "Srinivas Nampalli - AI & Automation Engineer | Professional Services",
    description:
      "Professional AI development, automation, and consulting services. Transform your business with cutting-edge AI solutions.",
    siteName: "Srinivas Nampalli Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srinivas Nampalli - AI & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinivas Nampalli - AI & Automation Engineer",
    description: "Professional AI development and automation services",
    images: ["/assets/og-image.png"],
    creator: "@srinivaskv",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://srinivas26k.github.io",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generatePersonStructuredData({
    name: "Srinivas Nampalli",
    jobTitle: "AI & Automation Engineer",
    url: "https://srinivas26k.github.io",
    email: "srinivasvarma764@gmail.com",
    location: "Hyderabad, India",
    sameAs: [
      "https://github.com/Srinivas26k",
      "https://www.linkedin.com/in/srinivas-nampalli/",
      "https://medium.com/@srinivaskv",
      "https://patreon.com/TechWithSrinivas",
    ],
    image: "/assets/profile-image.jpg",
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEOHead structuredData={structuredData} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
          <AdvancedAnalytics googleAnalyticsId="G-XXXXXXXXXX" />
          <ContentSecurity />
        </ThemeProvider>
      </body>
    </html>
  )
}
