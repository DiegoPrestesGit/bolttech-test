# BOLTTECH-TEST

## TODO

### BACKEND

- [x] user registration
- [ ] user authentication
  - [x] basic login
    - [ ] create a jwt for session
  - [ ] logout
    - [ ] (refresh token?)
- [x] CRUD of projects
  - [x] add
  - [x] show
  - [x] edit
  - [x] remove
- [x] CRUD of tasks [that are related to the project]
  - [x] add
  - [x] show
  - [x] edit
  - [x] remove

### BACKEND (optional)

- [ ] doublecheck business rules in the api layer
- [ ] create catches
- [ ] input validator as a middleware
- [ ] jest unit tests
- [ ] use jsdocs for function documentation
- [ ] implement PostgreSQL for relationships between users, projects and tasks
- [ ] docker *maybe laybe do beibe la diroleibe*

### REQUIREMENTS (miscellaneous, but not less important)

- [x] one user may have several projects
- [x] one user can access his projects only
- [x] one project may have several tasks
- [x] TASK FIELDS: ``{description: string; creation-date: string; finish-date: string;}``
- [x] tasks also may be ``finished or unfinished`` (boolean?)

### FRONTEND

- [x] web app skeleton
- [x] implement mock screen
- [x] configure axios
- [x] remove mocks and fetch data from the backend
- [x] task's finish date visible in the tooltip, and a status identifier (todo, doing, done(?)) => Microsoft TODO for inspiration
- [ ] tasks added or deleted should not refresh the full page, that is bad for the user
- [ ] add gulp.js for build

### BOTH

- [ ] threat exceptions in both ends
- [ ] finished tasks should not be able to edit, nor remove (but am I able to **undone**?)
- [x] encode user's password and authentication ([like this](https://cloud.google.com/blog/products/identity-security/account-authentication-and-password-management-best-practices))

## USEFULL COMMANDS

docker mongo-container: ``docker run -d --name mongodb-container -p 27017:27017 -e admin=admin -e 1234=1234 mongo``

## MY IMPROVEMENTS

- a better understanding of the real needs of a full applications
  - I say this because I focused on details that wasn't that relevant, if you have 2 days to deliver a reliable solution, you better focus in the essentials
- CSS: oh boy, it could be worse, but I got used with the facilities of the mobile positioning
- better prioritization, and side ideas and improvements should be in the backlog while my mind focus on the current MVP
- React (web): too rusty, need practice and better understanding of the Context API
- NodeJS (backend): I need to learn a little more about file structure, when I started the backend of this project I got sick of using the same structure over and over, surelly there is better than router/controller/service...
- DevOps: I didn't had the time to fail at DevOps here, but I'm sure needs improvements
- JS: I can learn more advanced things about the language

## PROJECT IMPROVEMENTS

*I'll try to put it in an priority way, in a VALUE/EFFORD manner*

- first of all, ensure the applications does not crash (I do believe it's crashing as is)
- implement all the essential business rules and ensure they are working as intended
- handle errors in both ends
- use input validators in the frontend
- use input validators in the backend
- better collor pallet
- better display and responsiveness
- responsive for mobile apps
- implement unit tests
- social login with Firebase or some other provider
- implement basic docker-compose for the back, front and database
- implement a build tool
- refactor the authentication for a Java micro service and use a JWToken
- [...and the list goes on]

## THANKS

Thank you all from bolttech and Smart Consulting for providing me this challenge, it wasn't easy, but not because of the tecnology, but because of my desire to build a fully operational website (I was planning on host it on AWS) when u guys only asked some simple CRUDs ;-; but it was good and productive anyway, activities like that allow ourselves to better understand where we need improvement

## REFERENCES

- [example of node express app](https://github.com/gothinkster/node-express-realworld-example-app)
