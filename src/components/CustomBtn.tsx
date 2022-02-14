import React, { ButtonHTMLAttributes } from "react"

export default function CustomBtn({variant,children, ...rest}:CustomColor) {
  return (
        <button className={`${variant}`} {...rest}>{children}</button>
  )
}


type CustomColor = {
    variant:"primary" | "secondary",
    children:string
} & Omit<React.ComponentProps<"button">,"children">