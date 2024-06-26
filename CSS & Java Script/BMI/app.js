function collectdata()
{
    let ht=document.getElementById("height")
    console.log(ht.value)
    let wt=document.getElementById("weight")
    console.log(wt.value)
    let meter = ht.value * 0.3048
    let height = meter * meter
    let bmi = wt.value / height 
    
    console.log(bmi)
    let uw = document.getElementById("uwpara")
    let nw = document.getElementById("nwpara")
    let ow = document.getElementById("owpara")
    let obw = document.getElementById("obwpara")
    let sow = document.getElementById("sowpara")
    if (bmi<18.5)
        uw.style.backgroundColor = "#01A7AA"
    else if (bmi>18.5 && bmi<24.9)
        nw.style.backgroundColor = "#1B9B00"
    else if(bmi>25 && bmi<29.9)
        ow.style.backgroundColor = "#EDB101"
    else if(bmi>30 && bmi<35)
        obw.style.backgroundColor = "#FF6800"
    else if(bmi>35)
        sow.style.backgroundColor = "#E4291F"
    let b = document.getElementById("bmipara")
    b.innerText= "BMI : "+bmi.toFixed(2)
}
