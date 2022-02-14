
import React, { Children } from 'react'

export default function Polymorfix<W extends React.ElementType = "div">({size, color, children,as}:Proptype<W>) {
    const Component = as || "div"
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}

type Elementtype<T extends React.ElementType> = {
    size:"sm" | "md" | "lg"
    color:"primary" | "secondary"
    children:React.ReactNode
    as?:T
}

type Proptype<E extends React.ElementType> = Elementtype<E> & Omit<React.ComponentProps<E>, keyof Elementtype<E>>