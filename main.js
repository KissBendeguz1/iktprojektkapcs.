

function loadfunc() {
  const sidemenu = document.getElementById("sidemenu")
  sidemenu.classList.add("notvisible")
} 

function menuchange() {
  const sidemenu = document.getElementById("sidemenu")
  console.log(sidemenu)
  sidemenu.classList.toggle("nonvisible")



}

const alertdiv = document.getElementById("alertdiv");
console.log(alertdiv.classList);

function alertfunc() {
  const alertdiv = document.getElementById("alertdiv");

  console.log(alertdiv.classList);
 if (alertdiv.classList.contains("alertVisible")) {
  alertdiv.classList.replace("alertVisible","alertNotVisible")
 }
  else {
    alertdiv.classList.replace("alertNotVisible","alertVisible")
  }
  
 }

 function alerthide() {
  alertdiv.classList.remove("alertVisible")
  alertdiv.classList.add("alertNotVisible")
  console.log(alertdiv.classList)

  
 }

 function alertshow() {
  alertdiv.classList.remove("alertNotVisible")
  alertdiv.classList.add("alertVisible")
  alertdiv.textContent = "Test alert!"
  console.log(alertdiv.classList)

  
 }

function bekuldes() {
  alerthide()
  alertdiv.classList.remove("succesform")
  alertdiv.classList.remove("succesform")
  alertdiv.textContent = ""
  const nameinput = document.getElementById("nameinput");
  nameinput.classList.remove("redborder")
  console.log(nameinput);
  const emailinput = document.getElementById("emailinput");
  emailinput.classList.remove("redborder")
  console.log(emailinput);
  const telinput = document.getElementById("telinput");
  telinput.classList.remove("redborder")
  console.log(telinput);
  const msginput = document.getElementById("msginput");
  msginput.classList.remove("redborder")
  console.log(msginput)
  var validRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/ ;
  var validTel = /^[0-9+() ]{9,14}$/;
  msginput.classList.remove("greenborder")
  nameinput.classList.remove("greenborder")
  telinput.classList.remove("greenborder")
  emailinput.classList.remove("greenborder")

  if (nameinput.value=="") {
    alertshow()
    alertdiv.textContent = "A név nincs kitöltve!"
    nameinput.classList.add("redborder")
    
  }
  else {
    console.log("A név ki van töltve")
    if (emailinput.value.match(validRegex)) {
      alerthide()
      alertdiv.textContent = ""
      console.log("Az email helyesen kitöltve")
      if (telinput.value.match(validTel)) {
        alerthide()
        alertdiv.textContent = ""
        console.log("telefon is helyes")
        if (msginput.value=="") {
          alertshow()
          alertdiv.textContent = "Üzenet/hiba mező nincs kitöltve"
          msginput.classList.add("redborder")
        }
        else {
          alertshow()
          alertdiv.classList.add("succesform")
          console.log("Űrlap kitöltve")
          alertdiv.textContent = "Válaszát sikeresen rögzítettük!"
          msginput.classList.add("greenborder")
          nameinput.classList.add("greenborder")
          telinput.classList.add("greenborder")
          emailinput.classList.add("greenborder")
        }
       }
       else {
        alertshow()
        alertdiv.textContent = "A telefonszám nincs kitöltve, vagy nem megfelelő. Figyelj a formátumra (0620 123 4567)" 
        telinput.classList.add("redborder")
        }

     }
     else {
      alertshow()
      alertdiv.textContent = "Az email cím nincs, vagy hibásan van kitöltve. figyelj, a @-ra, és a .-ra" 
      emailinput.classList.add("redborder")

      }
   }

  }

function emailbutton() {
  

  const emailmezo = document.getElementById("emailbutton")
    emailmezo.classList.toggle("nonvisible")
}

function telbutton() {
  

  const telmezo = document.getElementById("telbutton")
    telmezo.classList.toggle("nonvisible")
}


  

  

  


  
