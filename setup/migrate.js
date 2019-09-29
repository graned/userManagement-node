const path = require('path');
const config = require('config');
const sqlMigrations = require('sql-migrations');

console.log('Migrations for env', process.env.NODE_ENV || 'local');
console.log('db url', config.get('db.url'));

const {
  hostname: host,
  port,
  username: user,
  password,
  pathname,
} = new URL(config.get('db.url'));

sqlMigrations.setLogger({
  log: (args) => {
    if (!Array.isArray(args)) {
      console.log(args);
    }
  },
  error: console.log,
});

sqlMigrations.run({
  migrationsDir: path.resolve(__dirname, 'migrations'),
  host,
  port: port || '5432',
  user,
  password,
  db: pathname.slice(1),
});