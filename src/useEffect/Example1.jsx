import React, { useEffect, useState } from 'react'




export const Example1 = () => {
    const [count, setCount] = useState(0);

    const fetcthData = async ()=>{
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await response.json();
            console.log(data);
        }
        catch(error){
            console.log("Error", error)
        }
    }

    useEffect(()=>{
        
        fetcthData();
    }, [count])

    function clickFun(){
        setCount(count + 1);
    }
    
  return (
    <div>
        {count}
        <Button clickFun={clickFun}/>
    </div>
  )
}

function Button({clickFun}){
    return <button onClick={clickFun}>INC</button>
}
