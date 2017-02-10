var friendlyChat;

function Chat() {
    // Initialize Firebase

    var config = {
        apiKey: "AIzaSyBWcgwD75j0Qqvx_jOb51FVviK3iQOu4bg",
        authDomain: "mcrdigitalexperienceday.firebaseapp.com",
        databaseURL: "https://mcrdigitalexperienceday.firebaseio.com",
        storageBucket: "mcrdigitalexperienceday.appspot.com",
        messagingSenderId: "106124514758"
    };
    firebase.initializeApp(config);

    friendlyChat = new FriendlyChat();
    //Make sure that without calling listenForMessages we do not display any of the messages
    friendlyChat.shouldLoadMessages = false;
    //Stop button toggle
    friendlyChat.toggleButton = function(){};
}

Chat.prototype.sendMessage = function(){
  friendlyChat.saveMessage();
}

Chat.prototype.setMessageList = function($element){
  friendlyChat.messageList = $element.get(0);
}

Chat.prototype.setMessageInput = function($element){
  friendlyChat.messageInput = $element.get(0);
}

Chat.prototype.setSubmitButton = function($element){
  friendlyChat.submitButton = $element.get(0);
}

Chat.prototype.setSignInButton = function($element){
  friendlyChat.signInButton = $element.get(0);
}

Chat.prototype.setSignOutButton = function($element){
  friendlyChat.signOutButton = $element.get(0);
}

Chat.prototype.signIn = function(){
  friendlyChat.signIn();
}

Chat.prototype.signOut = function(){
  friendlyChat.signOut();
}

Chat.prototype.listenForMessages = function(){
  friendlyChat.shouldLoadMessages = true;
}
