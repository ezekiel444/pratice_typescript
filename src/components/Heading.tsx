type headtype = {
    children:string
}

export default function Heading(props:headtype) {
  return <div>{props.children}</div>;
}
