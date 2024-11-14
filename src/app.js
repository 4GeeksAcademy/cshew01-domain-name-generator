/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //assign variables
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".io", ".org", ".net", ".us"];
  let domainArray = [];
  // create loops to generate strings
  for (const wordProNoun of pronoun) {
    for (const wordAdj of adj) {
      for (const wordNoun of noun) {
        for (const wordExt of ext) {
          let completeString = `${wordProNoun}${wordAdj}${wordNoun}${wordExt}`;
          domainArray.push(completeString);
          console.log(completeString);
        }
      }
    }
  }
  //document.querySelector("#domainName").innerHTML = domainArray;
  const map1 = domainArray.map(x => `<li class="list-group-item">${x}</li>`);
  document.querySelector("#domainList").innerHTML = map1.join("");
};
