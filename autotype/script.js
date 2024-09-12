const body = document.querySelector(".container");

const career = ["freelancer", "web designer", "learner", "Instructor"];
let careerIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
    characterIndex++;

    body.innerHTML = `<h1>I am ${career[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${career[careerIndex].slice(0, characterIndex)} </h1>`;
    
    if (characterIndex === career[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    
    if (careerIndex === career.length) {
        careerIndex = 0;
    }
    
    setTimeout(updateText, 200);
}
