window.onload = function () {
    // fetch all nav menu items
    var items = document.getElementsByClassName('menu__items');
    var toggleBtn = document.getElementById('toggle');
    var toggleIcon = document.getElementById('toggleIcon')
    // on click of hameburger menu icon
    toggleBtn.onclick = function() {
      toggleIcon.textContent = toggleIcon.textContent == 'menu' ? 'close': 'menu';
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('show');
      }
    };
  };