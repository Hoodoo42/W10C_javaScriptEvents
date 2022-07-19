// This EventListener Function will reveal the hint when (hint) is moused over
function showHint(details) {
  hintHover[`style`][`display`] = `block`;
}

let hint = document.getElementById(`hint`);
let hintHover = document.getElementById(`hintHover`);
hint.addEventListener(`mouseover`, showHint);
// ^^ setting variables to access the elements by their id, and using them in the addEventListener function

// This EventListener Function will reveal the moon image when the spacebar is pressed. It will also hide the joke and hint
function revealMoon(details) {
  if (event.code === `Space`) {
    jokeContainer[`style`][`display`] = `none`;
    moon[`style`][`display`] = `block`;
    spaceship[`style`][`display`] = `block`;
  }
}

let jokeContainer = document.getElementById(`jokeContainer`);
let body = document.querySelector(`body`);
body.addEventListener(`keyup`, revealMoon);
// ^^ setting variables to access the elements by their id, and using them in the addEventListener function

// This EventListener Function will reveal the astronaught when the moon image is clicked
function revealAstronaut(details) {
  astronaut[`style`][`display`] = `block`;
}

let spaceship = document.getElementById(`spaceship`);
let astronaut = document.getElementById(`astronaut`);
let moon = document.getElementById(`logo`);
moon.addEventListener(`click`, revealAstronaut);
// ^^ setting variables to access the elements by their id, and using them in the addEventListener function

// working on final bonus - Didnt quite make it, however I feel I must be close so I will leave it to come back to.
// I need to set the value of the specific keys to listen for. I need to detect when these keys are typed,
// store only the specific keys and when all keys are collected, send message

// function secret(){

//     let keys = [`s`,`e`,`c`,`r`,`e`,`t`];
//     // let keys = [`secret`];
//     let holder = [];

//     for(i=0; i<keys.length; i++ ){
//         if(event.key === keys[i]){
//             holder.push(event.key)

//            }else{
//             console.log(event.key);
//            }
//         // if(holder.includes(keys[i]))
//         // if(holder === (keys[i]))

//         if(keys[i].every(holder[i].includes(keys))) {
//             alert(`You have found the secret message!`);
//         }
//     }

//     document.addEventListener(`keyup`, secret)
//     }

// setTimout will take the function that changes the background color of body, and implement chages after a 15 second delay
setTimeout(backgroundColor, 15000);

function backgroundColor() {
  body[`style`][
    `backgroundImage`
  ] = `url(https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80)`;
  body[`style`][`backgroundPostion`] = `center`;
  body[`style`][`backgroundRepeat`] = `no-repeat`;
  body[`style`][`backgroundSize`] = `cover`;
}

// setInterval will call the movespaceShip function and run its code every 3 seconds.
setInterval(movespaceShip, 3000);

// this function generates random numbers, and puts those numbers into the xy fields of the transform:translate() function. I have set the y
// to generate negative numbers to keep it floating around the top of the page.
function movespaceShip() {
  let x = Math.floor(Math.random() * 1200) + 1;
  let y = Math.floor(Math.random() * 200) - 500;
  spaceship[`style`][`transform`] = `translate(${x}px,${y}px)`;
}
