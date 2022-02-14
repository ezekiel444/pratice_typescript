
import React from 'react'
import CustomBtn from './CustomBtn'
import PersonList from './PersonList'

export default function ExtractAProps(props:React.ComponentProps<typeof PersonList>) {
  return (
    <div>{props.names}</div>
  )
}
