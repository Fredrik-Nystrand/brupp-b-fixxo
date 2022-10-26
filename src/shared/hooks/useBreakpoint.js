import { useEffect, useState, useMemo, useCallback } from "react"

const useBreakpoint = () => {
  const [getWidth, setWidth] = useState(window.innerWidth)
  const [getHeight, setHeight] = useState(window.innerHeight)
  const [getCurrentBreakpoint, setCurrentBreakpoint] = useState("")

  const breakpoints = useMemo(() => {
    return {
      xs: { from: 0, to: 575.98 },
      sm: { from: 576, to: 767.98 },
      md: { from: 768, to: 991.98 },
      lg: { from: 992, to: 1199.98 },
      xl: { from: 1200, to: 1399.98 },
      xxl: { from: 1400, to: 9999999 },
    }
  }, [])

  const checkCurrentSize = useCallback(() => {
    if (getWidth >= breakpoints.xs.from && getWidth <= breakpoints.xs.to) {
      return "xs"
    }

    if (getWidth >= breakpoints.sm.from && getWidth <= breakpoints.sm.to) {
      return "sm"
    }

    if (getWidth >= breakpoints.md.from && getWidth <= breakpoints.md.to) {
      return "md"
    }

    if (getWidth >= breakpoints.lg.from && getWidth <= breakpoints.lg.to) {
      return "lg"
    }

    if (getWidth >= breakpoints.xl.from && getWidth <= breakpoints.xl.to) {
      return "xl"
    }

    if (getWidth >= breakpoints.xxl.from && getWidth <= breakpoints.xxl.to) {
      return "xxl"
    }
  }, [breakpoints, getWidth])

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("resize", resize)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  useEffect(() => {
    setCurrentBreakpoint(checkCurrentSize())
  }, [getWidth, checkCurrentSize])

  const lessThan = (breakpoint) => {
    if (getWidth < breakpoints[breakpoint].from) {
      return true
    }

    return false
  }

  const moreThan = (breakpoint) => {
    if (getWidth > breakpoints[breakpoint].to) {
      return true
    }

    return false
  }

  const between = (min, max) => {
    if (getWidth >= breakpoints[min].to && getWidth < breakpoints[max].from) {
      return true
    }

    return false
  }

  return { getCurrentBreakpoint, getWidth, getHeight, lessThan, moreThan, between }
}

export default useBreakpoint
