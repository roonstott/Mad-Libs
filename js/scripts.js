window.onload = function() {
  let form = document.querySelector("form")
  form.onsubmit = function(event) {
    const animalInput= document.getElementById("animalInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const placeInput = document.getElementById("placeInput").value;

    document.querySelector("span#animal").innerText = animalInput;
    document.querySelector("span#verb").innerText = verbInput;
    document.querySelector("span#place").innerText = placeInput;

    document.querySelector("div#story").removeAttribute("class");
    
    event.preventDefault();
  }

}