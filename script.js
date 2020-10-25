function proceedPrompt() {
    let txt;
    let person = prompt("Please enter your name");
    if 
        (person == null) || person == "") {
        txt = "I've seen more spine in jellyfish.";
    }
    else {
        txt = "Hello" + person + "." + ""
    }
}