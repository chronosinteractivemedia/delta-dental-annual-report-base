"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (elmtry) {
  "use strict";

  var SVG_ICON_PATH = '/images/icons.svg';

  var GlobalSite = function (_elmtry$Site) {
    _inherits(GlobalSite, _elmtry$Site);

    function GlobalSite() {
      _classCallCheck(this, GlobalSite);

      return _possibleConstructorReturn(this, (GlobalSite.__proto__ || Object.getPrototypeOf(GlobalSite)).apply(this, arguments));
    }

    _createClass(GlobalSite, [{
      key: "init",
      value: function init() {
        this.prependSvgIcons();
      }
    }, {
      key: "prependSvgIcons",
      value: function prependSvgIcons() {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", SVG_ICON_PATH, true);
        ajax.send();
        ajax.onload = function (e) {
          var div = document.createElement("div");
          div.innerHTML = ajax.responseText;
          document.body.insertBefore(div, document.body.childNodes[0]);
        };
      }
    }]);

    return GlobalSite;
  }(elmtry.Site);

  elmtry.bind(GlobalSite);

  var BasicFadeInElement = function (_elmtry$Component) {
    _inherits(BasicFadeInElement, _elmtry$Component);

    function BasicFadeInElement() {
      _classCallCheck(this, BasicFadeInElement);

      return _possibleConstructorReturn(this, (BasicFadeInElement.__proto__ || Object.getPrototypeOf(BasicFadeInElement)).apply(this, arguments));
    }

    return BasicFadeInElement;
  }(elmtry.Component);

  elmtry.bind(BasicFadeInElement, '.ui-container');
})(elmtry);