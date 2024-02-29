const firebaseConfig = {
    apiKey: "AIzaSyCpIQjIzCvmbZ4U0kE8WjhvyHLrJtZmVzo",
    authDomain: "kwiteer-cefb3.firebaseapp.com",
    databaseURL: "https://kwiteer-cefb3-default-rtdb.firebaseio.com",
    projectId: "kwiteer-cefb3",
    storageBucket: "kwiteer-cefb3.appspot.com",
    messagingSenderId: "266867111737",
    appId: "1:266867111737:web:b711a688133aad05eb9ae8"
  };

  firebase.initializeApp(firebaseConfig);
  

  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")

  function enviar(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg").value=""
  }