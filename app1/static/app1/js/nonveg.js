
var nvcart=document.querySelector('#nvcart');
var nvtotal=document.querySelector('#nvtotal');

function addNonVeg(nvid)
{
    nonvegId='#nv'+nvid;
    var name=document.querySelector(nonvegId).innerHTML;
    
    var radio='nonveg'+ nvid;
    var pri= document.getElementsByName(radio);
    var price;
    if(pri[0].checked)
    {
        price=pri[0].value;
    }
    else price=0;
    var orders=JSON.parse(localStorage.getItem('orders'));
    var total=localStorage.getItem('total');
    var cartSize=orders.length;
    orders[cartSize]=[name,price];
    localStorage.setItem('orders',JSON.stringify(orders));
    total=Number(total)+Number(price);
    localStorage.setItem('total',total);
 
    var cart=document.querySelector("#cart"); 
    cart.innerHTML=orders.length;
    butto='<button class="del" oneclick="removenonveg(' +cartSize+ ')">x</button>';
    nvtotal.innerHTML='Total: Rs ' + total;
    nvcart.innerHTML+='<li>'+ name +' '+ ': Rs '+ price +' '+butto+ '</li>';
    
}

function nvshoppingCart()
{
    var orders=JSON.parse(localStorage.getItem('orders')); //orders array is created
    var total=localStorage.getItem('total');
    var cartSize=orders.length;
    nvcart.innerHTML='';
    for(let i=0;i<cartSize;i++)
    {
        butto='<button class="del" oneclick="removenonveg(' +cartSize+ ')">x</button>';
        nvcart.innerHTML+='<li>'+ orders[i][0]+' '+orders[i][1] + ' '+butto+ '</li>';
    }
    nvtotal.innerHTML='Total: Rs ' + total;
}

nvshoppingCart();

function removenonveg(n)
{
    var orders=JSON.parse(localStorage.getItem('orders'));
    var total=localStorage.getItem('total');
    total=Number(total)-Number(orders[n][1]);
    // orders.splice(n,0);

    var cart=document.querySelector("#cart");
    cart.innerHTML=orders.length;
    
    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    nvshoppingCart();
}