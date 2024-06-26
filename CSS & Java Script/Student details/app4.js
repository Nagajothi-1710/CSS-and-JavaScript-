function collectdata()
{
    let marks = document.getElementById("mark").value;
    let excellent = document.getElementById("excellent");
    let good = document.getElementById("good");
    let fair = document.getElementById("fair");
    let poor = document.getElementById("poor");
    if (marks>=85 && marks<=100)
        excellent.style.backgroundColor = "green"
        else if (marks>=60 && marks<85)
        good.style.backgroundColor = "#E7EE77"
        else if (marks>=40 && marks<60)
        fair.style.backgroundColor = "#37A9EE"
        else if (marks>=0 && marks<40)
        poor.style.backgroundColor = "#AB2849"
}

    

