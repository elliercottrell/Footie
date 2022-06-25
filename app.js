let englandScore = 0;
let hungaryScore = 0;

function getScore() {
  let score = prompt("who scored?");
  if (score === "England" || score === "england") {
    englandScore++;
    let england = document.querySelector("#england");
    england.innerHTML = englandScore;
    return englandScore;
  } else if (score === "Hungary" || score === "hungary") {
    hungaryScore++;
    let hungary = document.querySelector("#hungary");
    hungary.innerHTML = hungaryScore;
    return hungaryScore;
  } else {
    alert("NO GOAL");
  }
}

let changeScore = document.querySelector("button");
changeScore.addEventListener("click", getScore);
