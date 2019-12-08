window.onload = function(){
  var newName = document.getElementById('user_name_input'),
      originalName = document.getElementById('user_name');

  var newEmail = document.getElementById('user_email_input'),
      originalEmail = document.getElementById('user_email');

  var newSex = document.getElementById('user_sex_input'),
      originalSex = document.getElementById('user_sex');

  var newSchoolYear = document.getElementById('user_schoolyear_input'),
      originalSchoolYear = document.getElementById('user_schoolyear');

  var newMajor = document.getElementById('user_major_input'),
      originalMajor = document.getElementById('user_major');

  var newAboutMe = document.getElementById('user_aboutme_input'),
      originalAboutMe = document.getElementById('user_aboutme');

  var submit = document.getElementById("submitbutton");

  submit.onclick = function(e){
    if (data-error=="Email address is invalid"){
      break;
    }
    else {
      if (newName.value != ""){
        replaceName(newName.value);
      }
      if (newEmail.value != ""){
        replaceEmail(newEmail.value);
      }
      if (newMajor.value != ""){
        replaceMajor(newMajor.value);
      }
      if (newAboutMe.value != ""){
        replaceAboutMe(newAboutMe.value);
      }
      replaceSex(newSex.value);
      replaceSchoolYear(newSchoolYear.value);
      e.preventDefault();

      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
  };

  var replaceName = function(userInput) {
      return originalName.innerHTML = newName.value;
  };
  var replaceEmail = function(userInput) {
      return originalEmail.innerHTML = newEmail.value;
  };
  var replaceSex = function(userInput) {
      return originalSex.innerHTML = newSex.value;
  };
  var replaceSchoolYear = function(userInput) {
      return originalSchoolYear.innerHTML = newSchoolYear.value;
  };
  var replaceMajor = function(userInput) {
      return originalMajor.innerHTML = newMajor.value;
  };
  var replaceAboutMe = function(userInput) {
      return originalAboutMe.innerHTML = newAboutMe.value;
  };
};
