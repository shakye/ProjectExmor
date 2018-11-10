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