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
