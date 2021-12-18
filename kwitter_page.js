const firebaseConfig = {
      apiKey: "AIzaSyCVc6FuBS6yPqWlAWD5BVUPzjN-s7A51K0",
      authDomain: "kwitter-final-fa66d.firebaseapp.com",
      databaseURL: "https://kwitter-final-fa66d-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-fa66d",
      storageBucket: "kwitter-final-fa66d.appspot.com",
      messagingSenderId: "576066030591",
      appId: "1:576066030591:web:6815f69a4ecaddf4cdf5ca"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like:0
          });
          document.getElementById("msg").value = "";
      
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value" + like + " onclick='updateLike(this.id)'>" ;
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button> <hr>";;
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row; 
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("Clicked on the like button- " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
