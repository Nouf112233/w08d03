# About the project
## Todos Api With Auths
 
  login and register using hash password and token , and todo list for each user,

# Instructions for useing this project:
   * npm i
   * express
   * cors.
   * mongoose.
   * dotenv.
   * jsonwebtoken.
   * bcrypt.

# Schemas:
* Role schema
contains this information: role and permessions
* user schema
contains this information: email , password and role
* Task schema
contains this information: email , password and role

# Routers::

 ## role:
  * user
  * admin

 ## user:
  * create todo
  * delelt all todo
  * delete todo by id
  * get todo by id
  * update todo by id
  * get all todo

 ## task:
  * Create task api.
  * Update task api
  * Delete task api.
  * Get all task api.
  * delete all tasks api.
  * Get specific task api.
  * get task by admin.
  * delete task by admin  
  * Tasks Routers only work for user who has exist token.

# digram

  ![Untitled%20Diagram.drawio img](https://github.com/Nouf112233/w08d03/blob/main/Untitled%20Diagram.drawio.png)

# UML
![uml-w08d03.drawio img](https://github.com/Nouf112233/w08d03/blob/main/uml-w08d03.drawio.png)




