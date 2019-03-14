import React from 'react'                                     
class Arrow extends React.Component{
    render(){

          

        const square = function (x) {
            return x * x;

        };
        const squareArrow = (x) => {
            return x * x;
        };
      

        const squareArrow = (x) => x * x;
        console.log(square(4));

        const getFirstName = (fullName) => {
            return fullName.split( ' ')[0];
        };
         console.log(getFirstName('Mike Smith'));

         

        const add = (a,b) =>  {
            return a + b;


        };
        console.log(add(55, 1));

        const user = {
            name: 'Andrew',
            cities: ['Cal', 'hyd', 'vts'],
            printPlacesLived: function () {
                

                this.cities.forEach((city) => {
                    console.log(this.name + ' has lived in ' + city);
                });

            }
        };
        user.printPlacesLived();
       



        


        return(
            <div>
                
            </div>
        )
    }
} 
export default  Arrow
