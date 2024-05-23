import React, {useState , useEffect } from 'react'

function HookCounter4() {
    const[count,setcont] = useState(0)
    const[name,setname] = useState('')

    useEffect(() => {
        console.log('useeffect :updating title')
        document.title =`you clicked ${count} times`
    },[count])
    


  
  return (
    <div>
        COUNT:{count}
        <input type="text" value={name} onChange={e =>setname(e.target.value)}></input>
      <button onClick={ ()=>setcont(count + 1)}>CLICK</button>
    </div>
  )
}


export default HookCounter4
