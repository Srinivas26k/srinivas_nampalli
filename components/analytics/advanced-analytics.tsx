"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string
}

export default function AdvancedAnalytics({ googleAnalyticsId }: AnalyticsProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (!googleAnalyticsId) return

    // Initialize Google Analytics
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_dimension_1': 'user_type',
          'custom_dimension_2': 'content_category'
        }
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [googleAnalyticsId])

  // Track page views
  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", googleAnalyticsId, {
        page_path: pathname,
      })
    }
  }, [pathname, googleAnalyticsId])

  return null
}

// Custom event tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackServiceInquiry = (serviceName: string, pricing: string) => {
  trackEvent("service_inquiry", "Services", serviceName, Number.parseInt(pricing.replace(/[^0-9]/g, "")))
}

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("download", "Files", `${fileName}.${fileType}`)
}

export const trackSocialClick = (platform: string, location: string) => {
  trackEvent("social_click", "Social Media", `${platform}_${location}`)
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent(success ? "form_submit_success" : "form_submit_error", "Forms", formName)
}
