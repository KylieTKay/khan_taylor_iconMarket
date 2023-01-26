console.log('JavaScript is running!');

// step 1 - select element to enteract with 
// const acorn = document.querySelector('#acorn');
// const squirrelFront = document.querySelector('#squirrelFront');
// const squirrelSide = document.querySelector('#squirrelSide');
// const pinecone = document.querySelector('#pinecone');
// const leaf = document.querySelector('#leaf');
// const blueBirdFront = document.querySelector('#blueBirdFront');
// const blueBirdSide = document.querySelector('#blueBirdSide');
// const redBirdFront = document.querySelector('#redBirdFront');
// const redBirdSide = document.querySelector('#redBirdSide');
const smRedBirdFront = document.querySelector('#smRedBirdFront');
const smRedBirdSide = document.querySelector('#smRedBirdSide');
const lilypad = document.querySelector('#lilypad');
const lilypadSide = document.querySelector('#lilypadSide');
const frogFront = document.querySelector('#frogFront');
const frogSide = document.querySelector('#frogSide');
const toadFront = document.querySelector('#toadFront');
const toadSide = document.querySelector('#toadSide');

// step 3- what happens when events are triggered
function logThisId() {
    console.log(this.id);
}

// step 2 - how do users interact with element
// acorn.addEventListener('click', logThisId);
// squirrelFront.addEventListener('click', logThisId);
// squirrelSide.addEventListener('click', logThisId);
// pinecone.addEventListener('click', logThisId);
// leaf.addEventListener('click', logThisId);
// blueBirdFront.addEventListener('click', logThisId);
// blueBirdSide.addEventListener('click', logThisId);
// redBirdFront.addEventListener('click', logThisId);
// redBirdSide.addEventListener('click', logThisId);
smRedBirdFront.addEventListener('click', logThisId);
smRedBirdSide.addEventListener('click', logThisId);
lilypad.addEventListener('click', logThisId);
lilypadSide.addEventListener('click', logThisId);
frogFront.addEventListener('click', logThisId);
frogSide.addEventListener('click', logThisId);
toadFront.addEventListener('click', logThisId);
toadSide.addEventListener('click', logThisId);