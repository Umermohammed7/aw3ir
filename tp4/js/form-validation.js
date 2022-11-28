





  function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + 1;
  }



 
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
          `<tr>
            <td>${n}</td>
            <td>${p}</td>
            <td>${_date}</td>
            <td><a href='https://maps.google.com/maps?q=${_adresse}'>${_adresse}</a></td>
            <td><a href='mailto:${_mail}'>${_mail}</a></td>
            
          </tr>`;

        // CODE à compléter pour insérer les autres données 
    }


  }