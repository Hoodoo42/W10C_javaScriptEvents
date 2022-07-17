// This EventListener Function will reveal the hint when (hint) is moused over
function showHint(details){
    hintHover[`style`][`display`] = `block`;
}

let hint = document.getElementById(`hint`)
let hintHover = document.getElementById(`hintHover`)
hint.addEventListener(`mouseover`, showHint)


// This EventListener Function will reveal the moon image when the spacebar is pressed
function revealMoon(details){
    jokeContainer[`style`][`display`] = `none`;
    moon[`style`][`display`] = `block`;
    }

let jokeContainer = document.getElementById(`jokeContainer`)
let body = document.querySelector(`body`); 
body.addEventListener(`keyup`, revealMoon); 


// This EventListener Function will reveal the astronaught when the moon image is clicked
function revealAstronaut(details){
    astronaut[`style`][`display`] = `block`;
    }

let astronaut = document.getElementById(`astronaut`);
let moon = document.getElementById(`logo`);
moon.addEventListener(`click`, revealAstronaut);

// setTimout will take the function that changes the background color of body, and implement chages after a 15 second delay
setTimeout(backgroundColor, 15000);

function backgroundColor(){
    body[`style`][`backgroundColor`] = `#0D0867`;
}



