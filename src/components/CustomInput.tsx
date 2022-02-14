
export default function CustomInput({variant, ...rest}:InputProps) {
  return (
    <input type="text" className={variant} {...rest} />
  )
}

type InputProps = {
    variant:"primary" | "secondary"
} & React.ComponentProps<"input">