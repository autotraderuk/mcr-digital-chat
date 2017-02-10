
# Setup

Before we can do any coding we need to get the base code and get the application up and running.
First off you will need to create a github account if you don't already have one.

https://github.com/
 
Next you will need to Fork this repository. 
Go to the top right of this page and hit the Fork button, this should create a copy of this code in your own repository.
Next click on the clone/download button and copy the url.
There are two ways to complete the cloning of the repository, using the command line or the IDE.

## Using the url with the IDE:

For the rest of what follows we will be editing the code within the IDE (integrated developemnt environment) Intellij.
We can download the code directly into Intellij now.

Open Intellij and then in the modal that pops up select **Check out from version control** and then **GitHub**


![alt tag](https://github.atcloud.io/storage/user/28/files/ebe48860-ef9b-11e6-9ebd-12010cfe628b)

Select the clone option. Follow the wizard to create the project.

We want to **Create project from existing sources** follow the wizard through and then finish, that should open up the application.

Now we can run and build the project from the command line.

Navigate to this folder
 
    cd chat/

And build the application

    npm install

And finally run it

    npm start
 
 Follow this link : http://localhost:8082 you should see that old classic Hello World!
 


## Using the url with the command line:


    git clone https://github.com/Polly-Caldwell/chat.git
 
 This should've created a folder called chat. 
 
 Now navigate to this folder
 
    cd chat/

And build the application

    npm install

And finally run it

    npm start
 
 Follow this link : http://localhost:8082 you should see that old classic Hello World!
 
 For the rest of what follows we will be editing the code within the IDE (integrated developemnt environment) Intellij.
 Open Intellij and then select open on the right hand side, this should open up the project.
 
 We will now open this using the IDE (integrated developemnt environment) Intellij. 
 
 

#Session one


This first session is aimed at getting you going, we will put a few elements on the page and have a look at the pages structure. 




The three main building blocks to a web page are [html](http://www.w3schools.com/html/),  [css](http://www.w3schools.com/css/) and [JavaScript](http://www.w3schools.com/js/). We'll start by looking at these. 

We will be coding within the index.html page in the application. This page acts as the base of our application and is the page we hit when we naviagte to the root of the project : http://localhost:8082/

Let's add a button that changes the title to say hello to you!
First the html button

```html
<button id="change-name" onclick="myFunction()">Try it</button>
```

And now a JavaScript function that triggers a prompt for you to enter your name into.

```html
<script>

  function myFunction() {
        var person = prompt("Please enter your name", "Batman");
        if (person != null) {
            document.getElementById("my-name").innerHTML = person;
        }
 }

</script>

```

This JavaScript function manipulates the DOM putting your name into the title element.

Look at this function and make sure you get what it is doing. 

Now lets add in some css. Pick a colour from the [colour picker](http://www.w3schools.com/html/) can you modify the above function to change the colour of your name to an inputted colour? 

Hint: The code is below if you're struggling.





```html
<script>

  function myFunction() {
        var colour = prompt("Please enter your favourite colour", "Pink");
        if (colour != null) {
            document.getElementById("my-name").style.color = colour;
        }
 }

</script>

```

Can you add another elemenet onto the page and change the value in that?


##JQuery

JQuery is a powerful javaScript libary that we will be using as it provides several functions to do DOM manipulation with.
So rather than us having to write the JavaScript functions we can use a JQuery function.

We can add JQuery to our application by including the following script tag into the index.html page.

```
  <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
```
Now we can use JQuery to **manipulate the DOM** 

Lets have a look at how we could do something similar to above, using JQuery.

Lets add the following, can you tell what it will do before trying it out?

```html
<button id="learn-more" class="btn btn-success btn-lg" type="button">Learn More</button>


<script>

$('#learn-more').click( function() {
    alert( 'Learn more about what?');
});

</script>

```

Now lets use JQuery to begin building the chat functionality for our page.

    * Add an input and button to allow the user to submit comments:

```html
<div>
  <input type="textfield" id="simple-comment"></input>
  <button id="simple-send">send simple comment</button>
</div>

```

   * Add div to hold comments:

```html
   <div class="col-md-8 col-md-offset-2">
      <h2>Simple Comments</h2>
      <div id="simple-comments">
        <ul>
        </ul>
      </div>
   </div>
```

   * Now lets use jquery to take a users comment and add it to the comments list. When a user clicks the send
   button we take the latest comment from the message input, append it to the list of comments and then
   clear the input box for the next comment to be enetered
   
```html
    //Add comments script
   <script>
     $("#simple-send").on("click", function(e) {
       $("#simple-comments ul").append("<li>" + $("#simple-comment").val() + "</li>");
       $("#simple-comment").val("");
     });
   </script>
   
```

So this is quite a good start, but if you refresh the page you loose all the comments that have been entered.
We need some way of storing all the comments that have been entered.

Database javascrity section
---
This section is an extension on the above and will introduce how databases play a large part in applications.  

* Now lets add another input box and button that will allow us to create a more useful comments system. 

```html
<div class="messaging">
  <input type="textfield" id="message"></input>
  <button id="send">send</button>
</div>

```
* Our new solution will also need a sign in and sign out button.

```html
<div class="signinout">
  <button id="signin">Sign in</button>
  <button id="signout">Sign out</button>
</div>
```

  As you can see we have decided to call the new input message to allow it to be easily distinguish from the simple-comments solution

* Lets now also add a messages box that will allow us to collect messages

```html
<div id="messages">
  
</div>

```

* Add the following scripts to your page to allow us to continue. 

```html
<script src="https://www.gstatic.com/firebasejs/3.6.5/firebase.js"></script>
<script src="scripts/main.js"></script>
<script src="scripts/simplechat.js"></script>
<script>
  var chat = new Chat();
 
  chat.setMessageInput($("#message"));
  chat.setSubmitButton($("#send"));
  chat.setSignInButton($("#signin"));
  chat.setSignOutButton($("#signout"));
  chat.setMessageList($("#messages"));
</script>
```

* Now lets attach some click handlers like before.  This will allow the javascript too react when a button is clicked and 
call the functionality that has been built for you already.

```html
<script>
  $("#send").on("click", function(){chat.sendMessage()});
  $("#signin").on("click", function(){chat.signIn()});
  $("#signout").on("click", function(){chat.signOut()});
</script>
```

* Reload the page, click sign in and confirm that you are happy for your page to connect to your github account. Once done, try adding a message or two.  

* Wait a minute the messages dont seem to be apearing on the page.  Oh, we almost forgot
you need to add the follwoing script at the bottom of the page to ask the database to 'listen' for any messages

```html
<script>
    chat.listenForMessages();
</script>
```

* So we can now see that the messages were being saved just not displayed
