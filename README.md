# todo-api
## requirements
NodeJS
## setup

    npm i
## launch

    node server
   ## models
   

    interface Todo {
	    text: string;
	    completed: boolean;
	    id: string;
	    createdAt: string;
	    updatedAt: string;
	}
	 

   ## endpoints
   ### GET `/todo`
   returns all todos
   ### POST `/todo`
   #### body parameters
   

    text: string
    completed: boolean
   
   adds todo to database, returns created todo
   ### GET `/todo/:id`
   #### url parameters
   

    id: string
   returns todo with specified id
   ### PUT `/todo/:id`
   #### url parameters
   

    id: string
   #### body parameters
   

    text: string
    completed: boolean
   updates todo in database, returns updated todo
   ### DELETE `/todo/:id`
   #### url parameters
   

    id: string
    
   deletes todo in database
