function get_prompts() {
    var prompts = []  // start with empty list

    fetch('prompts.txt')  //grab the file
        .then(function (response) {
            return response.text();  // returns a string of all the text in the response
        })
        .then(function (data) {
            console.log(data);
            data.split('\n')// split into strings by line
            prompts.append(data);  // populate array with lines from txt file
        })
}


function fill_prompts() {
    get_prompts();

    var length = prompts.length //get length of array for later random num

    // show item in <li> tag
    hunt_prompts = document.querySelectorAll(".hunt-prompt") // get all elements
    hunt_prompts.forEach(element => {
        var rand = Math.round(Math.random() * length)  // gets rand num w/ decimal, then rounds to get rid of the decimal
        element.innerHTML = prompts[rand]; // changes the given el to whatever is after the =
        //TODO:make sure not to use a prompt again in the list of 10
        //element.style.background = "orange"; // just for testing
        console.log("<li> updated") // just for testing
    });

}

function read_next() {
    get_prompts();
    pass
}