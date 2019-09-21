function calculate(){
    const total=document.getElementById("total").value;
    const rate=document.getElementById("rate").value;
    const tip=parseFloat(total)*rate/100;
    const tax=parseFloat(total)*5.5/100;
    const grandtotal=parseFloat(total)+parseFloat(rate)+tax;
    document.getElementById("tip").innerHTML=parseFloat(tip).toFixed(2);
    document.getElementById("tax").innerHTML=parseFloat(tax).toFixed(2);
    document.getElementById("grandtotal").innerHTML=parseFloat(grandtotal).toFixed(2);
}