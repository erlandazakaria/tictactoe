
function divAlert(idnya){
    let elementnya = idnya.className;
    let l ="";
    if(elementnya == "div1"){
        l = "Div 1";
    }
    else if(elementnya == "div2"){
        l = "Div 2";
    }
    else if(elementnya == "div3"){
        l = "Div 3";
    }
    else{
        l = "Error";
    }
    alert(l);
}
