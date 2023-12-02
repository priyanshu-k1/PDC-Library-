var sub1='programmingInC';
var sub2='WEbTechnology';
var sub3= 'DigitalPrincipal';
var sub4='MATHEMETICALFOUNDATION';
var sub5='CommunicationSkills';
 


const arrayofelement=[sub1,sub2,sub3,sub4,sub5];
console.log(arrayofelement);

function toremove(element){
    for(var i=0;i<(arrayofelement.length-1);i++){
        if(arrayofelement[i]!=element){
            document.getElementById(arrayofelement[i]).style.display="none";
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
    // else if(selectedOptionValue==""){}
}