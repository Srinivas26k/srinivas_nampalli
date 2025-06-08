"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface RateLimiterProps {
  maxRequests: number
  windowMs: number
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function RateLimiter({ maxRequests, windowMs, children, fallback }: RateLimiterProps) {
  const [requestCount, setRequestCount] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)

  useEffect(() => {
    const key = "rate_limit_requests"
    const timeKey = "rate_limit_time"

    const stored = localStorage.getItem(key)
    const storedTime = localStorage.getItem(timeKey)

    const now = Date.now()
    const requests = stored ? Number.parseInt(stored) : 0
    const lastTime = storedTime ? Number.parseInt(storedTime) : now

    // Reset if window has passed
    if (now - lastTime > windowMs) {
      localStorage.setItem(key, "0")
      localStorage.setItem(timeKey, now.toString())
      setRequestCount(0)
      setIsBlocked(false)
    } else {
      setRequestCount(requests)
      setIsBlocked(requests >= maxRequests)
    }
  }, [maxRequests, windowMs])

  const incrementRequests = () => {
    const newCount = requestCount + 1
    setRequestCount(newCount)
    localStorage.setItem("rate_limit_requests", newCount.toString())

    if (newCount >= maxRequests) {
      setIsBlocked(true)
    }
  }

  if (isBlocked && fallback) {
    return <>{fallback}</>
  }

  return <div onClick={incrementRequests}>{children}</div>
}
