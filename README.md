# mern-personal-space
Application for tracking information about your finance, car and many more.

## ENV file
`PORT` - set custom port for Back-End

## Prepare MongoDB
In order to work with MongoDB database better is to create dedicated user for your database and assign permissions.

You can do this as follows (type in mongosh).

```shell
use admin
db.auth("mongoadmin", passwordPrompt())

use dbname

db.createUser(
{
  user: "mongouser",
  pwd: "changeme",
  roles: [
    {
      role: "readWrite",
      db: "dbname"
    }
  ]})
}
```

## Run local environment

1. Execute `docker-compose up` to spawn mongoDB instance
2. Prepare MongoDB DB
3. Execute `npm run start`
4. Have fun!
