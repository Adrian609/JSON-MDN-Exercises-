var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
// The HTTP method to use when making the network request
request.open('GET', requestURL);
// Setting the responseType to JSON, so that XHR knows that the server will be returning JSON
request.responseType = 'json';
// Then we send the request with the send() method
request.send();
// waiting for the response to return from the server, then dealing with it
request.onload = function () {
    var superHeroes = request.response; // get the string from the response
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
// At this point we retrieved the JSON data and converted it into a JavaScript object

/* 
* Function: populateHeader(jsonObj)
* Creates an <h1> element with createElement(), sets its textContent to equal 
* the squadName property of the object, then appends it to the header using appendChild().
*/
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}
/*
* Funtion: showHero(jsonObj) 
* Create several new elements: an <article>, an <h2>, three <p>s, and a <ul>.
*/
function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        //Set the <h2> to contain the current hero's name.
        myH2.textContent = heroes[i].name;
        /* 
        * Fill the three paragraphs with their secretIdentity, age, and a line saying 
        * "Superpowers:" to introduce the information in the list
        */
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        /* 
        * Store the powers property in another new variable called 
        * superPowers — this contains an array that lists the current hero's superpowers.
        */
        var superPowers = heroes[i].powers;
        /* 
        * Use another for loop to loop through the current hero's 
        * superpowers — for each one we create a <li> element, put the superpower inside it, then put the 
        * listItem inside the < ul > element(myList) using appendChild().
        */

        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        /* 
        * Append the <h2>, <p>s, and <ul> inside the <article> (myArticle), then append the <article> 
        * inside the <section>. The order in which things are appended is important, as this is the order 
        * they will be displayed inside the HTML.
        */
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);

        function addClass(){
            var element, name, arr;

            element = document.getElement("article");
            name = "card";
            arr = element.className.split(" ");

            if (arr.indexOf(name)==-1){
                element.className += " " + name;
            }
        }
    }
}