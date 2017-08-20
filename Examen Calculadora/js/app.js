var operacion = "NA";
var datos = [];
var flagDecimal = 0;
var flagOperacion = 0;
var flagReinicio = 0;

document.addEventListener('mouseup',function(e){
  e.preventDefault();

  var id = e.target.id;

  if(id != ""){
    var objeto = document.getElementById(id);
    var display = document.getElementById('display');
    var valorPantalla = display.innerHTML;

    aumentaTamanioTecla(objeto);

    switch(e.target.id)
    {
      case "mas":
      case "menos":
      case "por":
      case "dividido":
        operacion = e.target.id;
        flagOperacion = 1;
        datos.push(valorPantalla);
        display.innerHTML = "";
        break;
      case "on":
        display.innerHTML = "0";
        flagOperacion = 0;
        flagDecimal = 0;
        datos = [];
        break;
      case "igual":
        var valorOperacion;

        datos.push(valorPantalla);

        for (i = 0; i < datos.length; i++){
          if(i == 0){
            valorOperacion = datos[i];
          }
          else {
            switch(operacion){
              case "mas":
                if(parseInt(flagDecimal) == 1){
                  valorOperacion = parseFloat(valorOperacion) + parseFloat(datos[i]);
                }
                else{
                  valorOperacion = parseInt(valorOperacion) + parseInt(datos[i]);
                }
                break;
                case "menos":
                  if(parseInt(flagDecimal) == 1){
                    valorOperacion = parseFloat(valorOperacion) - parseFloat(datos[i]);
                  }
                  else{
                    valorOperacion = parseInt(valorOperacion) - parseInt(datos[i]);
                  }
                  break;
                case "por":
                  if(parseInt(flagDecimal) == 1){
                    valorOperacion = parseFloat(valorOperacion) * parseFloat(datos[i]);
                  }
                  else{
                    valorOperacion = parseInt(valorOperacion) * parseInt(datos[i]);
                  }
                  break;
                case "dividido":
                  if(parseInt(flagDecimal) == 1){
                    valorOperacion = parseFloat(valorOperacion) / parseFloat(datos[i]);
                  }
                  else{
                    valorOperacion = parseInt(valorOperacion) / parseInt(datos[i]);
                  }
                  break;
            }
          }
        }

    }
  }
});

document.addEventListener('mousedown',function(e){
  e.preventDefault();
  var id = e.target.id;

  if(id.trim() != ""){
    var objeto = document.getElementById(id);
    disminuyeTamanioTecla(objeto);
  }
});

function disminuyeTamanioTecla(obj){
  obj.style="padding: 1px;";
}
function aumentaTamanioTecla(obj){
  obj.style="padding: 0px;";
}
