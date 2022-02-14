
type personArr = {
    names:{
           name:string,
            age:Number
        }[]
    
}

export default function PersonList(props:personArr) {
  return <div>{props.names.map(person=> person.name)}</div>;
}
