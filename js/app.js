// This EventListener Function will reveal the hint when (hint) is moused over
function showHint(details){
      hintHover[`style`][`display`] = `block`;
}

let hint = document.getElementById(`hint`)
let hintHover = document.getElementById(`hintHover`)
hint.addEventListener(`mouseover`, showHint)


// This EventListener Function will reveal the moon image when the spacebar is pressed
function revealMoon(details){
    if(event.code === `Space`){
    jokeContainer[`style`][`display`] = `none`;
    moon[`style`][`display`] = `block`;
    spaceship[`style`][`display`] = `block`;
}
    }

let jokeContainer = document.getElementById(`jokeContainer`)
let body = document.querySelector(`body`); 
body.addEventListener(`keyup`, revealMoon); 


// This EventListener Function will reveal the astronaught when the moon image is clicked
function revealAstronaut(details){
    astronaut[`style`][`display`] = `block`;
    }

let spaceship = document.getElementById(`spaceship`);
let astronaut = document.getElementById(`astronaut`);
let moon = document.getElementById(`logo`);
moon.addEventListener(`click`, revealAstronaut);


// working on final bonus

// function secret(){
//     // let letters =[`s`,`e`,`c`,`r`,`e`,`t`];
//     // for(i=0; i<letters.length; i++)
//     let letters = `secret`
//     if(event.code.includes(letters)){
// console.log(letters)
//         alert(`You have found the secret message!`);
//     }
// }

// document.addEventListener(`keyup`, secret);

// setTimout will take the function that changes the background color of body, and implement chages after a 15 second delay
setTimeout(backgroundColor, 15000);

function backgroundColor(){
    body[`style`][`backgroundImage`] = `url(https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80)`;
    body[`style`][`backgroundPostion`] = `center`;
    body[`style`][`backgroundRepeat`] = `no-repeat`;
    body[`style`][`backgroundSize`] = `cover`;
}


 setInterval(moveAstronaut, 3000);



function moveAstronaut(){
    let x=  Math.floor(Math.random()*1200)+1;
    let y=Math.floor(Math.random()*400)+1;
    spaceship[`style`][`transform`] = `translate(${x}px,${y}px)`;
   
    
}



