
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

Open Intellij and then in the modal that pops up select **Check out from version control** and then **Git**


![alt tag](https://cloud.githubusercontent.com/assets/7566947/22973057/58db7074-f374-11e6-8e95-1b2fb876d10a.png)


Select the clone option. Follow the wizard to create the project.

We want to **Create project from existing sources** follow the wizard through and then finish, that should open up the application.

Now we can run and build the project from the command line.

Navigate to this folder
 
    cd mcr-digital-chat/

And build the application

    npm install

And finally run it

    npm start
 
 Follow this link : http://localhost:8081 you should see that old classic Hello World!
 
 Now let's make a simple change and then commit to our repository.
 
 Select the VCS tab within intellij, and then push.
 
 ![alt tag](https://cloud.githubusercontent.com/assets/7566947/22972998/16c991fc-f374-11e6-8659-2e72de6a9f9a.png)
 


## Using the url with the command line:

You only need to do this if you did not use the url within the IDE.

    git clone https://github.com/autotraderuk/mcr-digital-chat.git
 
 This should've created a folder called mcr-digital-chat. 
 
 Now navigate to this folder
 
    cd mcr-digital-chat/

And build the application

    npm install

And finally run it

    npm start
 
 Follow this link : http://localhost:8081 you should see that old classic Hello World!
 
 Now let's make a simple change and commit this to our repository.
     git commit
     git ghp-deploy
 
 For the rest of what follows we will be editing the code within the IDE (integrated developemnt environment) Intellij.
 Open Intellij and then select open on the right hand side, this should open up the project.
 
 We will now open this using the IDE (integrated developemnt environment) Intellij. 
 
 

#Session one


This first session is aimed at getting you going, we will put a few elements on the page and have a look at the pages structure. 




The three main building blocks to a web page are [html](http://www.w3schools.com/html/),  [css](http://www.w3schools.com/css/) and [JavaScript](http://www.w3schools.com/js/). We'll start by looking at these. 

We will be coding within the index.html page in the application. This page acts as the base of our application and is the page we hit when we naviagte to the root of the project : http://localhost:8081/

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

Now lets add in some css. Pick a colour from the [colour picker](http://www.w3schools.com/colors/colors_picker.asp) can you modify the above function to change the colour of your name to an inputted colour? 

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
  <button id="simple-send">Post comment</button>
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
   <script>
     $("#simple-send").on("click", function(e) {
       $("#simple-comments ul").append("<li>" + $("#simple-comment").val() + "</li>");
       $("#simple-comment").val("");
     });
   </script>
   
```

## Publishing your work to the public internet

Github lets you publish webpages if you add them to a branch called `gh-pages`.  This can seem quite daunting to get right, but luckily there's a script in `package.json` written for us to make it easy.

From the command line in the `mcr-digital-chat` dirctory, simply enter:

```node
npm run ghp-deploy
```

Then you should be able to go to https://your-user-name.github.io/mcr-digital-chat/ and see your work.

## Finally

So this is quite a good start, but if you refresh the page you loose all the comments that have been entered.
We need some way of storing all the comments that have been entered. Thats where the Database will come in!













#Session two

Let's make our pages a bit more interesting. There are loads of different Iframes that we can add to the page to pull content down from other sites.
This could be from :


 **youtube**
 
 ```html
 <iframe width="688" height="390"src="https://www.youtube.com/embed/g3FOQjCgl9w?controls=1"></iframe>
 ```
 
**sound cloud**
 ```html
 <iframe width="100%" height="450" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298167372"></iframe>
 ```
 
**instagram** see [here](https://snapwidget.com/)



**Structure and styling**

But what about the structure of the page, and how it looks? Navigate to **/documentation/css-html.html** to get some styling tips.

Use the links to W3Schools above to make your page look a bit more interesting, there is loads of great content on the [bootstrap](http://getbootstrap.com/css/) site too.

This can be included in the page by including the following script tag

````html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
```

**favicon**

Most websites have a small image within the tab on the browser, this is called a favicon. 

If you like you can create your own [here](http://www.favicon.cc/). 

The file this generates then needs to be added into the project, at the root level, and also referenced within the head tag within the html file


```html
<link rel="shortcut icon" type="image/x-icon" href="/film-favicon.ico"/>
```

**Display name**

For the page you saw at the begining as well as a comments box there was also a box to put your display name in.

```html

        <div class="form-inline">
            <div class="form-group">
                <label for="name">Display Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Jane Doe">
            </div>
            <div class="form-group">
                <label for="comment">Comment:</label>
                <input type="text" id="comment" class="form-control" placeholder="comment goes here" >
            </div>
            <button id="addComment" class="btn btn-default">Post comment</button>
        </div>
```
And then to display the comments
```html
<div class="row">

    <hr>
    <div class="col-md-12">
        <div class="col-md-8">
            <h2>Comments</h2>
            <div id="comments">
            </div>
        </div>
    </div>

    <div>
        <ul id="messages">
        </ul>
    </div>

</div>
 ```
 
 And then the script
 
 ```html
 <script>
            function addComment(name, comment){
                var date = new Date();

                var html = '<div class="comment row">' +
                        '<div class="commentator col-xs-7"> ' + name + ' says: </div>' +
                        '<div class="col-xs-12 commentText">' + comment + '</div>' +
                        '<div class="col-xs-12 commentDate">' + date.toLocaleDateString() + '</div>' +
                                '<hr class="col-xs-12" >'+
                        '</div>';

                $(html).hide().appendTo("#comments").fadeIn(400);
                $("#name").val('');
                $("#comment").val('');
                name = '';
                comment = '';
            }

            $("#addComment").click(function(){
                var name = $("#name").val();
                var comment = $("#comment").val();
                addComment(name, comment);
            });
      </script>
 ```
 
 
 





#Session three

Hopefully by now you have a site that looks great and is appealing to others. But what about all of your chat messages?

We will now introduce a database so that all of the messages you generate won't be lost everytime you refresh the page.

Let's replace the comments boxes from above with the below

```html
<div class="messaging">
            <div class="form-group">
                <label for="name">Display Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Jane Doe">
            </div>
            <div class="form-group">
                <label for="message">Comment:</label>
                <input type="text" id="message" class="form-control" placeholder="comment goes here" >
            </div>
            <button id="send" class="btn btn-default">Post comment</button>
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
  chat.setDisplayNameInput($("#name"));
  chat.setSubmitButton($("#send"));
  chat.setSignInButton($("#signin"));
  chat.setSignOutButton($("#signout"));
  chat.setMessageList($("#messages"));
</script>
```

* Now lets attach some click handlers like before.  This will allow the javascript to react when a button is clicked and 
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
you need to add the following script at the bottom of the page to ask the database to 'listen' for any messages

```html
<script>
    chat.listenForMessages();
</script>
```

* So we can now see that the messages were being saved just not displayed

#What you could do next 
If you have motored through this exercise relatively easily and wondered what else to do then you could consider

* How can we further improve the look and feel of the webpage? - we can improve this by adding some css using the open-source framework [bootstrap](http://getbootstrap.com/css/)

* Do you want no-one to see your comments? Create your own [firebase account](https://console.firebase.google.com) and then link it to your own github account.

* Your code is available in your repo, take it home, play around with it  and improve the webpage further.
