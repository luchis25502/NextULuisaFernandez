//Declaro variables
var operacion = "NA";
var datos = [];
var flagDecimal = 0;
var flagOperacion = 0;
var flagReinicio = 0;
var cont = 0;
var cont_ope = 0;
var signo = 0;
var ultimo_dato = 0;

document.addEventListener('mouseup',function(e){
  e.preventDefault();

  var id = e.target.id;

  if(id != ""){
    var objeto = document.getElementById(id);
    var display = document.getElementById('display');
    var valorPantalla = display.innerHTML;

    //Llamo funcion para cambiar tamaño de tecla al hacer clic
    aumentaTamanioTecla(objeto);

    //Dependiendo del valor capturado realizo diferentes acciones
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
        cont = 0;
        cont_ope = 0;
        datos = [];
        break;
      case "igual":
        var valorOperacion;
        cont = cont + 1;
        datos.push(valorPantalla);
        for (i = 0; i < datos.length; i++){
          if(i == 0){
            //Muestra el resultado en pantalla de la operacion elegida anteriormente
            if (cont == 1 && cont_ope <= 1){
                valorOperacion = datos[i];
            }else{
              /*Si presionamos nuevamente el igual, se verifica el ultimo signo elegido
              y se realiza la operacion para dicho signo, luego se Muestra el valor en pantalla*/
              if (signo==1)
              {  if(parseInt(flagDecimal) == 1){
                  valorOperacion = parseFloat(datos[i]) + parseFloat(ultimo_dato);
                }
               else{
                  valorOperacion = parseInt(datos[i]) + parseInt(ultimo_dato);
                }
              }
              if (signo==2)
              {  if(parseInt(flagDecimal) == 1){
                  valorOperacion = parseFloat(datos[i]) - parseFloat(ultimo_dato);
                }
               else{
                  valorOperacion = parseInt(datos[i]) - parseInt(ultimo_dato);
                }
              }
              if (signo==3)
              {  if(parseInt(flagDecimal) == 1){
                  valorOperacion = parseFloat(datos[i]) * parseFloat(ultimo_dato);
                }
               else{
                  valorOperacion = parseInt(datos[i]) * parseInt(ultimo_dato);
                }
              }
              if (signo==4)
              {  if(parseInt(flagDecimal) == 1){
                  valorOperacion = parseFloat(datos[i]) / parseFloat(ultimo_dato);
                }
               else{
                  valorOperacion = parseInt(datos[i]) / parseInt(ultimo_dato);
                }
              }
            }
          }
          else {
            cont = 0;
            cont_ope = 0;
            switch(operacion){
              //Realizo operaciones de suma

              case "mas":
                if(parseInt(flagDecimal) == 1){
                  valorOperacion = parseFloat(valorOperacion) + parseFloat(datos[i]);
                }
                else{
                  valorOperacion = parseInt(valorOperacion) + parseInt(datos[i]);
                }
                cont_ope = cont_ope + 1;
                ultimo_dato = datos[i];
                signo = 1;
                break;
                //Realizo operaciones de resta
                case "menos":
                  if(parseInt(flagDecimal) == 1){
                    valorOperacion = parseFloat(valorOperacion) - parseFloat(datos[i]);
                  }
                  else{
                    valorOperacion = parseInt(valorOperacion) - parseInt(datos[i]);
                  }
                  cont_ope = cont_ope + 1;
                  ultimo_dato = datos[i];
                  signo = 2;
                  break;
                //Realizo operaciones de multiplicacion
                case "por":
                  if(parseInt(flagDecimal) == 1){
                    valorOperacion = parseFloat(valorOperacion) * parseFloat(datos[i]);
                  }
                  else{
                    valorOperacion = parseInt(valorOperacion) * parseInt(datos[i]);
                  }
                  cont_ope = cont_ope + 1;
                  ultimo_dato = datos[i];
                  signo = 3;
                  break;
                //Realizo operaciones de division
                case "dividido":
                  if(parseInt(flagDecimal) == 1){
                    valorOperacion = parseFloat(valorOperacion) / parseFloat(datos[i]);
                  }
                  else{
                    valorOperacion = parseInt(valorOperacion) / parseInt(datos[i]);
                  }
                  cont_ope = cont_ope + 1;
                  ultimo_dato = datos[i];
                  signo = 4;
                  break;

            }
          }
        }
        display.innerHTML = valorOperacion.toString().substring(0,8);
        flagOperacion = 0;
        flagDecimal = 0;
        datos = [];
        operacion = "NA";
        break;
      case "punto":
        if(valorPantalla.length < 8){
          if(!valorPantalla.includes(".")){
            if(valorPantalla.trim().length <= 0){
              valorPantalla = "0.";
            }
            else{
              valorPantalla = valorPantalla.trim() + ".";
            }

            display.innerHTML = valorPantalla;
            flagDecimal = 1;
          }
        }
        break;
      case "sign":
        if(!valorPantalla.includes("-")){
          if(valorPantalla.length > 0 && valorPantalla.length < 8){
            if(valorPantalla.trim() == "0" && valorPantalla.length == 1){
              valorPantalla = "0";
            }
            else{
              valorPantalla = "-" + valorPantalla.trim();
            }
          }
          if(valorPantalla.length >= 8){
            valorPantalla = "-" + valorPantalla.trim().substring(0,7);
          }
        }
        else{
          valorPantalla = valorPantalla.trim().substring(1,8);
        }

        display.innerHTML = valorPantalla;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if(valorPantalla.length < 8){
          if(valorPantalla.length == 1 && valorPantalla == "0"){
            valorPantalla = id;
          }
          else{
            valorPantalla = valorPantalla.trim() + id;
          }

          display.innerHTML = valorPantalla;
        }
        break;
    }
  }
});

//Llamo a la funcion que cambia el tamaño de la tecla
document.addEventListener('mousedown',function(e){
  e.preventDefault();
  var id = e.target.id;

  if(id.trim() != ""){
    var objeto = document.getElementById(id);
    disminuyeTamanioTecla(objeto);
  }
});

//Funcion que aumenta el padding para generar el efecto de hacer clic
function disminuyeTamanioTecla(obj){
  obj.style="padding: 1px;";
}
//Funcion que devuelve al padding en 0 para simular el efecto que suelto el clic
function aumentaTamanioTecla(obj){
  obj.style="padding: 0px;";
}
