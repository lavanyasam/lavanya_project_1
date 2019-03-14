


import React from 'react'    

class Counter extends React.Component {
    constructor(props){
      super(props)
      this.state = {
       myValue: 0
      }
      this.increaseCounter = this.increaseCounter.bind(this)
      this.decreaseCounter = this.decreaseCounter.bind(this)
      this.resetCounter = this.resetCounter.bind(this)
    }
   increaseCounter() {
    
    this.setState({
      myValue: this.state.myValue + 1
    })
  }
    decreaseCounter () {
      this.setState({
        myValue: this.state.myValue -1
      })
    }

    resetCounter () {
        this.setState({
          myValue: 0
        })
      }
    
      
    
    render(){
      return (
        <div>
          <button onClick={this.increaseCounter}>+1</button>
          <h1>Counter : {this.state.myValue}</h1>
            <button onClick={this.decreaseCounter}>-1</button>

              <button onClick={this.resetCounter}>reset</button>
         </div>
      )
    }
  }

  export default Counter