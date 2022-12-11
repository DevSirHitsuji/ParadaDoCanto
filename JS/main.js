const show = () => {
    const nav = document.getElementById("nave");
    if (nav.className == "invisible"){
        nav.style = "display: flex";
        nav.className = "visible";
        
    }else{
        nav.style = "display: none";
        nav.className = "invisible"
    }   
    
}

const Default = () => {
    window.alert("Função não disponivel na prévia.")
}