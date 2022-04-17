const firebaseConfig = {
  apiKey: "AIzaSyCeylGPbqwlVtdM67CEBea8busOaNKrS3s",
  authDomain: "portofolio-joseph.firebaseapp.com",
  projectId: "portofolio-joseph",
  storageBucket: "portofolio-joseph.appspot.com",
  messagingSenderId: "160903666895",
  appId: "1:160903666895:web:38c9592ee37ce8c6ae6bba",
  measurementId: "G-TX1GDJ0ME0",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitButton = document.querySelector("#submit");

// let userName = document.getElementById("user_name");
// let userEmail = document.getElementById("user_email");
// let userPhoneNumber = document.getElementById("user_number");
// let userComment = document.getElementById("user_comment");

const db = firestore.collection("contact-form");

var successMsg = document.getElementById("success");

submitButton.addEventListener("click", function () {
  let userName = document.getElementById("user_name").value;
  let userEmail = document.getElementById("user_email").value;
  let userPhoneNumber = document.getElementById("user_number").value;
  let userComment = document.getElementById("user_comment").value;

  db.doc()
    .set({
      Name: userName,
      Email: userEmail,
      PhoneNumber: userPhoneNumber,
      Comment: userComment,
    })
    .then(function () {
      console.log("Data Saved");
      successMsg.innerHTML = "Successful!";
      setTimeout(function () {
        document.getElementById("success").style.display = "none";
      }, 3000);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function reset() {
  document.getElementById("contactForm").reset();
  //   document.getElementById("user_email").reset();
  //   document.getElementById("user_number").reset();
  //   document.getElementById("user_comment").reset();
  //   document.getElementById("success").style.display = "block";

  //   setTimeout(function () {
  //     document.getElementById("success").style.display = "none";
  //   }, 3000);
}
