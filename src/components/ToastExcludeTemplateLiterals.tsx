

export default function ToastExcludeTemplateLiterals({position}:ToastType) {
  return (
    <div>ToastExcludeTemplateLiterals</div>
  )
}

type Horizontal = "left"|"center"|"right"

type Vertical = "top"|"center"|"bottom"

type ToastType = {
    position: Exclude<`${Horizontal}-${Vertical}`,"center-center"> | "center"
}

