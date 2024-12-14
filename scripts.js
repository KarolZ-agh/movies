
function addMovie() {
    console.log("add clicked!")
    // get input
    var movieTitle = document.getElementById("title-inpt").value;
    var movieYear = document.getElementById("year-inpt").value;
    var movieActors = document.getElementById("actors-inpt").value;

    // validate
    if (!isValid(movieTitle) || !isValid(movieYear) || !isValid(movieActors)) {
        alert("missing value");
        return;
    }

    // add movie
    var listElement = document.getElementById("movie-list");
    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    listElement.appendChild(li)

    // clear input
    document.getElementById("title-inpt").value = '';
    document.getElementById("year-inpt").value = "";
    document.getElementById("actors-inpt").value = '';
}




function deleteSelected() {
    console.log("delete selected clicked!")
    var listElement = document.getElementById("movie-list");

    var checkedBoxes = listElement.querySelectorAll("input[type='checkbox']:checked");
    checkedBoxes.forEach(checkbox => listElement.removeChild(checkbox.parentNode));
}


function isValid(value) {
    return !(value == '' || value == undefined)
}