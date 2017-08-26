//'LearnWebCode' JSON & AJAX example youtube tutorial
//https://www.youtube.com/watch?v=rJesac0_Ftw&t=126s

var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");

var buttonJax = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json")
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    ourRequest.send();
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
    pageCounter++;
});


function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii === 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        
        htmlString += ", and dislikes ";
        
        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii === 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }        

        htmlString += ".</p>";
    };
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
};

//RANDOMQUOTEMACHINE

//Translation section

//Request translation of input data from API on button click
btn2.addEventListener("click", function() {
    //Define variables for receiving input and for outputting translation
    var inputBox = document.getElementById("input");
    var input = inputBox.value;
    console.log(input);
    var outputBox = document.getElementById("output");
    var translationBtn = document.getElementById("btn2");
    
    //Send input word(s) to API
    var transRequest = new XMLHttpRequest();
    transRequest.open('GET', "https://eda-te-reo.herokuapp.com/api/translate?word=seafood")
    transRequest.onload = function() {
        var transData = JSON.parse(transRequest.responseText);
        console.log(transData);
        renderTrans(transData);
    }
    transRequest.send();
});

function renderTrans(data2) {
    var transString = "";
    for (i = 0; i < data2.length; i++) {
        htmlString += "<p>" + data2[i].name + " translates to: " + data2[i].species + ".</p>";
        
    };
    outputBox.insertAdjacentHTML('beforeend', transString);
};

//Request proverb and translation section 

btn3.addEventListener("click", function() {
    //Send input word(s) to API
    var provRequest = new XMLHttpRequest();
    provRequest.open('GET', "https://eda-te-reo.herokuapp.com/api/proverbs")
    provRequest.onload = function() {
        var provData = JSON.parse(provRequest.responseText);
        console.log(provData);
        renderProv(provData);
    }
    provRequest.send();
});

function renderProv(data3) {
    var provString = "<p>" + data3.source + ".</p>";
    proverbmaori.insertAdjacentHTML('beforeend', provString);
    var engString = "<p>" + data3.translation + ".</p>";
    proverbenglish.insertAdjacentHTML('beforeend', engString);
    console.log(data3);
    return data3;
};

// Add button to tweet displayed quote
btn4.addEventListener("click", function() {
    var url = "https://twitter.com/intent/tweet";
    var maoritext = document.getElementById('proverbmaori').children[0].innerHTML;
    var englishtext = document.getElementById('proverbenglish').children[0].innerHTML;
    console.log(maoritext, englishtext);
    var hashtags = "hi,hello,test";
    var via = "userName";
    window.open(url+"?text="+maoritext+englishtext+";hashtags="+hashtags+";via="+via,"","width=500,height=300")
});