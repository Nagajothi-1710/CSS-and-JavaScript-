function collectdata()
{
    let amount = document.getElementById("amount").value;
    let np =document.getElementById("np").value;
    result = amount / np
    console.log(result)
    
    let img = document.getElementById("img");
    img.innerText = result
    
    let para = document.getElementById("split")
    para.innerText = "Is your splitted amount 🥳"   
}