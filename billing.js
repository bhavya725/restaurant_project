 var cake_prices = new Array();
 cake_prices["Round6"]=50;
 cake_prices["Round8"]=100;
 cake_prices["Round10"]=150;
 cake_prices["Round12"]=200;


 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["PaneerTikka"]=160;
 filling_prices["Custard"]=120;
 filling_prices["Fudge"]=80;
 filling_prices["Mocha"]=90;
 filling_prices["Raspberry"]=150;
 filling_prices["Pineapple"]=350;
 filling_prices["Dobash"]=100;
 filling_prices["Mint"]=300;
 filling_prices["Cherry"]=250;
 filling_prices["Apricot"]=200;
 filling_prices["Buttercream"]=100;
 filling_prices["B"]=40;
 filling_prices["P"]=20;
 filling_prices["S"]=50;
 filling_prices["Pa"]=40;
 filling_prices["I"]=160;
 filling_prices["Pu"]=200;
 filling_prices["G"]=200;
 filling_prices["M"]=200;
 filling_prices["Pas"]=100;
 filling_prices["C"]=180;
 filling_prices["Gu"]=30;


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
        candlePrice=35;
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

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Bill Rs."+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
