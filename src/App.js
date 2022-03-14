import React, { useEffect } from 'react'
import Section from './Components/sections/Section'
import data from './data/data.json'

const App = () => {

  useEffect(()=>{
    document.title = "Brahmware-app"
  },[])

  const list = data.scrolldata
  return (
    <>
      <Section list={list} />
    </>
  )
}

export default App