function addNames() {
    let names = document.getElementById("names").value;

    if (names == "") {
        alert("Please enter names");
        return;
    }

    let nameList = document.getElementById("nameList");
    for (let name of names.split(",")) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(name));
        nameList.appendChild(li);
    }
    document.getElementById("choose").removeAttribute("disabled");
}

function resetNames() {
    document.getElementById("nameList").innerHTML = "";
    document.getElementById("choose").setAttribute("disabled", "disabled");
    document.getElementById("chosenName").innerHTML = "Chosen Name:";
}

function chooseName() {
    let nameList = document.getElementById("nameList");
    let names = nameList.getElementsByTagName("li");
    let random = Math.floor(Math.random() * names.length);
    document.getElementById("chosenName").innerHTML = "Chosen Name:<br>" + names[random].innerHTML;
}