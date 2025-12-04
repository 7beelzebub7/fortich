import { useEffect, useRef } from "react"
import type { ReactNode } from "react"
import { annotate } from "rough-notation"
import type { RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  animationDelay?: number
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  animationDelay = 0,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const annotation = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    })
    annotationRef.current = annotation

    // Retardo exacto antes de mostrar la animación
    const timeout = setTimeout(() => {
      annotation.show()
    }, animationDelay)

    return () => {
      clearTimeout(timeout)
      annotationRef.current?.remove()
    }
  }, [action, color, strokeWidth, animationDuration, iterations, padding, multiline, animationDelay])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
