$(document).ready(function (){
    // Cambio estilo barra nav
    $(window).on("scroll", function(){
        var positionParagraph = $("#primera").offset();
        var positionDocument = $(window).scrollTop();
        var logoBlanco = document.getElementById("logo-b");
        var logoNegro = document.getElementById("logo-n");

        console.log(positionDocument);
        if (positionDocument > positionParagraph.top - 60) {
            $('nav').removeClass('white');
            $(".burger").removeClass('white'); //javaquery
            logoBlanco.style.display="none"; //javascript
            logoNegro.style.display="block";
            
        } else {
            $('nav').addClass('white');
            $('.burger').addClass('white');
            logoBlanco.style.display="block";
            logoNegro.style.display="none";
        }
    });
  
    //Menu lateral
    $(".burger").click(function(){
        $(".burger").toggleClass("open");
        $("aside").toggleClass("open");
    });
    
    //Resize para cerrar menú en cambio de tamaño viewport
    $(window).on("resize", function(){
        console.log("cambiando con la tablet");
        $("aside").removeClass("open");
    });
});

