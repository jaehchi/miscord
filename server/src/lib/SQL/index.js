require('dotenv').config();
import db from '../../config/database';
import { success, error, warning } from '../logs';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;


// Database

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success(`created db: ${database}`);
  } catch (err) {
    error('failed to create db -', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );

    warning(`dropped db: ${database}`);
  } catch(err) {
    error('failed to drop db -', err);
  }
};

// USERS

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
        (
          id SERIAL,
          uuid VARCHAR(36) UNIQUE NOT NULL,
          username VARCHAR(16) UNIQUE NOT NULL,
          email VARCHAR(60) UNIQUE NOT NULL,
          CONSTRAINT users_pk
            PRIMARY KEY(uuid)
        )
      `
    );
    success('created users table');
  } catch (err) {
    error('error creating users table -', err);
  }
};

export const dropUserTable = async () => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS users'
    );
    warning('dropped user table');
  } catch(err) {
    error('failed to drop user table -', err);
  }
};

// Credentials

export const createCredentialTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS credentials
        (
          id SERIAL,
          user_id VARCHAR(36) NOT NULL,
          hash VARCHAR(120) NOT NULL,
          CONSTRAINT fk_user_id
            FOREIGN KEY(user_id) REFERENCES users(uuid)
        )
      `
    );
    success('created credentials table');
  } catch (err) {
    error('error creating credentials table -', err);
  }
};

export const dropCredentialTable = async () => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS credentials'
    );
    warning('dropped credentials table');
  } catch(err) {
    error('failed to drop credentials table -', err);
  }
};