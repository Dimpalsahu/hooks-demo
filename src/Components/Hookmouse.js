import React ,{useState,useEffect}from 'react'
// mousehover Event
function Hookmouse() {
    const[x , setx] =useState(0)
    const[y,sety] =useState(0)

    const logmouseposition = e =>{
        console.log('mouse event')
        setx(e.clientX)
        sety(e.clientY)
        // client x/y is a propertiesof movesEvent for horizontal,vertically
    }
    useEffect(() =>{
     console.log('useeffect called')
     window.addEventListener('mousemove' , logmouseposition)
     return () =>{
        console.log('component unmounting ')
        window.removeEventListener('mouseover',logmouseposition)
     }
    },[])
  return (
    <div>
      Hooks X -{x} Y-{y}
    </div>
  )
}

export default Hookmouse
