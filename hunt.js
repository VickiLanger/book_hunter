function get_prompts(list) {



    // make list from txt file
    var prompts = ["book with a disabled main character",
        "A how-to book",
        "A book with a number in the title",
        "A book that has been translated from another language",
        "A book with a title that is only one word",
        "A book that made you mad",
        "A book released last year",
        "a book set in a continent other than where you live",
        "religious or spiritual text (eg, Torah, Qur'an, Sutra, Vedas, etc)",
        "A book that made you laugh",
        "book that talks about major systemic issues (eg classism, racism, ableism, xenophobia etc)",
        "A book with sprayed edges (colored)",
        "book with a character who deals with chronic illness or diease",
        "A book you would rate 6 out of 5 stars",
        "a book with a LGBTQIA+ main character where the story isn't about their queerness",
    ]
    // populate prompts with lines from txt file

    //fetch('prompts.txt')
    //    .then(response => response.text())
    //    .then(data => {
    //        prompts.append();
    //        console.log(prompts);
    //        console.log(data);
    //    });


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