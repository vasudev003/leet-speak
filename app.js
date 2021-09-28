var btntrans = document.querySelector("#translatebtn");
var txtbox = document.querySelector("#txt-box");
var output = document.querySelector("#output");

var server = "https://api.funtranslations.com/translate/leetspeak.json";

function translationurl(text) {
    return server + "?" + "text=" + text
}

function error() {
    alert("server has some issue please try again after sometime");
}

function translate() {
    var usertxt = txtbox.value;
    fetch (translationurl(usertxt))
    .then ( Response => Response.json () )
    .then (json => {
        var translatedtxt =  json.contents.translated;
        output.innerText = translatedtxt;
     } )
     .catch(error)
    output.innerText = json.contents.translated
}

btntrans.addEventListener("click", translate )