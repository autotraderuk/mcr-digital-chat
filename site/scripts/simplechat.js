
var friendlyChat;

function Chat() {
    friendlyChat = new FriendlyChat();
    //Make sure that without calling listenForMessages we do not display any of the messages
    friendlyChat.shouldLoadMessages = false;
    //Stop button toggle
    friendlyChat.toggleButton = function(){};
}

Chat.prototype.sendMessage = function(){
  friendlyChat.saveMessage();
}

Chat.prototype.setMessageList = function(element){
  friendlyChat.messageList = element;
}

Chat.prototype.setMessageForm = function(element){
  friendlyChat.messageForm = element;
}

Chat.prototype.setMessageInput = function(element){
  friendlyChat.messageInput = element;
}

Chat.prototype.setSubmitButton = function(element){
  friendlyChat.submitButton = element;
}

Chat.prototype.setSignInButton = function(element){
  friendlyChat.signInButton = element;
}

Chat.prototype.setSignOutButton = function(element){
  friendlyChat.signOutButton = element;
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
