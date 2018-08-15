((elmtry) => {
  "use strict";

  const SVG_ICON_PATH = '/images/icons.svg';

  class GlobalSite extends elmtry.Site {
    init() {
      this.prependSvgIcons();
    }
    prependSvgIcons(){
      const ajax = new XMLHttpRequest();
      ajax.open("GET", SVG_ICON_PATH, true);
      ajax.send();
      ajax.onload = (e) => {
        var div = document.createElement("div");
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
      }
    }
  }

  elmtry.bind(GlobalSite);

})(elmtry);

