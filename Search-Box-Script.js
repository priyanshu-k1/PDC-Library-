const arrayofelement = [
    'programmingInC', 'WEbTechnology', 'DigitalPrincipal',
    'MATHEMETICALFOUNDATION', 'CommunicationSkills', 'Programmingincpp',
    'datastructure', 'advancecomputernetworking', 'probablityandstacts',
    'computerarchi'
];

function toremove(element) {
    for (var i = 0; i < arrayofelement.length; i++) {
        if (arrayofelement[i] !== element) {
            document.getElementById(arrayofelement[i]).style.display = "none";
        }
    }
}

function setHeaderAndDisplayElement(semester, color, elementId) {
    header(semester, color);
    toremove(elementId);
    document.getElementById(elementId).style.display = "block";
}

function GetNotes() {
    var selectedOptionValue = document.getElementById('subjectselector').value;

    if (selectedOptionValue === "option1") {
        header("Select the Subject", 'red');
    } else {
        switch (selectedOptionValue) {
            case "ProgramminginC":
                setHeaderAndDisplayElement('1-Semester', 'green', 'programmingInC');
                break;
            case "WEbTechnology":
                setHeaderAndDisplayElement('1-Semester', 'green', 'WEbTechnology');
                break;
            case "DigitalPrincipal":
                setHeaderAndDisplayElement('1-Semester', 'green', 'DigitalPrincipal');
                break;
            // ... (repeat for other cases)
            default:
                header('Currently notes are not available.', 'red');
        }
    }
}
