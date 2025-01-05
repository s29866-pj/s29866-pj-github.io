function inputedText(){
    let text = document.getElementById('message').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (text.trim() === "" || name.trim() === "" || email.trim() === "") {
        alert("All fields must be filled out");
        return;
    }

    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write(
        "<h1>" + name + "</h1>"
        + "<p>" + text + "</p>"
        + "<p>" + email + "</p>"
    );
}
