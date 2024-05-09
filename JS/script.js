const scrollTop = window.scrollY;


window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrollPercentage + '%';
});




$("#burger").click(function(){
    $(".overlayMenu").toggleClass("overlayMenuN");
    $("#burger").toggleClass("burger");
    $("#body").toggleClass("overFlowHidden");
});




var fechaHoy = new Date();

var fechaHoyDia = fechaHoy.getDate();
var fechaHoyMes = fechaHoy.getMonth(); 
var fechaHoyAño = fechaHoy.getFullYear();

const mesHoyLetra = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
var nombreMesHoy = mesHoyLetra[fechaHoyMes];

document.getElementById('dateDay').textContent = fechaHoyDia;
document.getElementById('dateMonth').textContent = nombreMesHoy;
document.getElementById('dateYear').textContent = fechaHoyAño;




(function ($) {
  $(function () {

    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });
     
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
      fnUpdateStyles(); // Call the function to update styles on scroll
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
      fnUpdateStyles(); // Call the function to update styles on resize
    }

    function fnUpdateWindow() {

      var agTimelineLine = agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        if ((agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight) {
          $(this).addClass('js-ag-active');
        } else {
          $(this).removeClass('js-ag-active');
        }
      });
    }
    
    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
    }
    
    function fnUpdateStyles() {
      var scrollTop = $(window).scrollTop();
      agTimelineItem.each(function () {
        var offsetTop = $(this).offset().top;
        var windowHeight = $(window).height();
        var itemHeight = $(this).outerHeight();
        var bottomPosition = offsetTop + itemHeight;
        
        if (offsetTop <= scrollTop + windowHeight / 1.4 && bottomPosition >= scrollTop + windowHeight / 1.4) {
          $(this).find('.firstAnimation').addClass('animationN1');
        } else if (scrollTop === 0) {
          $('.firstAnimation').removeClass('animationN1');
        }
        
        if (offsetTop <= scrollTop + windowHeight / 1.4 && bottomPosition >= scrollTop + windowHeight / 1.4) {
          $(this).find('.secondAnimation').addClass('animationN2');
        } else if (scrollTop === 0) {
          $('.secondAnimation').removeClass('animationN2');
        }

        if (offsetTop <= scrollTop + windowHeight / 1.4 && bottomPosition >= scrollTop + windowHeight / 1.4) {
          $(this).find('.thirdAnimation').addClass('animationN3');
        } else if (scrollTop === 0) {
          $('.thirdAnimation').removeClass('animationN3');
        }

        if (offsetTop <= scrollTop + windowHeight / 1.4 && bottomPosition >= scrollTop + windowHeight / 1.4) {
          $(this).find('.fourthAnimation').addClass('animationN4');
        } else if (scrollTop === 0) {
          $('.fourthAnimation').removeClass('animationN4');
        }

        if (offsetTop <= scrollTop + windowHeight / 1.2 && bottomPosition >= scrollTop + windowHeight / 1.2) {
          $(this).find('.fifthAnimation').addClass('animationN5');
        } else if (scrollTop === 0) {
          $('.fifthAnimation').removeClass('animationN5');
        }

        if (offsetTop <= scrollTop + windowHeight / 1.2 && bottomPosition >= scrollTop + windowHeight / 1.2) {
          $(this).find('.sixthAnimation').addClass('animationN6');
        } else if (scrollTop === 0) {
          $('.sixthAnimation').removeClass('animationN6');
        }

      });
    }
  });
})(jQuery);



const caja = document.getElementById('stickyBox');

window.addEventListener('scroll', function(){
  var scroll = window.scrollY;
  if (scroll > 1200){
    caja.classList.add('hideSticky');
  } else {
    caja.classList.remove('hideSticky');
  }
});