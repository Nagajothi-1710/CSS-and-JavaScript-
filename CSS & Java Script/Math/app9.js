let num1 =0
let num2=0
let score=0
let i = 0
function calculate()
{
 num1 = Math.floor(Math.random()*100)   
 num2= Math.floor(Math.random()*100)

 let first = document.getElementById("first");
 let second= document.getElementById("second");
 first.innerText =num1
 second.innerText =num2

}
function checkanswer(){
    let check = document.getElementById('check')
    check.style.visibility = 'hidden'
    let next = document.getElementById('next')
    next.style.visibility = 'visible'
    let uans = document.getElementById("answer").value;
    let cans = num1+num2;
    let results = document.getElementById("result");
    let points= document.getElementById("score");
    if (uans==cans){
        score+=10;
        points.innerText = `Score ${score}`;
        results.innerText = "Your answer is corect 🥳";
        let fire =document.getElementById("fire");
        fire.src='co.gif'
        fire.display=block;
    }else {
        results.innerText =`you are wrong answer, The correct answes is ${cans}`;
        score-=10;
        points.innerText = `Score ${score}`;
    }  
}  
function nextcheck()
{
    let next = document.getElementById('next')
    next.style.visibility = 'hidden'
    let check = document.getElementById('check')
    check.style.visibility = 'visible'
    i++;
    if (i<=6){
        calculate()
        let uans = document.getElementById("answer");
        uans.value=""
        let results = document.getElementById("result");
        results.innerText = " ";
        fire.src=''
    
        if (i==6){
            console.log("hi")
            document.getElementById('next').value="Finished";
            let first = document.getElementById("first");
            let second= document.getElementById("second");
            first.innerText = " "
            second.innerText = " "
            let check = document.getElementById('check')
            check.style.visibility = 'hidden'
            results.innerText=`Youer Score is ${score}`
        }
    }
    
        
        
       
}

s
