type subheadingType = {
    children: JSX.Element
}

export default function SubHeading(props:subheadingType) {
  return <div>{props.children}</div>;
}
