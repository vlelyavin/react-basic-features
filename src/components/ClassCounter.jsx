import React from "react";

class ClassCounter extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         count: 0
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this)
      
   }

   increment() {
      this.setState({count: this.state.count + 1});
   }

   decrement() {
      this.setState({count: this.state.count - 1});
   }

   render() {
   
      return (
         <div className="counter">
            <h1>{this.state.count}</h1>
            <div className="buttons">
            <button className="button" onClick={this.increment}>Increment</button>
            <button className="button" onClick={this.decrement}>Decrement</button>
            </div>
         </div> 
      )    
   }
}

export default ClassCounter;