const cart=[];

function addtocart(id){
   
    if (id=="product1")
    {
        cart.push({productname:"Water Fountain",productprice:"400"});
    }
    else if (id=="product2"){
        cart.push({productname:"Peacock Jewellery",productprice:"200"});
    }
    else if (id=="product3"){
        cart.push({productname:"Girl Giltter Shoe",productprice:"500"});
    }
    console.log(cart)
}
function displaycart(){
    
    console.log(cart)
    localStorage.setItem('cart',JSON.stringify(cart));
    window.location.href = "cart.html";
}
document.addEventListener("DOMContentLoaded", () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        const tablebody = document.getElementById("cart1").getElementsByTagName("tbody")[0];
        storedCart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td> ${item.productname} </td> <td> ${item.productprice} </td>`;
            tablebody.appendChild(row);
        });
    }
});