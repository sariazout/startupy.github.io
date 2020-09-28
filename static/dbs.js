var buttonSubmit = document.getElementById('submitButton');

window.onload = function () {
    buttonSubmit.addEventListener('click', storeData);
}

function storeData() {
    console.log('data stored');
}


// function storeData() {
//      // Your web app's Firebase configuration
//      var firebaseConfig = {
//         apiKey: "AIzaSyCsLaobdVE3CH7fxFJRD0Rc5Oa6osblBqA",
//         authDomain: "startupy-14c86.firebaseapp.com",
//         databaseURL: "https://startupy-14c86.firebaseio.com",
//         projectId: "startupy-14c86",
//         storageBucket: "startupy-14c86.appspot.com",
//         messagingSenderId: "233793212754",
//         appId: "1:233793212754:web:ac0bd9ec03eea634836a8b"
//       };
//       // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     let db = firebase.firestore();
//     let dates = new Date();
//     let emailuse = document.getElementById("email").value;
//     let name = emailuse.match(/^([^@]*)@/)[1];
//     let idate = dates.getTime();
//     db.collection("emails").doc(name).set({
//         id: parseInt(idate),
//         email: emailuse
//     })
//         .then(function () {
//             console.log("Doc successful");
//         })
//         .catch(function (error) {
//             console.error("Error writing doc", error);
//         });
// }

