// create a beautiful error page
import React from 'react'
import Header from './Header'
import { useRouteError } from 'react-router-dom'

const Error = () => {
const err = useRouteError();
  return (
    <div>
    <Header/>
      {/* create profile information */}
        <h1>Opps!!! </h1>
        <h4>
            <p>{err.status}:{err.statusText}</p>
        </h4>
    </div>
  )
}
export default Error