var button = document.querySelector("button");
var input = document.getElementById("input");
var ol = document.querySelector("ol");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
    li.classList.add("list_style");
	
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("X"))
	li.appendChild(deleteButton);
    deleteButton.classList.add("deleteButton");


	deleteButton.addEventListener("click", function() {
	ol.removeChild(li);
});
}

function addListItemAfterClick() {
	if ( inputLength() > 0) {
		createListElement();
	}
}

function addListItemAfterEnter(event) {
	if ( inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListItemAfterClick);

input.addEventListener("keypress", addListItemAfterEnter);

