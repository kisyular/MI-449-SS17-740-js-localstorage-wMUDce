var theme = window.localStorage.getItem('getTheme')
window.onload = function() {
  document.body.setAttribute('class', theme)
  if (localStorage.pagecount) {
    localStorage.pagecount = Number(localStorage.pagecount) + 1
  } else {
    localStorage.pagecount = 1
  }
  document.getElementById('numVisitors').innerHTML = 'You visited this website: ' + '<strong id="red">' + localStorage.pagecount + '</strong>' + ' time(s).'
  document.getElementById('red').style.color = 'red'
}
$('#myModal').modal({
  show: false
})
if (theme === null) {
  showSelected()
  if (theme === null) {
    theme = 'night-theme'
  } else {
    window.localStorage.setItem('getTheme', theme)
  }
}

var clearStorage = document.getElementById('clearStorage')
clearStorage.addEventListener('click', function() {
  localStorage.clear()
})

var buttonElement = document.getElementById('changeTm')
buttonElement.addEventListener('click', function() {
  if (document.getElementById('myBody').className === 'night-theme' || document.getElementById('myBody').className === '') {
    document.body.setAttribute('class', 'day-theme')
    window.localStorage.setItem('getTheme', 'day-theme')
  } else {
    document.body.setAttribute('class', 'night-theme')
    window.localStorage.setItem('getTheme', 'night-theme')
  }
})

document.getElementById('saveTheme').addEventListener('click', showSelected)

function showSelected() {
  $('#myModal').modal('show')
  var selector = document.getElementById('themeOptions')
  var theme = selector[selector.selectedIndex].value
  window.localStorage.setItem('getTheme', theme)
  document.body.setAttribute('class', theme)
}
