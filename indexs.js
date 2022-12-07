
 function display() {

   alert("YOUR CAKE HAS BEEN BOOKED.");
 }
 var cake_prices = new Array();
 cake_prices["Round6"]=200;
 cake_prices["Round8"]=250;
 cake_prices["Round10"]=350;
 cake_prices["Round12"]=550;


 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Lemon"]=5;
 filling_prices["Custard"]=5;
 filling_prices["Fudge"]=7;
 filling_prices["Mocha"]=8;
 filling_prices["Raspberry"]=10;
 filling_prices["Pineapple"]=5;
 filling_prices["Dobash"]=9;
 filling_prices["Mint"]=5;
 filling_prices["Cherry"]=5;
 filling_prices["Apricot"]=8;
 filling_prices["Buttercream"]=7;
 filling_prices["Chocolate Mousse"]=12;


function getCakeSizePrice()
{
    var cakeSizePrice=0;

    var theForm = document.forms["cakeform"];

    var selectedCake = theForm.elements["selectedcake"];

    for(var i = 0; i < selectedCake.length; i++)
    {

        if(selectedCake[i].checked)
        {

            cakeSizePrice = cake_prices[selectedCake[i].value];

            break;
        }
    }

    return cakeSizePrice;
}

function getFillingPrice()
{
    var cakeFillingPrice=0;

    var theForm = document.forms["cakeform"];

     var selectedFilling = theForm.elements["filling"];


    cakeFillingPrice = filling_prices[selectedFilling.value];


    return cakeFillingPrice;
}


function candlesPrice()
{
    var candlePrice=0;
    var theForm = document.forms["cakeform"];
    var includeCandles = theForm.elements["includecandles"];


    if(includeCandles.checked==true)
    {
        candlePrice=15;
    }

    return candlePrice;
}

function insciptionPrice()
{

    var inscriptionPrice=0;

    var theForm = document.forms["cakeform"];

    var includeInscription = theForm.elements["includeinscription"];

    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }

    return inscriptionPrice;
}

function calculateTotal()
{

    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();

    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake Rs."+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
