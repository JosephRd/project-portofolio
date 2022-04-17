var firebaseConfig = {
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
var db = firebase.firestore();

const isiContact = document.querySelector("#list-group-item");
// const form = document.querySelector("#add-contact-form");

function renderContact(doc) {
  let li = document.createElement("ul");
  let name = document.createElement("li");
  let email = document.createElement("li");
  let number = document.createElement("li");
  let comment = document.createElement("li");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  email.textContent = doc.data().email;
  number.textContent = doc.data().number;
  comment.textContent = doc.data().comment;

  li.appendChild(name);
  li.appendChild(email);
  li.appendChild(number);
  li.appendChild(comment);

  isiContact.appendChild(li);
}

db.collection("contact-form")
  .get()
  .then((response) => {
    response.docs.forEach((doc) => {
      renderContact(doc);
    });
  });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   db.collection("contact-form").add({
//     name: form.name.value,
//     email: form.email.value,
//     number: form.number.value,
//     comment: form.city.value,
//   });
// });
