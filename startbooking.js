var cake_prices = new Array();
cake_prices["Round6"]=00;
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
filling_prices["Mint"]=300;function getCakeSizePrice()
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
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];


    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}


function candlesPrice()
{
    var candlePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=35;
    }
    //finally we return the candlePrice
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
