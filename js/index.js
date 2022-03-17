function Passvalues()
{
    var productname = document.getElementById("txt").value;
    var productprice = document.getElementById("price").value;
    var productdescription = document.getElementById("description").value;

    localStorage.setItem("textvalue",productname);
    localStorage.setItem("textprice",productprice);
    localStorage.setItem("textdescription",productdescription);
    return false; 
}

