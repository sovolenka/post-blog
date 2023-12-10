# post-blog

## You can run application with Docker Compose or Node.js

## Run with Docker Compose
- add `.env` file to the root directory and set the following variables:
  - APP_PORT=???
  - MONGO_INITDB_ROOT_HOSTNAME=???
  - MONGO_INITDB_ROOT_PORT=???
  - APP_MONGO_HOST=db

- Build the image
```sh
docker-compose build
```
- Run the container
```sh
docker compose up
```

## Run with Node.js
### In this case, you need to have your database already working.
You can edit the connection string in `config/db.js` file.
### Run with command:
```sh
node app.js
```
