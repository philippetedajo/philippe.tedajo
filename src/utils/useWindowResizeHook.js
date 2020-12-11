import { useState, useEffect } from "react"

const useWindowPosition = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }

    window.addEventListener("resize", updateWindowDimensions)
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [])

  return width
}

export default useWindowPosition
