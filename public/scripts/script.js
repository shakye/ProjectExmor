// Initialize Firebase
var email ="";
var entries = [];

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
<<<<<<< HEAD
var userNode = dbRef.ref('users');


var userId;

//Login function
function login() {
  var email = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(function (value) {
    var id = value.user.uid;
    userId = id;
    window.location.replace("home.html#" + email+value.user.uid);
    console.log(id);
    alert(id);
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
function loginValidation() {
  var text = window.location.hash.substring(1);
  if (text == "") {
    window.location.replace("404.html")
  }


  $( document ).ready(function() {
    console.log( "testing.." );
    var user = firebase.auth().currentUser;
    console.log(userId);
  });

=======
//Login function
function login() {
    this.email= document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(this.email, password).then(function (value) {
        var id = value.user.uid;
        window.location.replace("home.html");
    }).catch(function(error) {
        document.getElementById("loginStat").style.display = "block";
        // window.location.replace("404.html");
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}

function getUsername(){
  this.email = firebase.getAuth().password.email;
  window.alert("hello");
}

function returnHome() {
    window.location.replace("home.html");
}

function loginValidation() {
    var text = window.location.hash.substring(1);
    if (text == "") {
        window.location.replace("404.html")
    }
>>>>>>> master
}

//Function to log out the signed in user
function logout() {
<<<<<<< HEAD
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
=======
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
>>>>>>> master
}

function randomGen() {
    return Math.floor(Math.random() * 1000) + 1;
}

//Function to check whether the user is logged in or not
function validateUser() {
<<<<<<< HEAD
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      window.location.href = "index.html";
    }
  });
}


function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = yyyy + '-' + mm + '-' + dd;
  return today;
=======
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "index.html";
        }
    });
>>>>>>> master
}

//Function to submit form data to database
function submitData() {
<<<<<<< HEAD
  var identificationNo = randomGen();
  var date = getCurrentDate();
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
    tableData[i] = $('#tableData' + i).val();
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
      condition_1: condition1,
      condition_2: condition2,
      condition_3: condition3,
      location_1: location1,
      location_2: location2,
      location_3: location3
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

function registerUser() {
  
  var name = $('#username').val();
  var email = $('#useremail').val();
  var password = $('#password').val();
  var cpassword = $('#cpassword').val();
  var accountType = $('#accountType').val();

  // Register a new user
  const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
  promise
    .then(user =>
      userNode.child(user.user.uid).set({
        "uid":user.user.uid,
        "email":user.user.email,
        "accountType":accountType,
        "name":name
      })
      )
    .catch(e   => console.log(e.message));
=======
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
    var location = $('#location').find(":selected").val();
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
    for (i = 0; i < 184; i++) {
        tableData.push($('#tableData' + (i+1)).val());
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
      tableDataArray : {
        crown: tableData
      },
    })
}

//getEntries();

function getEntries(isEntries) {

    var dbRef = firebase.database().ref('oralHealthData');
    dbRef.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            entries.push(childSnapshot.val());
        });
        console.log("SIZE: " + entries.length);

        if (isEntries) {
            populateTable();
        } else {
            readData();
        }

    });
}

//Retrieves data from database
function readData() {
    //var userId = firebase.auth().currentUser.uid;

    var childData = entries[index - 1];
    var identificationNo = childData.identificationNo;

    if (childData != null) {
        var date = childData.date;
        var name = childData.name;
        var dateOfBirth = childData.dateOfBirth;
        var ageInYears = childData.ageInYears;
        var yearsInSchool = childData.yearsInSchool;
        var sex = childData.sex;
        var ethnicGroup = childData.ethnicGroup;
        var otherGroup = childData.otherGroup;
        var occupation = childData.occupation;
        var location = childData.location;
        var community = childData.community;
        var enamelFluorosis = childData.enamelFluorosis;
        var interventionUrgency = childData.interventionUrgency;
        var dentalErosion = childData.dentalErosion;
        var dentalTrauma = childData.dentalTrauma;
        var denititionStatus = childData.denititionStatus;
        var periodontalStatus = childData.periodontalStatus;
        var denititionStatusByToothSurface = childData.denititionStatusByToothSurface;
        var oralMucoSal = childData.oralMucosal;
        var tableDataArray = childData.tableDataArray.crown;

        document.getElementById("name").value = name;
        document.getElementById("name").disabled = true;
        if (sex == "male"){
            document.getElementById("male").checked = true;
        }else {
            document.getElementById("female").checked = true;
        }
        document.getElementById("dateOfBirth").value = dateOfBirth;
        document.getElementById("ageInYears").value = ageInYears;
        document.getElementById("yearsInSchool").value = yearsInSchool;
        document.getElementById("occupation").value = occupation;
        document.getElementById("ethnicGroup").value = ethnicGroup;
        document.getElementById("location").value = location;
        document.getElementById("enamelFluorosis").value = enamelFluorosis;
        document.getElementById("interventionUrgency").value = interventionUrgency;
        document.getElementById("dentalErosionNo").value = dentalErosion.noOfTeeth;
        document.getElementById("dentalErosionSever").value = dentalErosion.severity;
        document.getElementById("dentalTraumaNo").value = dentalTrauma.noOfTeeth;
        document.getElementById("dentalTraumaStat").value = dentalTrauma.status;
        document.getElementById("condition1").value = oralMucoSal.condition_1;
        document.getElementById("condition2").value = oralMucoSal.condition_2;
        document.getElementById("condition3").value = oralMucoSal.condition_3;
        document.getElementById("location1").value = oralMucoSal.location_1;
        document.getElementById("location2").value = oralMucoSal.location_2;
        document.getElementById("location3").value = oralMucoSal.location_3;
        document.getElementById("otherData").value = otherGroup;


        for (var x = 0; x <= tableDataArray.length; x++) {
            var element = document.getElementById("tableData" + (x + 1));
            var value = tableDataArray[x];
            if (element != null)
                element.value = tableDataArray[x];

            console.log((x + 1) + " => " + x);
        }

        disableFields();


    }
}

function populateTable() {
    var table = document.getElementById("usertable");

    $("#usertable").empty();

    table.classList.add("table");
    table.classList.add("table-hover");

    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<b>Name</b>";
    cell2.innerHTML = "<b>Identification Number</b>";
    row.id = "headerid";

    for (i = 0; i < entries.length; i++) {

        var childData = entries[i];

        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = childData.name;
        cell2.innerHTML = childData.identificationNo;
    }

    onClickListener();
}

function onClickListener() {
    $(document).ready(function () {

        $('#usertable tr').not('#headerid').click(function () {
            var name = "hi";
            if (name) {
                localStorage.setItem("index", $(this).index());
                window.location.href = "viewentry.html";
                //alert($(this).index());
            }
        });

    });
}

function disableFields() {
    var form = document.getElementById("viewDataForm");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
    }
>>>>>>> master
}