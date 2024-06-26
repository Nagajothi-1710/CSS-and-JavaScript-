let fruit = ""
function getstart() {
    let fruits = ["Grape", "Guava", "Mango", "cherry", "Lichee", "Banana", "Pineapple", "Kiwi", "plum"]
    let num1 = Math.floor(Math.random() * 9);
    fruit = fruits[num1]
    console.log(fruit.length)
    let f = ""
    for (let i = 0; i < fruit.length; i++) {
        f = f + "    ____"
    }
    document.getElementById('stars').innerText = f
    document.getElementById('para').innerText = `Guess the ${fruit.length} letter words`
}

function checkanswers() {
    let uf = document.getElementById("fruit").value;
    if (uf === fruit) {
        document.getElementById("result").innerText = "You Win"
    }
    else {
        document.getElementById("result").innerText = "You lose"
    }
}
