//handle authentication
var config = {
    apiKey: "AIzaSyBdKKNfe0cwgREyNhcvn7rxBG2-SxvRGh4",
    authDomain: "updawg-e1145.firebaseapp.com",
    databaseURL: "https://updawg-e1145.firebaseio.com",
    projectId: "updawg-e1145",
    storageBucket: "updawg-e1145.appspot.com",
    messagingSenderId: "23565913569"
  };
  firebase.initializeApp(config);
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        displayUserData(user.uid);
      
    } else {
      // User is signed out.
    }
  });


function displayUserData(uid){
    $.get('/api/profiles/'+uid,function(data){
        //insert into display things
        //data returns an array
        $(".userPic").attr("src",data[0].picture);
        $(".userName").html(data[0].firstName +" "+ data[0].lastName)
        $(".bio").html(data[0].bio);
        $(".conditions").html(data[0].conditions);
        
    })
}
