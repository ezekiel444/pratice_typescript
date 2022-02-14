

import React,{useState} from 'react';

type Auth = {
    name:string,
    email:string
}

export default function UserState() {
    const [login,setLogin] = useState<null | Auth>({} as Auth)

    const log = ()=>{
        setLogin({
            name:"matomi",
            email:"matomi@em.com"
        })
    }

    const logout = ()=>{
        setLogin(null)
    }


  return <div>
      <p>{login?.name ? "login": "login out"}</p>
      <p>{login?.email ? "mail in": "mail out"}</p>
  </div>;
}
