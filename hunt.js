var prompts = []  // start with empty list

function get_prompts() {
    fetch('prompts.txt')  //grab the file
        .then(function (response) {
            return response.text();  // returns a string of all the text in the response
        })
        .then(function (data) {
            console.log("data " + data);  //for testing
            lines = data.split('\n')// split into strings by line
            console.log("lines " + lines);  //for testing
            for (line in lines) {
                string(line);  //make each line into a string
                prompts.push(line);  // populate array with individual lines from txt file
                console.log("line added to array, hopefully")
            }
            console.log(prompts);  //for testing
        })
}

//TODO: make the prompts fill with 8 from prompts.txt, 1 from genres.txt, 1 from tropes.txt
function fill_prompts() {
    get_prompts();

    // show item in <li> tag
    hunt_prompts = document.querySelectorAll(".hunt-prompt") // get all elements
    hunt_prompts.forEach(element => {
        var length = prompts.length //get current length of array
        var rand = Math.round(Math.random() * length)  // get rand num w/ decimal, then rounds to get rid of the decimal
        console.log(rand); // just for testing
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

