// another example of hooks use state:for usesate with previous state

import React ,{useState} from 'react'

function HookCountertwo() {
    const initialcount = 0
    const [count,ssetcount]= useState(initialcount)

    // const increamentfive = () =>{
    //     for ( let i=0 ;i<5;i++){
    //         ssetcount(prevcount =>prevcount + 1)
    //     }
    
  return (
    <div>
        count:{count}
        <button onClick={() =>ssetcount(initialcount)}>Reset</button>
        <button onClick={ () =>ssetcount(count + 1)}>Icreament</button>
        <button onClick={ () =>ssetcount(count - 1)}>Decreament</button>
        {/* <button onClick={increamentfive}>Increament By 5</button> */}
      
    </div>
  )
}

export default HookCountertwo
