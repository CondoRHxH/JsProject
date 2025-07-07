let input = document.getElementById('inputBox'); // getting the input


let buttons = document.querySelectorAll('button'); //Getting all the buttons


let string = "";  // Empty string to stock the values
let arr = Array.from(buttons); // insert all the buttons in an array

arr.forEach(button => { //Boucle on every button to see if it is clicked
    button.addEventListener('click', (e) => { //ifa button clicked pick which button
        if(e.target.innerHTML == '='){ //read or watch if we clicked on =
            string = eval(string);
            input.value = string;  //putting the results string in the input
            console.log(e.target);
        }

        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1); //Removing one number
            input.value = string;
        }

        else {
            string+=e.target.innerHTML; // Adding the results to the input
            input.value = string; // Inserting the value into the input
        }
        
    })

})


