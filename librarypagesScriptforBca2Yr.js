const arrayofelement=['AppliedMathematics','JavaProgramming','EnvironmentalScience','OperatingSystemConcepts','DatabaseDesign','SoftwareEngineering'
,'DataScienceusingPython','ArtificialIntelligence','CloudComputing','NetworkSecurity'];
// console.log(arrayofelement);
function toremove(element) {
    for (var i = 0; i < arrayofelement.length; i++) {
        if (arrayofelement[i] !== element) {
            document.getElementById(arrayofelement[i]).style.display = "none";
        }
    }
}

function header(text,color){
    document.getElementById('counter').style.display = 'block';
    document.getElementById('counter').style.color =color;
    document.getElementById('counter').innerHTML=text;
}

function GetNotes(){
    var selectedOptionValue = document.getElementById('subjectselector').value;
    console.log(selectedOptionValue);
    if(selectedOptionValue=="option1"){
        header("Select the Subject",'red');
        toremove('nothing');
    }
    else if(selectedOptionValue=="AppliedMathematics"){
        header('3-Semester','green')
        toremove('AppliedMathematics');
        document.getElementById('AppliedMathematics').style.display = 'block';
    }
    else if(selectedOptionValue=="JavaProgramming"){
        header('3-Semester','green')
        toremove('JavaProgramming');
        document.getElementById('JavaProgramming').style.display = 'block';
    }
    else if(selectedOptionValue=="EnvironmentalScience"){
        header('3-Semester','green')
        toremove('EnvironmentalScience');
        document.getElementById('EnvironmentalScience').style.display = 'block';
    }
    else if(selectedOptionValue=="OperatingSystemConcepts"){
        header('3-Semester','green')
        toremove('OperatingSystemConcepts');
        document.getElementById('OperatingSystemConcepts').style.display = 'block';
    }
    else if(selectedOptionValue=="DatabaseDesign"){
        header('3-Semester','green')
        toremove('DatabaseDesign');
        document.getElementById('DatabaseDesign').style.display = 'block';
    }

    else if(selectedOptionValue=="CloudComputing"){
        header('4-Semester','green')
        toremove('CloudComputing');
        document.getElementById('CloudComputing').style.display = 'block';
    }
    else if(selectedOptionValue=="SoftwareEngineering"){
        header('4-Semester','green')
        toremove('SoftwareEngineering');
        document.getElementById('SoftwareEngineering').style.display = 'block';
    }
    else if(selectedOptionValue=="DataScienceusingPython"){
        header('4-Semester','green')
        toremove('DataScienceusingPython');
        document.getElementById('DataScienceusingPython').style.display = 'block';
    }
    else if(selectedOptionValue=="ArtificialIntelligence"){
        header('4-Semester','green')
        toremove('ArtificialIntelligence');
        document.getElementById('ArtificialIntelligence').style.display = 'block';
    }
    else if(selectedOptionValue=="NetworkSecurity"){
        header('4-Semester','green')
        toremove('NetworkSecurity');
        document.getElementById('NetworkSecurity').style.display = 'block';
    }
    else{
            header('Currently notes are not avaliable.','red')
        }
}