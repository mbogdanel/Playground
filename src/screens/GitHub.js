import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const GitHub = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/mbogdanel')
      .then((response) => response.json())
      .then((data) => setUserData(data))
    console.log(userData)
  }, [])
  console.log(userData)

  return (
    <div>
      <h1>{userData.name}</h1>
      <h1>
        <a href={userData.blog}>GitHub Website</a>
      </h1>

      <h1>{userData.location}</h1>
      <h1>{userData.public_repos}</h1>
    </div>
  )
}

export default GitHub
