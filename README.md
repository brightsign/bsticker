# bsticker
Shows how to use BrightSign's super-smooth Javascript ticker.

You can use it in three ways: 

- As an AngularJS custom tag, namely <ticker>. See index.html for an example. If you deploy all the files in this project to a
BrightSign player, this is the type of ticker you will see.
- As an AngularJS service. See how the custom tag is implemented in components.js for how to use it.
- As a standalone Javascript object. See how the service is implemented in services.js for how to use it.

The code includes an example of how to change the ticker dynamically. The ticker will change its text after five 
seconds. See controllers.js for how this is done.

Note: This sample code does not exhaustively exercise all the methods in BSTicker.
