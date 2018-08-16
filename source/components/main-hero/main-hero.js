((elmtry) => {
  "use strict";

  const plxSpeedDiv = 3; //lower is faster
  const updateInterval = 10; //ms between each update (while scrolling). lower is smoother, but more processing intensive

  class MainHero extends elmtry.Component{
    init(){
      $(window).on('scroll', _.throttle(_.bind(this.doParallax, this), updateInterval));
    }
    doParallax(){
		  var scrollTop = $(window).scrollTop();
      var plxAmount = scrollTop / plxSpeedDiv;
      var transformString = 'translate3d(0px,'+plxAmount+'px, 0px)';
      var bg = $(this.element).find('.main-hero__bg')[0];
      bg.style.webkitTransform = transformString;
      bg.style.mozTransform = transformString;
      bg.style.msTransform = transformString;
      bg.style.oTransform = transformString;
      bg.style.transform = transformString;
		}
  }
  elmtry.bind(MainHero, '.main-hero');
})(elmtry);
