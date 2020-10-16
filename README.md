# Connecting Angular Frontend to the API 🚀🚀

## Step by step 🚶🏻‍♂️🚶🏻‍♂️
* Open frontend angular project and serve or run    
* Create a new service  call task inside frontend using command 
  * command: ng generate service task
* Task service will be responsible for modifying our  data  and go to task.service.ts file to read the notes of this file .
* To create a list we need to send web request and for that we are going to create a new service where we will put all http web request
  * command : ng generate service webRequest
* Now go to webRquest.service.ts file and define all method
* Go to task.service.ts file and and define WebRequestService and payload
* Go to task-view.component.html and add event handler to create new list at new list button 
* Now go to task-view.component.ts file and create that method that event i.e createNewList
* Got app.module.ts file and import client module 
