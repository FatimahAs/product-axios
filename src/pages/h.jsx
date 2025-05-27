import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [info, setInfo] = useState('posts');
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get('https:').then((res) => { setItem(res.data) })
      //.then((response) => response.json())
    //.then((data) => setItem(data))

  },[])

// 3type
  return (
    <>
      <p>{info}</p>
      {item.map(items => {
        return (
          <>
            <li>{items}</li>
          </>
        )
      })}
      <button onClick={() => {
        (setInfo('posts'))
      }}
      >post</button>
        <button onClick={() => {
        (setInfo('albums'))
      }}
      >albums</button>
        <button onClick={() => {
        (setInfo('users'))
      }}
      >users</button>
    </>
  )
}

export default App
