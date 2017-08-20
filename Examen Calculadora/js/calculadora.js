self.addEventListener('click', function(e) {
  var datos = JSON.parse(e.data)
  console.log(datos);
  if (datos.hasOwnProperty('display')) {
    self.postMessage(true)
  } else {
    self.postMessage(false)
  }
})
