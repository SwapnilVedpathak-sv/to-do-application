///////////////////////////////////// Create a New List /////////////////////////////////////

function addToDo() {
    var list = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var text = document.createTextNode(inputValue);
    list.appendChild(text);

    if (inputValue == '') {
        alert("You must write something!!!");
    } else {
        document.getElementById("unOrderList").appendChild(list);
    }

    document.getElementById("input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeTag";
    span.appendChild(txt);
    list.appendChild(span);

    for (i = 0; i < closeTag.length; i++) {
        closeTag[i].onclick = function () {
            var displayNone = this.parentElement;
            displayNone.style.display = "none";
        }
    }
}

///////////////////////////////////// Create a Close Tag /////////////////////////////////////

var itemList = document.getElementsByTagName("LI");
for (var i = 0; i < itemList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeTag";
    span.appendChild(txt);
    itemList[i].appendChild(span);
}

///////////////////////////////////// Click Close Item To Hide It /////////////////////////////////////

var closeTag = document.getElementsByClassName("closeTag");
var i;
for (i = 0; i < closeTag.length; i++) {
    closeTag[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addText").click();
    }
});

///////////////////////////////////// Day and Date /////////////////////////////////////

var d = new Date();
var a = d.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('Daytag').innerHTML = days[d.getDay()];

var date = new Date();
var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOMBER", "NOVEMBER", "DECEMBER"];
var a = date.getDate();
var b = date.getFullYear();
document.getElementById('Datetag').innerHTML = a + "  " + months[date.getMonth()] + "  " + b;