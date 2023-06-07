// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');
const articleTitle = document.querySelector("#articleTitle");
const h3 = document.querySelector(".art-title");

articleTitle.style.fontSize = "50px";
articleTitle.style.color = "white";
h3.style.fontSize = "50px";

// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = '50px';
headerDiv.style.color = 'white';
