# User management (NODE)

This is a simple node js implementation using clean architecture principles.

This project is created only for showcasing my interpretation of clean architecture by Uncle Bob.
(https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

# Starting the app
Everything is in docker, so it is super simple. To start the application just:
```bash
docker-compose up -d
```
This will create a Postgres and the application images.

For database, run migrations so you have the database schemas in you image:
```
npm run db:migrate
```

# Creating a migration
To create a db migration just:
```
npm run db:migrate:create
```

This will create the up and down migration files. You can then write your migration in plain SQL.

# Rolling back migrations
If you need to have you DB in a clean state, just rollback all executed migrations:
```
npm run db:migrate:rollback
```
