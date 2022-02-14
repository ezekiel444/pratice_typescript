

export default function PropsRestriction({value, login,logout,isNull}:PropsType){
    return <div>
       {value} {login && login} {logout && logout} {isNull && isNull}
    </div>
}

type ValueType = {
    value:number
}

type Login = ValueType & {
    login:boolean,
    logout?:never,
    isNull?:never
}

type Logout = ValueType & {
    logout:boolean,
    login?:never,
    isNull?:never
}

type Null = ValueType & {
    isNull:boolean,
    login?:never,
    logout?:never,
}




type PropsType = Login | Logout | Null;