import "./style.css";


/*  */ 

// an array of numbers put in variable "numberList"
let numberList = [1, 1, 2, 3, 5, 8, 13]; 


/* 
const text = "k"
const list = ["katt", "hund", "fisk", "hamster"]
const ul = document.createElement("div")
document.body.appendChild(ul)
for(let i = 0; i < list.length; i++){
  const li = document.createElement("p")
li.innerHTML = list[i]
for(let j = 0; j < text.length; j++){
const checkText = list[i].substring(0, text.length)
console.log(checkText);
if(checkText === text){
  
ul.appendChild(li)}
}
} */

//addNumber collects the value out of the number input container.
const addNumber = () => {
	const inputNumber = document.getElementById("numberContainer__input").value;

  // If input is empty nothing happens. Else the string is turned into type number.
	if (inputNumber === "") {
		return;
	} else {
		const createNumber = Number(inputNumber);
    //The converted value is pushed into the array.
		numberList.push(createNumber);
    //The input value is reset to empty the container after a number is added 
		document.getElementById("numberContainer__input").value = "";
    //function sortNumber is called.
		sortNumber();
	}
};

const sortNumber = () => {
  //The values are bubble sorted to sort the values from smallest to biggest number and returns these values
  //in the newNumberList.
	numberList.sort(function (a, b) {
		return a - b;
	});
  //We are creating a UL for the separate li elements that the array puts out.
	const ulContainer = document.getElementById("ulContainer");
	ulContainer.innerHTML = "";
	document.body.appendChild(ulContainer);

	const ul = document.createElement("ul");

	ulContainer.appendChild(ul);
	;
  //Below the newNumberList is looped the same amount of times as there are numbers in the array.
	for (let i = 0; i < numberList.length; i++) {
		const li = document.createElement("li");
		li.innerHTML = numberList[i];
		ul.appendChild(li);
	}
};
//function resetNumber is reseting the list and the UL-container is emptied. 
function resetNumber() {
	numberList = [];
	const ulContainer = document.getElementById("ulContainer");
	ulContainer.innerHTML = "";
}
//This adds the number to the array.
document
	.getElementById("numberContainer___btn")
	.addEventListener("click", addNumber);

document.getElementById("resetButton").addEventListener("click", resetNumber);
