/********************************************/
/******************  HOME  ******************/
/********************************************/

function openc(){
  window.location.href = "cinderella.html";
}

function opens(){
  window.location.href = "stitch.html";
}

function openr(){
  window.location.href = "rapunzel.html";
}

function openm(){
  window.location.href = "mushu.html";
}

function openk(){
  window.location.href = "kuzco.html";
}

function miplaysong(){
  document.getElementById("misong").play();
}

function mipausesong(){
  document.getElementById("misong").pause();
}


/*********************************************************/
/******************  CHARACTERS' PAGES  ******************/
/*********************************************************/

function checkstitch(){
  var sanswers = 15;

  let dict0 = document.getElementById("dictionary0").value;
  if (dict0=="Here" && document.getElementById("hagata").checked){
    sanswers--;
  }

  let dict1 = document.getElementById("dictionary1").value;
  if (dict1=="Thanks"){
    sanswers--;
  }

  let dict2 = document.getElementById("dictionary2").value;
  if (dict2=="May I be destructive?" && document.getElementById("kata").checked){
    sanswers--;
  }

  let dict3 = document.getElementById("dictionary3").value;
  if (dict3=="It's your fault"){
    sanswers--;
  }

  let dict4 = document.getElementById("dictionary4").value;
  if (dict4=="Computer"){
    sanswers--;
  }

  let dict5 = document.getElementById("dictionary5").value;
  if (dict5=="I don't like water" && document.getElementById("dunga").checked){
    sanswers--;
  }

  let dict6 = document.getElementById("dictionary6").value;
  if (dict6=="Sorry" && document.getElementById("soka").checked){
    sanswers--;
  }

  let dict7 = document.getElementById("dictionary7").value;
  if (dict7=="What?" && document.getElementById("gaba").checked){
    sanswers--;
  }

  let dict8 = document.getElementById("dictionary8").value;
  if (dict8=="Come on" && document.getElementById("iki").checked){
    sanswers--;
  }

  let dict9 = document.getElementById("dictionary9").value;
  if (dict9=="Alright/okay/okey-dokey (acknowledgement)" && document.getElementById("okie").checked){
    sanswers--;
  }

  let dict10 = document.getElementById("dictionary10").value;
  if (dict10=="How embarrassing"){
    sanswers--;
  }

  let dict11 = document.getElementById("dictionary11").value;
  if (dict11=="Gimme" && document.getElementById("miki").checked){
    sanswers--;
  }

  let dict12 = document.getElementById("dictionary12").value;
  if (dict12=="Me/I/I'm" && document.getElementById("meega").checked){
    sanswers--;
  }

  let dict13 = document.getElementById("dictionary13").value;
  if (dict13=="Cereal"){
    sanswers--;
  }

  let dict14 = document.getElementById("dictionary14").value;
  if (dict14=="No/don't want to" && document.getElementById("naga").checked){
    sanswers--;
  }

  if(sanswers == 0){
    document.getElementById("stitchresult").innerHTML = "Your answers are correct!"; 
    document.getElementById("stitchresult").style.background="#56F546";
    document.getElementById("torapunzel").style.display = "block";
  }
  else{
    document.getElementById("stitchresult").innerHTML = "Number of mistakes: " + sanswers + "<br><br>" + "Correct them and click to check again!";
    document.getElementById("stitchresult").style.background="#202028";
  }
  
  
}

function checkmushu(){
  var manswers = 21

  if(document.getElementById("daughters").checked){
    manswers--;
  }

  if(document.getElementById("math").checked == false){
    manswers--;
  }
  if(document.getElementById("soldiers").checked){
    manswers--;
  }
  if(document.getElementById("man").checked){
    manswers--;
  }
  if(document.getElementById("cpr").checked == false){
    manswers--;
  }

  if(document.getElementById("lion").checked == false){
    manswers--;
  }
  if(document.getElementById("within").checked){
    manswers--;
  }
  if(document.getElementById("findcenter").checked){
    manswers--;
  }
  if(document.getElementById("bebrave").checked == false){
    manswers--;
  }
  if(document.getElementById("beaman").checked){
    manswers--;
  }
  if(document.getElementById("ocean").checked == false){
    manswers--;
  }
  if(document.getElementById("forest").checked){
    manswers--;
  }

  let text0 = document.getElementById("swift").value;
  let text1 = document.getElementById("river").value;
  let text2 = document.getElementById("force").value;
  let text3 = document.getElementById("typhoon").value;
  let text4 = document.getElementById("strength").value;
  let text5 = document.getElementById("fire").value;
  let text6 = document.getElementById("mysterious").value;
  let text7 = document.getElementById("moon").value;
  if(text0 == "swift"){
    manswers--;
  }
  if(text1 == "river"){
    manswers--;
  }
  if(text2 == "force"){
    manswers--;
  }
  if(text3 == "typhoon"){
    manswers--;
  }
  if(text4 == "strength"){
    manswers--;
  }
  if(text5 == "fire"){
    manswers--;
  }
  if(text6 == "Mysterious"){
    manswers--;
  }
  if(text7 == "moon"){
    manswers--;
  }

  if(document.getElementById("order").checked){
    manswers--;
  }
  
  if(manswers == 0){
    document.getElementById("mushuresult").innerHTML = "Your answers are correct!";
    document.getElementById("mushuresult").style.background="#84B048";
    document.getElementById("tolast").style.display = "block";
  }
  else{
    document.getElementById("mushuresult").innerHTML = "Number of mistakes: " + manswers + "<br><br>" + "Correct them and click to check again!";
    document.getElementById("mushuresult").style.color="#26326A";
    document.getElementById("mlisten").style.display = "block";
  }

}

function mplaysong(){
  document.getElementById("msong").play();
  document.getElementById("mpause").style.display = "block";
}

function mpausesong(){
  document.getElementById("msong").pause();
}

function help(){
  document.getElementById("choose").style.display = "block";
  document.getElementById("helphim").style.display = "block";
  document.getElementById("potions").style.display = "block";
  document.getElementById("llama").style.display = "block";
  document.getElementById("human").style.display = "none";
}

function potion0(){
  document.getElementById("llama").style.display = "block";
  document.getElementById("bird").style.display = "none";
  document.getElementById("turtle").style.display = "none";
  document.getElementById("whale").style.display = "none";
  document.getElementById("human").style.display = "none";
  document.getElementById("potion0").style.display = "none";
}

function potion1(){
  document.getElementById("bird").style.display = "block";
  document.getElementById("llama").style.display = "none";
  document.getElementById("turtle").style.display = "none";
  document.getElementById("whale").style.display = "none";
  document.getElementById("human").style.display = "none";
  document.getElementById("potion1").style.display = "none";
}

function potion2(){
  document.getElementById("turtle").style.display = "block";
  document.getElementById("llama").style.display = "none";
  document.getElementById("bird").style.display = "none";
  document.getElementById("whale").style.display = "none";
  document.getElementById("human").style.display = "none";
  document.getElementById("potion2").style.display = "none";
}

function potion3(){
  document.getElementById("human").style.display = "block";
  document.getElementById("helphim").style.display = "none";
  document.getElementById("potions").style.display = "none";
  document.getElementById("choose").style.display = "none";
}

function potion4(){
  document.getElementById("whale").style.display = "block";
  document.getElementById("llama").style.display = "none";
  document.getElementById("bird").style.display = "none";
  document.getElementById("turtle").style.display = "none";
  document.getElementById("human").style.display = "none";
  document.getElementById("potion4").style.display = "none";
}
