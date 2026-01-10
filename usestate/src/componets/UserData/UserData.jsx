import React from 'react'

const UserData = ({single}) => {
     const {name,email,website,phone,company}=single
  return (
    <div>
        <h1>Name: {name}</h1>
        <p>Phone: {phone}</p>
        <h3>Email: {email}</h3>
        <h4>Website: {website}</h4>
        <h2>Company Name : {company.name}</h2>
    </div>
  )
}

export default UserData