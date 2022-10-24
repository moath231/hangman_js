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
  country: ["Egypt",
    "Syria",
    "jordan",
    "Iraq",
    "Japan",
    "India"
  ],
};

const hint = {
  country: [
    "Its capital is Cairo",
    "Its capital is Damascus",
    "Its capital is amman",
    "Its capital is Baghdad",
    "Its capital is Tokyo",
    "Its capital is Delhi",
  ],
};

//
//world
let allkey = Object.keys(world);

let randnumworld = Math.floor(Math.random() * allkey.length);
let randcatgury = allkey[randnumworld];
let randcatguryvalue = world[randcatgury];

let randcatrow = Math.floor(Math.random() * randcatguryvalue.length);
let randvalueresult = randcatguryvalue[randcatrow];
/*

*/


let hintstatment = hint[randcatgury][randcatrow];
document.querySelector(".hinttext").innerHTML += hintstatment;
document.querySelector(".hinttext").style.color = "#1f78d4";
document.querySelector(".hinttext span").style.color = "black";



document.querySelector(
  ".game-info .category span"
).innerHTML = `${randcatgury}`;

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
    } else {
      // success
      document.getElementById("success").play();
    }

    if (letters_guessvalue.length === numcorrect) {
      letterscontainer.classList.add("finshed");
      successendgame();
    }
  }
});

function failendgame() {


  //
  let span = document.createElement("span");
  let spantext = document.createTextNode("Game Over");
  span.appendChild(spantext);
  span.style.fontSize = "30px";
  span.style.marginRight = "10px";
  //
  //
  let span2 = document.createElement("span");
  let spantext2 = document.createTextNode(`${randvalueresult}`);
  span2.appendChild(spantext2);
  span2.style.color = "#1f78d4";
  span2.style.marginLeft = "10px";
  //

  let falldivtext = ` ,the word is `;

  let lastmassage = document.createElement("div");
  lastmassage.className = "lastmassage";
  lastmassage.appendChild(span);
  lastmassage.appendChild(document.createTextNode(falldivtext));
  lastmassage.appendChild(span2);
  lastmassage.style.fontSize = "25px";

  var x = window.matchMedia("(max-width: 461px)")
  if (x.matches) { // If media query matches
    lastmassage.style.fontSize = "20px";
    span.style.fontSize = "25px";
  } else if("(max-width: 635px)"){
    lastmassage.style.fontSize = "24px";
    span.style.fontSize = "29px";
  }

  //again <i class="fa-solid fa-rotate-left"></i>
  let againD = document.createElement("div");
  againD.className = "again";
  let i1 = document.createElement("i");
  i1.className = "fa-solid";
  i1.classList.add("fa-rotate-left");
  i1.addEventListener("click", () => location.reload());
  againD.appendChild(i1);

  lastmassage.appendChild(againD);

  //

  document.querySelector(".container").appendChild(lastmassage);
}

function successendgame() {


  //
  let span = document.createElement("span");
  let spantext = document.createTextNode("Congratulations");
  span.appendChild(spantext);
  span.style.fontSize = "23px";
  span.style.marginRight = "3px";
  span.style.color = "green";
  //
  //
  let span2 = document.createElement("span");
  let spantext2 = document.createTextNode(`${numofwrrong}`);
  span2.appendChild(spantext2);
  span2.style.color = "#1f78d4";
  span2.style.marginLeft = "5px";
  //
  let successivtext = ` , you win! number of wrong `;

  let lastmassage = document.createElement("div");
  lastmassage.className = "lastmassage";
  lastmassage.appendChild(span);
  lastmassage.appendChild(document.createTextNode(successivtext));
  lastmassage.appendChild(span2);
  lastmassage.style.fontSize = "20px";


  // var x = window.matchMedia("(max-width: 897px)")
  if (window.matchMedia("(max-width: 640px)"))  {
    lastmassage.style.width = "100%";
    lastmassage.style.fontSize = "17px";
    span.style.fontSize = "20px";
  }


  //again <i class="fa-solid fa-rotate-left"></i>
  let againD = document.createElement("div");
  againD.className = "again";
  let i1 = document.createElement("i");
  i1.className = "fa-solid";
  i1.classList.add("fa-rotate-left");
  i1.addEventListener("click", () => location.reload());
  againD.appendChild(i1);
  lastmassage.appendChild(againD);
  //

  document.querySelector(".container").appendChild(lastmassage);
}
