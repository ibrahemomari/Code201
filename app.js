let Qus1 ,Qus2,Qus3,Qus4;

Qus1=prompt("are you ready to take a quiz? (Yes or No ?) ");
console.log(Qus1);

while(Qus1 !=='Yes')
{
    Qus1=prompt("you need to take a quiz sweety , type yes (^_^) ");
}

Qus2=prompt("Ok , First of all , What your name ?");
console.log(Qus2);

Qus3=prompt("Welcom "+Qus2+" , how old are you?");
console.log(Qus3);

Qus4=prompt("ok now what is your favorite color ?")
console.log(Qus4);

alert('my name is '+Qus2+' ,i`m '+Qus3+' years old , and my favorite color is '+Qus4);