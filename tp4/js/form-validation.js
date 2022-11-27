


var button1 = document.getElementById("button1");

button1.onclick = function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.querySelector("#map").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }


   // Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
   function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
  
    document.querySelector("#map").innerHTML = `<img src='${img_url}'>`;
  }
  
  // Au cas ou l'utilisateur refuse
  // Ou si une erreur arrive
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.querySelector("#map").innerHTML =
          "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.querySelector("#map").innerHTML =
          "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.querySelector("#map").innerHTML =
          "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.querySelector("#map").innerHTML = "An unknown error occurred.";
        break;
    }
  }



  function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + 1;
  }



  /*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function (_nom, _prénom, _date, _adresse, _mail) {
        var contact = {
          nom: _nom,
          prénom: _prénom,
          date: _date,
          adresse: _adresse,
          mail: _mail,
        };
        // ajout du contact à la liste
        contactList.push(contact);
        
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },

      showList: function(){
        for (var index in contactList) {
          console.log(contactList[index].name);
        }
      }
    };
  })();

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




function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
};

  function validate() {



    var myModal = new bootstrap.Modal(document.getElementById("myModal"));
    let n = document.getElementById("nom").value;
    let p = document.getElementById("prénom").value;
    let a = document.getElementById("adresse").value;
    let e = document.getElementById("mail").value;
    let da = document.getElementById("date").value;

    document.querySelector("table tbody").innerHTML =
    "<tr>" +
    "<th> Nom</th>" +
    "<th> Prénom</th>" +
    "<th> Date de naissance</th>" +
    "<th> Adresse</th>" +
    "<th> Mail</th>" +
    "</tr>" ;

    if (n.length < 5 || p.length < 5 || a.length < 5 || validateEmail(e) == false || testDate(da) == false) {

        document.querySelector(".modal-title").textContent = "Erreur";
        document.querySelector(".modal-body").textContent = "Remplir tous les champs";
        myModal.show();

    } else {
      let _nom = document.getElementById("nom").value;
      let _prénom = document.getElementById("prénom").value;
      let _adresse = document.getElementById("adresse").value;
      let _mail = document.getElementById("mail").value;
      let _date = document.getElementById("date").value;

        contactStore.add(_nom, _prénom, _date, _adresse, _mail);
       /* for (var index in contactList) {
            console.log(contactList[index].nom);
          }*/
          contactStore.showList();
          document.querySelector("table tbody").innerHTML =
          document.querySelector("table tbody").innerHTML +
          "<tr><td>" +
          n +
          "</td><td>" +
          p +
          "</td><td>" +
           
          da +
          "</td><td>" +
          a +
          "</td><td>" +
          
          e +
          "</td></tr>";

        // CODE à compléter pour insérer les autres données 
    }


  }