// Initialize Firebase
var config = {
    apiKey: "AIzaSyB7wo51xy2h4_WGXJ_K7SPN4In5R6tb_-A",
    authDomain: "projecthamidasif-83639.firebaseapp.com",
    databaseURL: "https://projecthamidasif-83639.firebaseio.com",
    projectId: "projecthamidasif-83639",
    storageBucket: "projecthamidasif-83639.appspot.com",
    messagingSenderId: "146110704053"
};
firebase.initializeApp(config);

var dbRef = firebase.database();
var dataNode = dbRef.ref('oralHealthData');

//Login function
function login() {
    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (value) {
        var id = value.user.uid;
        window.location.replace("home.html#"+email);
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}

//Function to log out the signed in user
function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        window.location.href = "index.html";
      })
      .catch(function (error) {
        console.log(error);
      });
}

//Function to check whether the user is logged in or not
function validateUser() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        window.location.href = "index.html";
      }
    });
}

//Function to submit form data to database
function submitData() {

    var identificationNo = $('#identificationNo').val();
    var date = $('#date').val();
    var name = $('#name').val();
    var dateOfBirth = $('#dateOfBirth').val();
    var ageInYears = $('#ageInYears').val();
    var yearsInSchool = $('#yearsInSchool').val();
    var sex = $('input[name=gender]:checked').val(); 
    var ethnicGroup = $('#ethnicGroup').val();
    var otherGroup = $('#otherGroup').val();
    var occupation = $('#occupation').val();
    var location = $('input[name=location]:checked').val();
    var community = $('#community').val();
    var enamelFluorosis = $('#enamelFluorosis').val();
    var interventionUrgency = $('#interventionUrgency').val();
  
    var otherGroup = "test";
    var community = "test";
    
    dataNode.child(identificationNo).set({
      "identificationNo": identificationNo,
      "date": date,
      "name": name,
      "dateOfBirth": dateOfBirth,
      "ageInYears": ageInYears,
      "yearsInSchool": yearsInSchool,
      "sex": sex,
      "ethnicGroup": ethnicGroup,
      "otherGroup": otherGroup,
      "occupation": occupation,
      "location": location,
      "community": community,
      "enamelFluorosis": enamelFluorosis,
      "interventionUrgency": interventionUrgency,
      dentalErosion: {
        severity: 1,
        noOfTeeth: 30
      },
      dentalTrauma: {
        status: 1,
        noOfTeeth: 30
      },
      denititionStatus: {
        crown: 1,
        crown: 1
      },
      periodontalStatus: {
        crown: 1,
        crown: 1
      },
      denititionStatusByToothSurface: {
        crown: 1,
        crown: 1
      },
    })
  }