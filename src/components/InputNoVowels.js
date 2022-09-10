import React from 'react'

const InputNoVowels = () => {

    const KeyDownHandler = (event) => {

        const vocales = ['a', 'e', 'i', 'o', 'u']
        
        if(vocales.includes(event.key.toLowerCase())) {
            event.preventDefault()
        }
    }
  
  
   return (
    
    <div>
        <h2>Input sin vocales</h2>
        <input onKeyDown={
           KeyDownHandler
        } type="text"></input>
    </div>
    
  )
}

export default InputNoVowels