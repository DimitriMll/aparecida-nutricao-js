var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    //event.target.parentNode.remove()
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove(); // remove o TR que é o parent do TD que eu cliquei
    },750);
   
});
