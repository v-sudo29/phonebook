import React, { useEffect, useState } from 'react'

function App() {
  
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("https://render-test-skhh.onrender.com/api/persons", {
      mode: 'no-cors'
    }).then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof backendData === "undefined") 
        ? <h1>Loading...</h1>
        : backendData.map((person, id) => {
          return (
            <p key={id}>{person.name}</p>
          )
        })
      }

    </div>
  )
}

export default App