//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
var maxClickA = 3;
var countClickA = 0;
var maxClickC = 3;
var countClicC = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        obj = new Obj3D();
        if (obj.read(contenido)) {
            //sDir = sDir1;
            cv = new CvHLines(graphics, canvas);
            cv.setObj(obj);
            cv.paint();
        }
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
            alert('datos no validos');
    }
    else
        alert('aun no has leido un archivo');
}
function eyeDownFunc() {
    vp(0, 0.1, 1);
}
function eyeUpFunc() {
    vp(0, -0.1, 1);
}
function eyeLeftFunc() {
    vp(-0.1, 0, 1);
}
function eyeRightFunc() {
    vp(0.1, 0, 1);
}
function incrDistFunc() {
    vp(0, 0, 2);
}
function decrDistFunc() {
    vp(0, 0, 0.5);
}
function pza1DerFunc() {
    var af = 10;
}
/*
//Abrir Mano
function AbrirMano(){
  //Dedo Indice, Nudillo 1
  if (countClicC < maxClickC){
  let  af = -10;
  console.log(obj.w[81], obj.w[82]);
  Rota3D.initRotate(obj.w[81], obj.w[82], af*Math.PI/180);
  for(let i = 9; i <=  16; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for(let i = 49; i <=  56; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  cv.setObj(obj);
  cv.paint();
  //Fin Dedo Indice, Nudillo 1

  //Dedo Indice, Nudillo 2
  let  af2 = -13;
  console.log(obj.w[83], obj.w[84]);
  Rota3D.initRotate(obj.w[83], obj.w[84], af2*Math.PI/180);
  for(let i = 10; i <=  15; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for(let i = 50; i <=  55; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  cv.setObj(obj);
  cv.paint();
  //Fin Dedo Indice, Nudillo 2

  //Dedo Indice, Nudillo 3
  let  af3 = -15;
  console.log(obj.w[85], obj.w[86]);
  Rota3D.initRotate(obj.w[85], obj.w[86], af3*Math.PI/180);
  for(let i = 11; i <=  14; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for(let i = 51; i <=  54; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  cv.setObj(obj);
  cv.paint();
  //Fin Dedo Indice, Nudillo 3
  countClickA --;
  countClicC ++;
}
}

//Cerrar Mano
function CerrarMano(){
  //Dedo Indice, Nudillo 1
  if (countClickA < maxClickA){
  let  af = 10;
  console.log(obj.w[81], obj.w[82]);
  Rota3D.initRotate(obj.w[81], obj.w[82], af*Math.PI/180);
  for(let i = 9; i <=  16; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for(let i = 49; i <=  56; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }

  cv.setObj(obj);
  cv.paint();
  //Fin Dedo Indice, Nudillo 1

  //Dedo Indice, Nudillo 2
  let  af2 = 12;
  console.log(obj.w[83], obj.w[84]);
  Rota3D.initRotate(obj.w[83], obj.w[84], af2*Math.PI/180);
  for(let i = 10; i <=  15; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for(let i = 50; i <=  55; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }

  cv.setObj(obj);
  cv.paint();
  //Fin Dedo Indice, Nudillo 2

  //Dedo Indice, Nudillo 3
  let  af3 = 14;
  console.log(obj.w[85], obj.w[86]);
  Rota3D.initRotate(obj.w[85], obj.w[86], af3*Math.PI/180);
  for(let i = 11; i <=  14; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for(let i = 51; i <=  54; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  cv.setObj(obj);
  cv.paint();
  //Fin Dedo Indice, Nudillo 3
countClickA ++;
countClicC --;
}
}
*/
//Abrir Mano
function AbrirMano() {
    //Dedo Indice, Nudillo 1
    if (countClicC < maxClickC) {
        var af = -10;
        console.log(obj.w[81], obj.w[82]);
        Rota3D.initRotate(obj.w[81], obj.w[82], af * Math.PI / 180);
        for (var i = 9; i <= 16; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 49; i <= 56; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 1
        //Dedo Indice, Nudillo 2
        var af2 = -12;
        console.log(obj.w[83], obj.w[84]);
        Rota3D.initRotate(obj.w[83], obj.w[84], af2 * Math.PI / 180);
        for (var i = 10; i <= 15; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 50; i <= 55; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 2
        //Dedo Indice, Nudillo 3
        var af3 = -14;
        console.log(obj.w[85], obj.w[86]);
        Rota3D.initRotate(obj.w[85], obj.w[86], af3 * Math.PI / 180);
        for (var i = 11; i <= 14; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 51; i <= 54; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 3
        //Dedo Medio, Nudillo 1
        var af4 = -10;
        console.log(obj.w[87], obj.w[88]);
        Rota3D.initRotate(obj.w[87], obj.w[88], af4 * Math.PI / 180);
        for (var i = 17; i <= 24; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 57; i <= 64; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Dedo medio, Nudillo 2
        var af5 = -12;
        console.log(obj.w[89], obj.w[90]);
        Rota3D.initRotate(obj.w[89], obj.w[90], af5 * Math.PI / 180);
        for (var i = 18; i <= 23; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 58; i <= 63; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo medio, Nudillo 2
        //Dedo medio, Nudillo 3
        var af6 = -14;
        console.log(obj.w[91], obj.w[92]);
        Rota3D.initRotate(obj.w[91], obj.w[92], af6 * Math.PI / 180);
        for (var i = 19; i <= 22; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 59; i <= 62; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 3
        //Dedo Anular, Nudillo 1
        var af7 = -10;
        console.log(obj.w[93], obj.w[94]);
        Rota3D.initRotate(obj.w[93], obj.w[94], af7 * Math.PI / 180);
        for (var i = 25; i <= 32; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 65; i <= 72; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Anular, Nudillo 1
        //Dedo Anular, Nudillo 2
        var af8 = -10;
        console.log(obj.w[95], obj.w[96]);
        Rota3D.initRotate(obj.w[95], obj.w[96], af8 * Math.PI / 180);
        for (var i = 26; i <= 31; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 66; i <= 71; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Anular, Nudillo 2
        //Dedo Anular, Nudillo 3
        var af9 = -12;
        console.log(obj.w[97], obj.w[98]);
        Rota3D.initRotate(obj.w[97], obj.w[98], af9 * Math.PI / 180);
        for (var i = 27; i <= 30; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 67; i <= 70; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Anular, Nudillo 3
        //Dedo Meñique, Nudillo 1
        var af10 = -10;
        console.log(obj.w[99], obj.w[100]);
        Rota3D.initRotate(obj.w[99], obj.w[100], af10 * Math.PI / 180);
        for (var i = 33; i <= 40; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 73; i <= 80; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Meñique, Nudillo 1
        //Dedo Meñique, Nudillo 2
        var af11 = -10;
        console.log(obj.w[101], obj.w[102]);
        Rota3D.initRotate(obj.w[101], obj.w[102], af11 * Math.PI / 180);
        for (var i = 34; i <= 39; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 74; i <= 79; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Meñique, Nudillo 2
        //Dedo Meñique, Nudillo 3
        var af12 = -8;
        console.log(obj.w[103], obj.w[104]);
        Rota3D.initRotate(obj.w[103], obj.w[104], af12 * Math.PI / 180);
        for (var i = 35; i <= 38; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 75; i <= 78; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Meñique, Nudillo 3
        //Dedo pulgar, Nudillo 1
        var af13 = -12;
        console.log(obj.w[105], obj.w[106]);
        Rota3D.initRotate(obj.w[105], obj.w[106], af13 * Math.PI / 180);
        for (var i = 3; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 43; i <= 48; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo pulgar, Nudillo 1
        //Dedo pulgar, Nudillo 2
        var af14 = -14;
        console.log(obj.w[107], obj.w[108]);
        Rota3D.initRotate(obj.w[107], obj.w[108], af14 * Math.PI / 180);
        for (var i = 4; i <= 7; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 44; i <= 47; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo pulgar, Nudillo 2
        countClickA--;
        countClicC++;
    }
}
//Cerrar Mano
function CerrarMano() {
    //Dedo Indice, Nudillo 1
    if (countClickA < maxClickA) {
        var af = 10;
        console.log(obj.w[81], obj.w[82]);
        Rota3D.initRotate(obj.w[81], obj.w[82], af * Math.PI / 180);
        for (var i = 9; i <= 16; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 49; i <= 56; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 1
        //Dedo Indice, Nudillo 2
        var af2 = 12;
        console.log(obj.w[83], obj.w[84]);
        Rota3D.initRotate(obj.w[83], obj.w[84], af2 * Math.PI / 180);
        for (var i = 10; i <= 15; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 50; i <= 55; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 2
        //Dedo Indice, Nudillo 3
        var af3 = 14;
        console.log(obj.w[85], obj.w[86]);
        Rota3D.initRotate(obj.w[85], obj.w[86], af3 * Math.PI / 180);
        for (var i = 11; i <= 14; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 51; i <= 54; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 3
        //Dedo Medio, Nudillo 1
        var af4 = 10;
        console.log(obj.w[87], obj.w[88]);
        Rota3D.initRotate(obj.w[87], obj.w[88], af4 * Math.PI / 180);
        for (var i = 17; i <= 24; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 57; i <= 64; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Medio, Nudillo 1
        //Dedo medio, Nudillo 2
        var af5 = 12;
        console.log(obj.w[89], obj.w[90]);
        Rota3D.initRotate(obj.w[89], obj.w[90], af5 * Math.PI / 180);
        for (var i = 18; i <= 23; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 58; i <= 63; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo medio, Nudillo 2
        //Dedo medio, Nudillo 3
        var af6 = 14;
        console.log(obj.w[91], obj.w[92]);
        Rota3D.initRotate(obj.w[91], obj.w[92], af6 * Math.PI / 180);
        for (var i = 19; i <= 22; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 59; i <= 62; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Indice, Nudillo 3
        //Dedo Anular, Nudillo 1
        var af7 = 10;
        console.log(obj.w[93], obj.w[94]);
        Rota3D.initRotate(obj.w[93], obj.w[94], af7 * Math.PI / 180);
        for (var i = 25; i <= 32; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 65; i <= 72; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Anular, Nudillo 1
        //Dedo Anular, Nudillo 2
        var af8 = 10;
        console.log(obj.w[95], obj.w[96]);
        Rota3D.initRotate(obj.w[95], obj.w[96], af8 * Math.PI / 180);
        for (var i = 26; i <= 31; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 66; i <= 71; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Anular, Nudillo 2
        //Dedo Anular, Nudillo 3
        var af9 = 12;
        console.log(obj.w[97], obj.w[98]);
        Rota3D.initRotate(obj.w[97], obj.w[98], af9 * Math.PI / 180);
        for (var i = 27; i <= 30; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 67; i <= 70; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Anular, Nudillo 3
        //Dedo Meñique, Nudillo 1
        var af10 = 10;
        console.log(obj.w[99], obj.w[100]);
        Rota3D.initRotate(obj.w[99], obj.w[100], af10 * Math.PI / 180);
        for (var i = 33; i <= 40; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 73; i <= 80; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Meñique, Nudillo 1
        //Dedo Meñique, Nudillo 2
        var af11 = 10;
        console.log(obj.w[101], obj.w[102]);
        Rota3D.initRotate(obj.w[101], obj.w[102], af11 * Math.PI / 180);
        for (var i = 34; i <= 39; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 74; i <= 79; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Meñique, Nudillo 2
        //Dedo Meñique, Nudillo 3
        var af12 = 8;
        console.log(obj.w[103], obj.w[104]);
        Rota3D.initRotate(obj.w[103], obj.w[104], af12 * Math.PI / 180);
        for (var i = 35; i <= 38; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 75; i <= 78; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo Meñique, Nudillo 3
        //Dedo pulgar, Nudillo 1
        var af13 = 12;
        console.log(obj.w[105], obj.w[106]);
        Rota3D.initRotate(obj.w[105], obj.w[106], af13 * Math.PI / 180);
        for (var i = 3; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 43; i <= 48; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo pulgar, Nudillo 1
        //Dedo pulgar, Nudillo 2
        var af14 = 14;
        console.log(obj.w[107], obj.w[108]);
        Rota3D.initRotate(obj.w[107], obj.w[108], af14 * Math.PI / 180);
        for (var i = 4; i <= 7; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        for (var i = 44; i <= 47; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        //Fin Dedo pulgar, Nudillo 2
        countClickA++;
        countClicC--;
    }
}
// Opciones de vista
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);
//movimiento de piezas
document.getElementById('AbrirMano').addEventListener('click', AbrirMano, false);
document.getElementById('CerrarMano').addEventListener('click', CerrarMano, false);
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
        vp(0, 0.1 * difY / 50, 1);
        Piy = Pfy;
        vp(0.1 * difX, 0 / 50, 1);
        Pix = Pfx;
        /*if( Piy>Pfy+1 ){
          phi += SensibilidadY;
          vp(0, 0.1*, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }
    
        if(Pfy>Piy+1){
          phi -= SensibilidadY;
          vp(0,-0.1, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }*/
        /*if (Pix > Pfx + 1) {
          theta += SensibilidadX;
          vp(0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }
            
        if (Pfx > Pix + 1) {
          theta -= SensibilidadX;
          vp(-0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }*/
    }
}
function noDraw() {
    flag = false;
}
canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);
