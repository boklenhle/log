//text box with place holder "description" need submit button that recognizes listenuserinput for click and enter button and then clears the textbox
//will add description and time stamp

//needs to be a way to edit time stamp (for if you forget to add one)

//needs to be a delete button for any added logs
MakeH1 => {
//creates a var to prompt user to enter their name
var InputName = prompt(`What's your name?`);
//IDs the div we want to stick the Name in
var h1div = document.getElementById("title");
//names var to create an h1 element
var h1 = document.createElement("h1");
InputName;
//creates an h1 and appends the text the user entered into it.
h1.appendChild(document.createTextNode(InputName.value));
//appends the new h1 to the div we want it to go in
h1div.appendChild(h1);
}

Makeh12 => {
    var h1div = document.getElementById("title");
var InputName = prompt(`What's your name?`);
var h1 = document.createElement("h1");
//runs prompt to get name from user
InputName;
//creates an h1 with user input as text
h1.appendChild(document.createTextNode(InputName.value));
// h1 attached to parent div
h1div.appendChild(h1);
}

Makeh12();
//the actual program

// This adds a list item if there's stuff typed and you click 'enter' 
//button.addEventListener("click", addAfterClick);

// this adds a list item if there's something typed and you press 'enter' on keyboard. 
//input.addEventListener("keypress", addAfterKeypress);
//clears user input
//whatIwanttoclear.value = "";