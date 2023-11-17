# Project Name CV Builder


## Overview


 This application has the purpose of assisting the user in preparing a CV. The user needs to be able to enter information into a form, save it and use it to automatically complete stored CV templates. As a stretch goal the user can obtain job advice by the application reading the entered skills and sending a query to a Large Language Model API. The user also has a need for authentication so that access to their information can be controlled.




## Architecture


The application has a client-server structure with the client handling the user interface and presention and the server handling the database and processing queries to it. Beneath the server folder is a models folding containing models for the database. Beneath the client folder is a public folder and a src folder. The public folder contains an image folder which holds images used on the pages. The src folder has two subfolders, components and templates. Templates contains templates for CVs. Components contains a Forms folder which holds .jsx files for the webpages.

The code is written in Javacript with React at the front end and Node.js at the back end. Express provides a server and MongoDB a database. Mongoose connects to the database and Axios is used to connect to endpoints on the server. OpenAI library is installed to access their API. Auth0 is used to provide authentication and the Auth0 library is installed to support it. Dayjs and parts of @mui are imported to assist with the forms. Body-parser is also included to process data sent to OpenAI.



## Credit and Collaborations


Procedure for collaboration will be individual coding while maintaining contact via Google Meet so mutual assistance can be provided when necessary. Out of hours contact will be available using Discord.

In the event of conflict between individuals group discussion will take place. Situation will be referred to TAs as a last resort.





