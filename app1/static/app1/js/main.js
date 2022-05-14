// document.querySelector('#test').innerHTML='<h5>Here you will get different variety of food.</h5>';
var hours=24;
var now=new Date().getTime();
var stepTime=localStorage.getItem('stepTime');

if(stepTime==null)
{
    localStorage.setItem('stepTime',now);
}
else{
    if(now - stepTime > hours*60*60*1000)
    {
        localStorage.clear();
        localStorage.setItem('stepTime',now);
    }
}

var orders=JSON.parse(localStorage.getItem('orders')); //orders array is created
var total=localStorage.getItem('total');

if(orders===null || orders===undefined)
{
    localStorage.setItem('orders',JSON.stringify([]));
    orders=JSON.parse(localStorage.getItem('orders'));
}

if(total===null || total===undefined)
{
    localStorage.setItem('total',0);
    total=localStorage.getItem('total');
}

var cart=document.querySelector("#cart");
cart.innerHTML=orders.length;
