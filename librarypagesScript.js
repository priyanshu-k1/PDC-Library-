
const arrayofelement=['programmingInC','WEbTechnology','DigitalPrincipal',
                      'MATHEMETICALFOUNDATION','CommunicationSkills','Programmingincpp','datastructure',
                      'advancecomputernetworking','probablityandstacts','computerarchi'];
// console.log(arrayofelement);

function toremove(element){
    for(var i=0;i<(arrayofelement.length);i++){
        if(arrayofelement[i]!=element){
            document.getElementById(arrayofelement[i]).style.display="none";
            console.log(arrayofelement[i]);
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
    else if(selectedOptionValue=="ProgramminginC"){
        header('1-Semester','green')
        toremove('programmingInC');
        document.getElementById('programmingInC').style.display = 'block';
    }
    else if(selectedOptionValue=="WEbTechnology"){
         header('1-Semester','green')
        toremove('WEbTechnology');
        document.getElementById('WEbTechnology').style.display = 'block';

    }
    else if(selectedOptionValue=="DigitalPrincipal"){
         header('1-Semester','green')
        toremove('DigitalPrincipal');
        document.getElementById('DigitalPrincipal').style.display = 'block';

    }
    else if(selectedOptionValue=="MATHEMETICALFOUNDATION"){
         header('1-Semester','green')
        toremove('MATHEMETICALFOUNDATION');
        document.getElementById('MATHEMETICALFOUNDATION').style.display = 'block';

    }
    else if(selectedOptionValue=="CommunicationSkills"){
         header('1-Semester','green')
        toremove('CommunicationSkills');
        document.getElementById('CommunicationSkills').style.display = 'block';
    }
    else if(selectedOptionValue=="computerarchi"){
        header('2-Semester','green')
       toremove('computerarchi');
       document.getElementById('computerarchi').style.display = 'block';
    }
    else if(selectedOptionValue=="probablityandstacts"){
        header('2-Semester','green')
        toremove('probablityandstacts');
        document.getElementById('probablityandstacts').style.display = 'block';
    }
    else if(selectedOptionValue=="advancecomputernetworking"){
        header('2-Semester','green')
        toremove('advancecomputernetworking');
        document.getElementById('advancecomputernetworking').style.display = 'block';
    }
    else if(selectedOptionValue=="datastructure"){
        header('2-Semester','green')
        toremove('datastructure');
        document.getElementById('datastructure').style.display = 'block';
    }
    else if(selectedOptionValue=="Programmingincpp"){
        header('2-Semester','green')
        toremove('Programmingincpp');
        document.getElementById('Programmingincpp').style.display = 'block';
    }
    else{
            header('Currently notes are not avaliable.','red')
        }
}