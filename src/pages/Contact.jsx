import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'


export function Contact() {
 const [search, setSearch] = useSearchParams()
 console.log();
 let { name, id } = useParams()
 console.log(search.get('price'))
 return (
  <div>{<Catagory name={[name, id]} />}</div>
 )
}

export function Catagory({ name, id }) {
 return (
  <h3>You are viewing - {name}, {id}</h3>
 )
}