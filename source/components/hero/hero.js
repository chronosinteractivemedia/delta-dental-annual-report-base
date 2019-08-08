((elmtry) => {
  "use strict";

  const plxSpeedDiv = 3; //lower is faster
  const updateInterval = 10; //ms between each update (while scrolling). lower is smoother, but more processing intensive

  class Hero extends elmtry.Component{
    init(){
      $(window).on('scroll', _.throttle(_.bind(this.doParallax, this), updateInterval));
    }
    doParallax(){
      var windowWidth =$(window).width();
      console.log(windowWidth + 'width');
        if (windowWidth > 375){               
          var elTop = $(this.element).offset().top;
          var scrollTop = $(window).scrollTop();
          var winHeight = $(window).height();
          if((scrollTop + winHeight) > elTop){
            var plxAmount = (scrollTop + winHeight - elTop) / plxSpeedDiv;
            var transformString = 'translate3d(0px,'+plxAmount+'px, 0px)';
            var bg = $(this.element).find('.hero__bg')[0];
            bg.style.webkitTransform = transformString;
            bg.style.mozTransform = transformString;
            bg.style.msTransform = transformString;
            bg.style.oTransform = transformString;
            bg.style.transform = transformString;
          }
        }
        else{
          return
        }
		}
  }
  elmtry.bind(Hero, '.hero');
})(elmtry);
