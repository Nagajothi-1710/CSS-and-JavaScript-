function collectdata(value)
{
    document.getElementById("display").value += value;
}
function cleardata()
{
    document.getElementById("display").value =" ";
}
function calculate()
{
    let exp = document.getElementById("display").value;
    let result = eval(exp);
    document.getElementById("display").value =result
}
function backspace()
{
    alert("clicked")
    let bs = document.getElementById("display");
    bs.innerText = bs.innerText.slice(0, 1);
}