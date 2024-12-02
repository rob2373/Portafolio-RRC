$(function() {
    var mediaQuery = window.matchMedia("(max-width: 768px)");

        $("#sobre").on('click',()=>{
        /*   $("#sobreMi").show("slow");
          $("#portafolio").hide();
          $("#estudios").hide();
          $("#skills").hide(); 
          $("#contacto").hide(); */
          //actoive en la navbar
          $("#estudio").removeClass("active");
          $("#sobre1").addClass("active");
          $("#skill").removeClass("active");
          $("#contact").removeClass("active");
          $("#porta1").removeClass("active");
        });
        $("#porta").on('click',()=>{
           /*  $("#sobreMi").hide();
            $("#portafolio").show("slow");
            $("#estudios").hide();
            $("#skills").hide(); 
            $("#contacto").hide(); */
            //actoive en la navbar
            $("#estudio").removeClass("active");
            $("#sobre1").removeClass("active");
            $("#skill").removeClass("active");
            $("#contact").removeClass("active");
            $("#porta1").addClass("active");
          });
          $("#estud").on('click',()=>{
          /*   $("#sobreMi").hide();
            $("#portafolio").hide();
            $("#estudios").show("slow");
            $("#skills").hide(); 
            $("#contacto").hide(); */
              //actoive en la navbar
          $("#estudio").addClass("active");
          $("#sobre1").removeClass("active");
          $("#skill").removeClass("active");
          $("#contact").removeClass("active");
          $("#porta1").removeClass("active");
          });
          $("#skil").on('click',()=>{
           /*  $("#sobreMi").hide();
            $("#portafolio").hide();
            $("#estudios").hide();
            $("#skills").show("slow"); 
            $("#contacto").hide(); */
                    //actoive en la navbar
          $("#estudio").removeClass("active");
          $("#sobre1").removeClass("active");
          $("#skill").addClass("active");
          $("#contact").removeClass("active");
          $("#porta1").removeClass("active");
          });
          $("#contac").on('click',()=>{
          
            /* $("#sobreMi").hide();
            $("#portafolio").hide();
            $("#estudios").hide();
            $("#skills").hide(); 
            $("#contacto").show("slow"); */
                    //actoive en la navbar
          $("#estudio").removeClass("active");
          $("#sobre1").removeClass("active");
          $("#skill").removeClass("active");
          $("#contact").addClass("active");
          $("#porta1").removeClass("active");
          });

          function detectarPantalla() {
            if (window.matchMedia("(max-width: 768px)").matches) {
                // Si el ancho es menor o igual a 768px, es un móvil
                $("#ocultar").hide();
                $("#mainMenu").css({
                  'position':'relative', 
                });
              $("#mainMenu").removeClass("sticky-top");
              $("#mainMenu").addClass(" fixed-top");
                   // Cuando el usuario haga scroll hacia abajo 100px, mostrar el botón
                $(window).scroll(function() {
                  if ($(this).scrollTop() > 100) {
                    $('#btnUp').fadeIn();  // Mostrar el botón
                  } else {
                    $('#btnUp').fadeOut();  // Ocultar el botón
                  }
                });

                // Al hacer clic en el botón, desplazarse al principio de la página con animación
                $('#btnUp').click(function() {
                  $('html, body').animate({ scrollTop: 0 }, 500);  // Desplazarse a la parte superior en 500ms
                  return false;  // Prevenir el comportamiento predeterminado
        });
            }else{
                  // Si el ancho es mayor a 768px, es un dispositivo de escritorio
                $("#ocultar").show("slow");
                $("#mainMenu").css({
                  'position':'fixed', 
                });
                $("#mainMenu").addClass("sticky-top");
                $("#mainMenu").removeClass("fixed-top");
               
            }
        }
        
        detectarPantalla();

        $(window).resize(function() {
            detectarPantalla();
        });

   
  // Detectar el scroll
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop(); // Obtener posición de scroll
    $(".nav-link").each(function () {
      var sectionOffset = $($(this).attr("href")).offset().top - 100; // Compensar el tamaño del navbar
      if (scrollPos >= sectionOffset) {
        $(".nav-link").removeClass("active"); // Remover la clase activa de todos los enlaces
        $(this).addClass("active"); // Agregar la clase activa al enlace correspondiente
      }
    });
  });

});