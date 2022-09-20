var input = document.getElementById("description")
const currentDate = new Date();
var t = currentDate.toString()


const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

const dateString = (currentMonth + 1) + "-" + currentDayOfMonth + "-" + currentYear;
// "11-2-2022"

//This determines if textbox is empty or not
function inputLength() {
	return input.value.length;
}
//this function get's the user's name and inserts it into the text I want for the h1
function getName(input = prompt(`What is your name?`)) {
    return `${input}'s Log`
}
//function gets the user's input for the name and inserts it into the rest of the header text and then creates a h1 element and sticks it into the header div
//DONE - WORKING
function makeTitle() {
    var h1div = document.getElementById("title");
var h1 = document.createElement("h1");
//creates an h1 with user input as text
h1.appendChild(document.createTextNode(getName()));
// h1 attached to parent div
h1div.appendChild(h1);
}

//this is working great!
//it adds the input from the text box to the bottom of a ul 
function CreateFromTextbox() {
    var logs = document.getElementById("logs");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var button = document.getElementById("button");
//needs to create a row (tr) then add an id with the row + # of row then have it add the td for the description, then another for the date, and another for the time
    //logs.appendChild(tr);
    //created new row in table that gets the description added into it from user input
	logs.appendChild(tr.appendChild(td.appendChild(document.createTextNode(input.value))));
    //cleared description box
	input.value = "";
	// li attached to parent div
	logs.appendChild(tr);
}

//this is working great!
function addAfterClick() {
        if (inputLength() > 0) {
            CreateFromTextbox();
        }
    }

    function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            CreateFromTextbox();
        }
    }



//text box with place holder "description" need submit button that recognizes listenuserinput for click and enter button and then clears the textbox
//will add description and time stamp

//needs to be a way to edit time stamp (for if you forget to add one)

//needs to be a delete button for any added logs



//the actual program

//this makes the h1
makeTitle();
//this listens to if the 'log' button is clicked and adds the info in the description to a line item in the ul. 
//WORKING!!
button.addEventListener("click", addAfterClick);

// this adds a list item if there's something typed and you press 'enter' on keyboard. 
input.addEventListener("keypress", addListAfterKeypress);
// This adds a list item if there's stuff typed and you click 'enter' 