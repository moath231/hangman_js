const letters = "abcdefghijklmnopqrstuvwxyz";

lettersarray = Array.from(letters);

let letterscontainer = document.querySelector(".letters");

lettersarray.forEach((textnote) => {
  let span = document.createElement("span");
  let abc = document.createTextNode(textnote);
  span.appendChild(abc);
  span.className = "boxletter";

  letterscontainer.appendChild(span);
});

const world = {
  car: ["BMW", "Audi", "Jeep", "Kia", "Smart", "Tesla", "Volvo"],
  country: ["Afghanistan", "Syria", "jordan", "Iraq", "Japan", "India"],
  pepole: ["moath", "ahmad", "hadi", "mahammad", "maen", "majd"],
};

const hint = {
  car: ["BMW", "Audi", "Jeep", "Kia", "Smart", "Tesla", "Volvo"],
  country: ["Its capital is Kabul", "Its capital is Damascus", "Its capital is amman", "Its capital is Baghdad", "Its capital is Tokyo", "Its capital is Delhi"],
  pepole: ["moath", "ahmad", "hadi", "mahammad", "maen", "majd"],
};

//
//world
let allkey = Object.keys(world);

let randnumworld = Math.floor(Math.random() * allkey.length);
let randcatgury = allkey[randnumworld];
let randcatguryvalue = world[randcatgury];

let randcatrow = Math.floor(Math.random() * randcatguryvalue.length);
let randvalueresult = randcatguryvalue[randcatrow];
//world
//
console.log(randvalueresult);

//
//hint
let hintstatment = hint[randcatgury][randcatrow]
//hint
//
console.log(hintstatment);
document.querySelector(".hinttext").innerHTML += hintstatment;

document.querySelector(".game-info .category span").innerHTML = `${randcatgury}`;

let letters_guessvalue = [...randvalueresult];
let letters_guess = document.querySelector(".container .letters-guess");

letters_guessvalue.forEach((guess) => {
  let span = document.createElement("span");
  span.className = "box";

  if (guess === " ") {
    span.className = "with-space";
  }

  letters_guess.appendChild(span);
});

let lettersguess_span = document.querySelectorAll(".letters-guess span");
let theman = document.querySelector(".hangman-draw .the-man");

let numofwrrong = 0;
let numcorrect = 0;
document.addEventListener("click", (e) => {
  let status = false;

  if (e.target.className === "boxletter") {
    e.target.classList.add("clicked");

    let targetletter = e.target.innerHTML.toLowerCase();
    let theword = [...randvalueresult.toLowerCase()];

    theword.forEach((a, wordindex) => {
      if (targetletter === a) {
        lettersguess_span.forEach((letterspan, spanindex) => {
          if (wordindex == spanindex) {
            letterspan.innerHTML = a;
            status = true;
            numcorrect++;
          }
        });
      }
    });

    if (!status) {
      numofwrrong++;
      theman.classList.add(`wrong${numofwrrong}`);
      document.getElementById("fail").play();

      if (numofwrrong === 6) {
        letterscontainer.classList.add("finshed");
        failendgame();
      }

    }else{
      // success
      document.getElementById("success").play();
    }

    if(letters_guessvalue.length === numcorrect){
      letterscontainer.classList.add("finshed");
      successendgame();
    }


}});

function failendgame(){
  console.log("fall");
}

function successendgame(){
  console.log("success");
}