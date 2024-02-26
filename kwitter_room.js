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
  
  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Bem-Vindo (A) , "+user_name+" !";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose:"Sala adicionada"
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}

function getData(){
  firebase.database().ref("/").on(
    "value",function (snapshot){
      document.getElementById("output").innerHTML="";
      snapshot.forEach(function(childSnapshot){
        childKey=childSnapshot.key;
        Room_names=childKey;
        console.log("Nome da sala"+ Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
      });
    }
  );
}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name)
  window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
