# BOLTTECH-TEST

## TODO

### BACKEND

- [ ] user registration
- [ ] user authentication
  - [ ] login
  - [ ] logout
    - [ ] (refresh token?)
- [ ] CRUD of projects
  - [ ] add
  - [ ] show
  - [ ] edit
  - [ ] remove
- [ ] CRUD of tasks [that are related to the project]
  - [ ] add
  - [ ] show
  - [ ] edit
  - [ ] remove

### BACKEND (optional)

- [ ] input validator as a middleware
- [ ] jest unit tests
- [ ] configure gulp
- [ ] use jsdocs for function documentation
- [ ] firebase for social auth
- [ ] docker *maybe laybe do beibe la diroleibe*

### REQUIREMENTS (miscellaneous)

- [ ] one user may have several projects
- [ ] one user can access his projects only
- [ ] one project may have several tasks
- [ ] TASK FIELDS: ``{description: string; creation-date: string; finish-date: string;}``
- [ ] tasks also may be ``finished or unfinished`` (boolean?)

### FRONTEND

- [ ] web app skeleton
- [ ] task's finish date visible in the tooltip, and a status identifier (todo, doing, done(?)) => Microsoft TODO for inspiration
- [ ] tasks added or deleted should not refresh the full page, that is bad for the user, brah
- [ ] add gulp.js for build

### BOTH

- [ ] finished tasks should not be able to edit, nor remove (but am I able to **undone**?)
- [ ] encode user's password and authentication ([like this](https://cloud.google.com/blog/products/identity-security/account-authentication-and-password-management-best-practices))

## USEFULL COMMANDS

docker mongo-container: ``docker run -d --name mongodb-container -p 27017:27017 -e admin=admin -e 1234=1234 mongo``

## REFERENCES

- [example of node express app](https://github.com/gothinkster/node-express-realworld-example-app)
