
import { useEffect, useState } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkIfMobile()

    // Set up listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}
