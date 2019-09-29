-- initial setup
BEGIN;
CREATE EXTENSION pgcrypto;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS address (
  id SERIAL PRIMARY KEY,
  street TEXT,
  house_number TEXT,
  state TEXT,
  zip_code TEXT,
  user_id INT NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
);
COMMIT;