import React, { Component } from 'react';

 import './App.css';
import 'normalize.css/normalize.css';
 import './style/styles.scss';


import Header from './components/header';
import Action from './components/action';
import Options from './components/options';
import Option from './components/option';
import Option1 from './components/option1';

import OptionModal from './components/modal' ;





class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption =  this.handleAddOption.bind(this);
    this.handleDeleteOption =  this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }) ); 
  }
  
  handleDeleteOption(optionToRemove) 
  {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })

      
    
    }) );
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }) );
  }
  handleAddOption(option) {
    if (!option) {
       return 'Enter valid value to add item';
       
    }else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => {
     
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in hands of a computer';
  
    return (
      <div className="App">
      
      
      <Header title={title} subtitle={subtitle}/>
      <div className="container">
      <Action hasOptions={this.state.options.length > 0} 
      handlePick={this.handlePick}
      />
      <div className="widget">

        <Options 
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      handleDeleteOption={this.handleDeleteOption}
      />
      <Option />
      <Option1 
      handleAddOption={this.handleAddOption}
      />
      </div>
      
      </div>
      <OptionModal 
      selectedOption={this.state.selectedOption}
      handleClearSelectedOption={this.handleClearSelectedOption}
      />

      

      
     
      
     
      
    
      
      </div>
    );
  }
}

export default App;
