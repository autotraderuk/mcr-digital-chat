Javascripty section
---

Learning Objectives:
  * Understand how javascript interacts with the page, and introduce jquery

Explain what javascript is & the sort of things we can do with it in webpages

Show them the 'completed' example page and demonstrate the bits we've used jquery with (comments form & comments area).

Explain that we'll be building something similar on their pages using jquery

Tasks to talk them through:


   * Getting used to jquery. Add jquery cdn to page:

```
  <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
```

* Add a simple button to the page somewhere and bind an onclick handler to the button to show an alert box:

```html
<button id="learn-more" class="btn btn-success btn-lg" type="button">Learn More</button>

...

<script>

$('#learn-more').click( function() {
    alert( 'Learn more about what?');
});

</script>

```

Demonstrates jquery selectors, and binding functions in response to events. Worth mentioning that there are other ways to select elements.

*  Start building the comments section. Explain that we'll be taking the form input (name & comment) & using jquery to add the
   comment to the bottom of the page in a comments block


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


* Add the following scripts to your page to allow us to continue. 

```html
<script src="https://www.gstatic.com/firebasejs/3.6.5/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmZDCY6OaDM749VGyCBZBIg6qVtnvMuOM",
    authDomain: "mcrdigapprday.firebaseapp.com",
    databaseURL: "https://mcrdigapprday.firebaseio.com",
    storageBucket: "mcrdigapprday.appspot.com",
    messagingSenderId: "252018298878"
  };
  firebase.initializeApp(config);
</script>
<script src="scripts/main.js"></script>
<script src="scripts/simplechat.js"></script>
<script>
  //Init friendlyChat - another step - maybe extact this into another script
  var chat = new Chat();
  chat.setMessageInput($("#message").get(0));
  chat.setSubmitButton($("#send").get(0));
  chat.setSignInButton($("#signin").get(0))
  chat.setSignOutButton($("#signout").get(0))
</script>
```

* Now lets add another input box and button that will allow us to create a more useful comments system. 

```html
<div class="messaging">
  <input type="textfield" id="message"></input>
  <button id="send">send</button>
</div>

```

  As you can see we have decided to call the new input message to allow it to be easily distinguish from the simple-comments solution

* Lets now also add a messages box that will allow us to collect messages

```html
<div id="messages">
  <ul>
  </ul>
</div>

```

* Our new solution will also need a sign in and sign out button.

```html
<div class="signinout">
  <button id="signin">Sign in</button>
  <button id="signout">Sign out</button>
</div>
```
* Now lets attach some click handlers like before.  This will allow the javascript too react when a button is clicked and 
call the functionality that has been built for you already.

```html
<script>
  //Another steps?
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
