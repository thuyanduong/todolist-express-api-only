# todolist-fullstack-express-api-no-migrations-or-auth

## Here here for demo deployed to Heroku: [APP](https://anns-to-do-app.herokuapp.com/)

### API Routes
* `GET    /api/users` will show a list of users
* `GET    /api/users/:id` will show a single user and their tasks
* `GET    /api/tasks/:id` will show a single task

### Intructions for local run
* Clone this repo and in the directory, run `npm install` to load depencies.
* Assuming you have Postgres installed, create a new, empty database and execute the SQL script in `db/init.sql`.
* Update the `.env` file with your local variables.
* Run `npm start` and navigate to `http://localhost:3001/`
