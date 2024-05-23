import React ,{useState,useEffect}from 'react'
import Hookmouse from './Hookmouse'
// toggle on the button for component visibilty 
function MouseContainer() {

    const[display,setdisplay]=useState(true)
  return (
    <div>
      <button onClick={ () =>setdisplay(!display)}>Toggle display</button>
      
      {display && <Hookmouse />}
    </div>
  )
}

export default MouseContainer
