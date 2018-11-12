// Initialize Firebase
var email ="";

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
    this.email= document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(this.email, password).then(function (value) {
        var id = value.user.uid;
        window.location.replace("home.html");
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}
function getUsername(){
  this.email = firebase.getAuth().password.email;
  window.alert("hello");
}

function returnHome(){
  window.location.replace("home.html");
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
function randomGen() {
  return Math.floor(Math.random() * 1000) + 1;
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
    var identificationNo = randomGen();
    // $('#identificationNo').val();
    var date = "$('#date').val();";
    var name = $('#name').val();
    var dateOfBirth = $('#dateOfBirth').val();
    var ageInYears = $('#ageInYears').val();
    var yearsInSchool = $('#yearsInSchool').val();
    var sex = $('input[name=gender]:checked').val(); 
    var ethnicGroup = $('#ethnicGroup').val();
    var otherGroup = $('#otherGroup').val();
    var occupation = $('#occupation').val();
    var location = "aeqwe";
    // $('input[name=location]:checked').val();
    // var community = $('#community').val();
    var enamelFluorosis = $('#enamelFluorosis').val();
    var interventionUrgency = $('#interventionUrgency').val();
    var dentalErosionSever = $('#dentalErosionSever').val();
    var dentalErosionNo = $('#dentalErosionNo').val();
    var dentalTraumaStat = $('#dentalTraumaStat').val();
    var dentalTraumaNo = $('#dentalTraumaNo').val();
    var condition1 = $('#condition1').val();
    var condition2 = $('#condition2').val();
    var condition3 = $('#condition3').val();
    var location1 = $('#location1').val();
    var location2 = $('#location2').val();
    var location3 = $('#location3').val(); 
    var tableData = [];
    var i;
    for (i = 1; i < 185; i++) {
      tableData[i] = $('#tableData'+i).val();
    } 
  
    dataNode.child(identificationNo).set({
      "identificationNo": identificationNo,
      "date": date,
      "name": name,
      "dateOfBirth": dateOfBirth,
      "ageInYears": ageInYears,
      "yearsInSchool": yearsInSchool,
      "sex": sex,
      "ethnicGroup": ethnicGroup,
      // "otherGroup": otherGroup,
      "occupation": occupation,
      "location": location,
      // "community": community,
      "enamelFluorosis": enamelFluorosis,
      "interventionUrgency": interventionUrgency,
      dentalErosion: {
        severity: dentalErosionSever,
        noOfTeeth: dentalErosionNo
      },
      dentalTrauma: {
        status: dentalTraumaStat,
        noOfTeeth: dentalTraumaNo
      },
      oralMucosal: {
        condition_1 :condition1,
        condition_2 :condition2,
        condition_3 :condition3,
        location_1 :location1,
        location_2 :location2,
        location_3 :location3
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