
window.addEventListener('load', ()=>{

    document.getElementById("name").innerHTML=localStorage.getItem("textvalue");
    document.getElementById("price1").innerHTML=localStorage.getItem("textprice");
    document.getElementById("descroption1").innerHTML=localStorage.getItem("textdescription");

   
});

function addnew()
{
    window.location = "index.html";

};

