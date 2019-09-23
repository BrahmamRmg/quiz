


window.onload = document.getElementById('check').addEventListener('click', 
function(){
    document.getElementsByClassName('popup')[0].style.display = 'flex';
});

document.getElementById('close').addEventListener('click',
function(){
    document.getElementsByClassName('popup')[0].style.display = 'none';
});


document.getElementById('check').addEventListener('click',
function(){
    var correct=0;   

if (document.quiz.q2.value == "Telugu") {
    correct++;
}
if (document.quiz.q3.value == "Rajasthan") {
    correct++;
}
if (document.quiz.q4.value == "Rajasthan") {
    correct++;
}
if (document.quiz.q5.value == "Rajasthan") {
    correct++;
}
if (document.quiz.q6.value == "Rajasthan") {
    correct++;
}

document.getElementById("million").innerHTML= "You got " + correct +  " correct";

if (correct=='5') {
    document.getElementById('happy').style.display = 'block';
    document.getElementById('average').style.display = 'none';
    document.getElementById('sad').style.display = 'none';
}
else if ((correct == '3') || (correct == '4')) {
    document.getElementById('average').style.display = 'block';
    document.getElementById('happy').style.display = 'none';
    document.getElementById('sad').style.display = 'none';
}
else if(correct < '3') {
    document.getElementById('sad').style.display = 'block';
    document.getElementById('happy').style.display = 'none';
    document.getElementById('average').style.display = 'none';
}
     
});




