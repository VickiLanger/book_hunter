var prompts = []  // start with empty list

function get_prompts() {
    fetch('prompts.txt')  //grab the file
        .then(function (response) {
            return response.text();  // returns a string of all the text in the response
        })
        .then(function (data) {
            console.log(data);  //for testing
            lines = data.split('\n')// split into strings by line
            prompts.push(lines);  // populate array with lines from txt file
            console.log(prompts);  //for testing
        })
}


function fill_prompts() {
    get_prompts();

    // show item in <li> tag
    hunt_prompts = document.querySelectorAll(".hunt-prompt") // get all elements
    hunt_prompts.forEach(element => {
        var length = prompts.length //get length of array for random index
        var rand = Math.round(Math.random() * length)  // get rand num w/ decimal, then rounds to get rid of the decimal
        element.innerHTML = prompts[rand]; // change el to random index in array
        //prompts.splice(rand); //remove index after use //TODO:make sure not to use a prompt more than once in the list of 10
        //element.style.background = "orange"; // just for testing
        console.log("<li> updated") // just for testing
    });

}

function read_next() {
    get_prompts();
    pass
}

