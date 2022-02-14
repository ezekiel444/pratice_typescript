
import React from 'react'

export default function PolyMorpic<E extends React.ElementType = "div">({size,color,children,as}:propType<E>) {
    const ComponentElement = as || "div"
  return (
    <ComponentElement className={`class-with-${size}-${color}`}>{children}</ComponentElement>
  )
}


type propsElement<E extends React.ElementType> = {
    children:React.ReactNode
    size:"sm" | "md" | "lg"
    color:"primary" | "secondary"
    as?:E
}

type propType<E extends React.ElementType> = propsElement<E> & Omit<React.ComponentProps<E>, keyof propsElement<E>>