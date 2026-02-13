import { useState, useEffect } from "react"

/**
 * Hook to track if a component has been mounted on the client.
 * Useful for avoiding hydration mismatches with theme-dependent rendering.
 *
 * @returns boolean - true after component has mounted on client
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
