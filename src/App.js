import React, { useState, useEffect } from 'react';
import CharacterList from './components/characters/CharacterList';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import './App.css';


export const App = () => {
  const [items,setItems] =useState([])
  const [isLoading,setLoading] =useState(true)

  useEffect(() => {
    const fetchItems= async ()=>{
      setLoading(true)
      const result=await fetch('https://akabab.github.io/starwars-api/api/all.json')
                        .then(response =>response.json())
      setLoading(false)
      setItems(result)
    }
    fetchItems()
  }, [])

  return(
    <div className="container">
      <Header/>
      <CharacterList items={items} isLoading={isLoading} />
      <Footer/>
    </div>
  )
}

export default App;