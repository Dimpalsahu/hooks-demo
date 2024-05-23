import React ,{useState} from 'react'

function HookCounter() {

const [count,setCount] = useState(0)
// array destruturing count,setcount two paramerter of array anything you want count for count the value,setcount for update value
  return (
    <div>
      <button onClick={() =>setCount(count+1)}>Count{count}</button>
    </div>
  )
}

export default  HookCounter