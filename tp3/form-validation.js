

/* let dateNaissance = new Date(2018, 8, 22); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
 let dateNaissanceTimestamp = dateNaissance.getTime();
 let nowTimestamp = Date.now()
 */
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.show();

//var button = new bootstrap.button(document.getElementById('button'));

function testDate() {

    let msg;
    let mtn = new Date();

    let m = new Date(document.querySelector("#date").value);

    if (m > mtn) {

        msg = false;
    } else {
        msg = true;
    }

    return msg;

}




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};




function test() {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));
    let n = document.getElementById("nom").value;
    let p = document.getElementById("prénom").value;
    let a = document.getElementById("adresse").value;
    let e = document.getElementById("email").value;
    let da = document.getElementById("date").value;

    myModal.show();

    if (n.length < 5 || p.length < 5 || a.length < 5 || validateEmail(e) == false || testDate(da) == false) {

        document.querySelector(".modal-title").textContent = "Erreur";
        document.querySelector(".modal-body").textContent = "Remplir tous les champs";
        myModal.show();

    } else {

        document.querySelector(".modal-title").textContent = "Bienvenue " + p + " " + n;
        document.querySelector(".modal-body").innerHTML = `Vous êtes né le ${da} et vous habiter à
         <a href='https://maps.google.com/maps?q=${a}'>
         <img style="max-width: 100%;" src='https://maps.googleapis.com/maps/api/staticmap?markers=${a}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' > ${a} </a>`;
        myModal.show();
    }

};






















    // Y mettre le code Javascript pour valider tous les champs du formulaire



/*
   if (document.getElementById("nom").value.length < 1 || document.getElementById("prénom").value.length < 1
       || document.getElementById("adresse").value.length < 1) {

       document.getElementById("exampleModalLabel").innerHTML = "Erreur";
       document.getElementById("modal-contenu").innerHTML = "Tous les champs doivent être remplis";
       myModal.show();

   }

   // document.getElementById("email").value.length < 5

   else if (dateNaissance > nowTimestamp) {

       document.getElementById('exampleModalLabel').innerHTML = "Erreur";
       document.getElementById('modal-contenu').innerHTML = "La date de naissance ne peut pas etre dans le futur";
       myModal.show();

   }

   function validateEmail(email) {
       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase());
   }



};


*/





