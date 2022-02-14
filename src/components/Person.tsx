import {Name} from "./Person.types"

export default function Person(props:Name) {
  return <div>{props.name} --- {props.name.info.age}</div>;
}
