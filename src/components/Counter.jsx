import React, {useState} from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   function increment() {
      setCount(count + 1);
   }

   function decrement() {
      setCount(count - 1);
   }

   return (
      <div className="counter">
         <h1>{count}</h1>
         <div className="buttons">
            <button className="button" onClick={increment}>Increment</button>
            <button className="button" onClick={decrement}>Decrement</button>
         </div>
      </div> 
   )
}

export default Counter;