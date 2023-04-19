
window.addEventListener('load', function() {
  var container = document.querySelector('.container');
  var sidebar = document.querySelector('.sidebar');
  sidebar.style.height = container.offsetHeight + 'px';
});