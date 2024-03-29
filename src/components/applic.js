import React from 'react'                                     
class Applic extends React.Component{
    render(){
    
        const user = {
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of a computer',
            options: []
            
        };

        const onFormSubmit = (e) => {
            e.preventDefault();

            const option = e.target.elements.option.value;

            if(option) {
             user.options.push(option);
             e.target.elements.option.value = ' ';
             this.render();
             
            }
         };

        const onRemoveAll = () => {
            user.options = [];

        };
        const onMakeDecision = () => {
            const randomNum = Math.floor(Math.random() * user.options.length);
            const option = user.options[randomNum];
            alert(option);
            
        };

             return(
                <div>
                    <h1>{user.title}</h1>
                    {user.subtitle && <p>{user.subtitle}</p>}
                    <p>{user.options.length > 0 ? 'Here are your options' : 'No options'}</p>
                   <button onClick={onMakeDecision}>What should I do?</button>
                    <button onClick={onRemoveAll}>Remove All</button>
                    <ol>
                        
                        {
                            user.options.map((option) => {
                                return <li key={option}>{option}</li>

                            })
                        }
                    </ol>
                    <form onSubmit={onFormSubmit}>
                        <input type="text" name="option"></input>
                        <button>Add Option</button>
                    </form>
    
                </div>
            );
           
        
        
        
    }
    
} 


export default Applic



