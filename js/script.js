var mainMenu = document.getElementsByClassName('top-nav')[0];
var pageContent = document.getElementById('wrapper');
/*a few functions for adding and removing classes. */
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

/* shows the page clicked on in the nav and hides all the other content */
function showPage(showPageId){
  var visiblePageId = document.getElementsByClassName('visible-page')[0].id;
  var hidePage = document.getElementById(visiblePageId);
  removeClass(hidePage, 'visible-page');
  addClass(hidePage, 'invisible-page');
  var clickedPage = document.getElementById(showPageId);
  addClass(clickedPage, 'visible-page');

  removeClass(mainMenu, 'menu-hide');
  addClass(mainMenu, 'menu-show');
}
