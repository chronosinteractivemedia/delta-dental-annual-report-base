"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (elmtry) {
  "use strict";

  var BlogCards = function (_elmtry$Component) {
    _inherits(BlogCards, _elmtry$Component);

    function BlogCards() {
      _classCallCheck(this, BlogCards);

      return _possibleConstructorReturn(this, (BlogCards.__proto__ || Object.getPrototypeOf(BlogCards)).apply(this, arguments));
    }

    _createClass(BlogCards, [{
      key: "init",
      value: function init() {}
    }]);

    return BlogCards;
  }(elmtry.Component);

  elmtry.bind(BlogCards, '.blog-cards');
})(elmtry);

(function (elmtry) {
  "use strict";

  var Example = function (_elmtry$Component2) {
    _inherits(Example, _elmtry$Component2);

    function Example() {
      _classCallCheck(this, Example);

      return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
    }

    _createClass(Example, [{
      key: "init",
      value: function init() {}
    }]);

    return Example;
  }(elmtry.Component);

  elmtry.bind(Example, '.example');
})(elmtry);

(function (elmtry) {
  "use strict";

  var Footer = function (_elmtry$Component3) {
    _inherits(Footer, _elmtry$Component3);

    function Footer() {
      _classCallCheck(this, Footer);

      return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
      key: "init",
      value: function init() {}
    }]);

    return Footer;
  }(elmtry.Component);

  elmtry.bind(Footer, '.footer');
})(elmtry);

(function (elmtry) {
  "use strict";

  var Graphs = function (_elmtry$Component4) {
    _inherits(Graphs, _elmtry$Component4);

    function Graphs() {
      _classCallCheck(this, Graphs);

      return _possibleConstructorReturn(this, (Graphs.__proto__ || Object.getPrototypeOf(Graphs)).apply(this, arguments));
    }

    _createClass(Graphs, [{
      key: "init",
      value: function init() {}
    }]);

    return Graphs;
  }(elmtry.Component);

  elmtry.bind(Graphs, '.graphs');
})(elmtry);

(function (elmtry) {
  "use strict";

  var plxSpeedDiv = 3; //lower is faster
  var updateInterval = 10; //ms between each update (while scrolling). lower is smoother, but more processing intensive

  var Hero = function (_elmtry$Component5) {
    _inherits(Hero, _elmtry$Component5);

    function Hero() {
      _classCallCheck(this, Hero);

      return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
    }

    _createClass(Hero, [{
      key: "init",
      value: function init() {
        $(window).on('scroll', _.throttle(_.bind(this.doParallax, this), updateInterval));
      }
    }, {
      key: "doParallax",
      value: function doParallax() {
        var elTop = $(this.element).offset().top;
        var scrollTop = $(window).scrollTop();
        var winHeight = $(window).height();
        if (scrollTop + winHeight > elTop) {
          var plxAmount = (scrollTop + winHeight - elTop) / plxSpeedDiv;
          var transformString = 'translate3d(0px,' + plxAmount + 'px, 0px)';
          var bg = $(this.element).find('.hero__bg')[0];
          bg.style.webkitTransform = transformString;
          bg.style.mozTransform = transformString;
          bg.style.msTransform = transformString;
          bg.style.oTransform = transformString;
          bg.style.transform = transformString;
        }
      }
    }]);

    return Hero;
  }(elmtry.Component);

  elmtry.bind(Hero, '.hero');
})(elmtry);

(function (elmtry) {
  "use strict";

  var IconBlock = function (_elmtry$Component6) {
    _inherits(IconBlock, _elmtry$Component6);

    function IconBlock() {
      _classCallCheck(this, IconBlock);

      return _possibleConstructorReturn(this, (IconBlock.__proto__ || Object.getPrototypeOf(IconBlock)).apply(this, arguments));
    }

    _createClass(IconBlock, [{
      key: "init",
      value: function init() {}
    }]);

    return IconBlock;
  }(elmtry.Component);

  elmtry.bind(IconBlock, '.icon-block');
})(elmtry);

(function (elmtry) {
  "use strict";

  var ImgAtr = function (_elmtry$Component7) {
    _inherits(ImgAtr, _elmtry$Component7);

    function ImgAtr() {
      _classCallCheck(this, ImgAtr);

      return _possibleConstructorReturn(this, (ImgAtr.__proto__ || Object.getPrototypeOf(ImgAtr)).apply(this, arguments));
    }

    _createClass(ImgAtr, [{
      key: "init",
      value: function init() {}
    }]);

    return ImgAtr;
  }(elmtry.Component);

  elmtry.bind(ImgAtr, '.img-atr');
})(elmtry);

(function (elmtry) {
  "use strict";

  var plxSpeedDiv = 3; //lower is faster
  var updateInterval = 10; //ms between each update (while scrolling). lower is smoother, but more processing intensive

  var MainHero = function (_elmtry$Component8) {
    _inherits(MainHero, _elmtry$Component8);

    function MainHero() {
      _classCallCheck(this, MainHero);

      return _possibleConstructorReturn(this, (MainHero.__proto__ || Object.getPrototypeOf(MainHero)).apply(this, arguments));
    }

    _createClass(MainHero, [{
      key: "init",
      value: function init() {
        $(window).on('scroll', _.throttle(_.bind(this.doParallax, this), updateInterval));
      }
    }, {
      key: "doParallax",
      value: function doParallax() {
        var scrollTop = $(window).scrollTop();
        var plxAmount = scrollTop / plxSpeedDiv;
        var transformString = 'translate3d(0px,' + plxAmount + 'px, 0px)';
        var bg = $(this.element).find('.main-hero__bg')[0];
        bg.style.webkitTransform = transformString;
        bg.style.mozTransform = transformString;
        bg.style.msTransform = transformString;
        bg.style.oTransform = transformString;
        bg.style.transform = transformString;
      }
    }]);

    return MainHero;
  }(elmtry.Component);

  elmtry.bind(MainHero, '.main-hero');
})(elmtry);

(function (elmtry) {
  "use strict";

  var Nav = function (_elmtry$Component9) {
    _inherits(Nav, _elmtry$Component9);

    function Nav() {
      _classCallCheck(this, Nav);

      return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
      key: "init",
      value: function init() {}
    }]);

    return Nav;
  }(elmtry.Component);

  elmtry.bind(Nav, '.nav');
})(elmtry);

(function (elmtry) {
  "use strict";

  var Sandwich = function (_elmtry$Component10) {
    _inherits(Sandwich, _elmtry$Component10);

    function Sandwich() {
      _classCallCheck(this, Sandwich);

      return _possibleConstructorReturn(this, (Sandwich.__proto__ || Object.getPrototypeOf(Sandwich)).apply(this, arguments));
    }

    _createClass(Sandwich, [{
      key: "init",
      value: function init() {}
    }]);

    return Sandwich;
  }(elmtry.Component);

  elmtry.bind(Sandwich, '.sandwich');
})(elmtry);

(function (elmtry) {
  "use strict";

  var Stripes = function (_elmtry$Component11) {
    _inherits(Stripes, _elmtry$Component11);

    function Stripes() {
      _classCallCheck(this, Stripes);

      return _possibleConstructorReturn(this, (Stripes.__proto__ || Object.getPrototypeOf(Stripes)).apply(this, arguments));
    }

    _createClass(Stripes, [{
      key: "init",
      value: function init() {}
    }]);

    return Stripes;
  }(elmtry.Component);

  elmtry.bind(Stripes, '.stripes');
})(elmtry);