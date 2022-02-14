
type Status = {
    status:"Loading" | "data" | "error"
}

export default function Status(props:Status) {
    let message;
    if(props.status === "Loading"){
        message = "Message loading"
    } else if(props.status === "data"){
        message = "Message data successful"
    }
    if(props.status === "error"){
        message = "error loading data"
    }
  return <div>{message}</div>;
}
