function get_prompts(list) {

}

// make list from txt file
var prompts = ["cat", "dog", "mouse", "fish", "rat", "snail", "lizard"]
// populate prompts with lines from txt file
fetch('something.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });


var length = prompts.length //get length of array for later random num

// show item in <li> tag
hunt_prompts = document.querySelectorAll(".hunt-prompt") // get all elements
hunt_prompts.forEach(element => {
    var rand = Math.round(Math.random() * length)  // gets rand num w/ decimal, then rounds to get rid of the decimal
    element.innerHTML = prompts[rand]; // changes the given el to whatever is after the =
    //element.style.background = "orange"; // just for testing
    console.log("<li> updated") // just for testing
});