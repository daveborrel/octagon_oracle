# Technological Design

## NPM Modules Used

- cors
- dotenv
- ejs
- express
- typescript
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Module Based Folder Structure

The entire program is subdivided into seperate modules which act as its own standalone app. Each with its own API, service, data access and tests.
In most node projects structures they ask you to do it in the [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) pattern.

However, in order to prepare for working with larger and more complex applications in the future, I wanted to get into the habit of using this structure.

In each module you will have the entire MVC pattern self contained in the directory itself.

## Module Structure

### Model

- Defines a javaScript class that describes an object.

## Repository

- Abstracts data access from the service layer and makes the code more organized.
- Each endpoint will have the [Collections](https://mongodb.github.io/node-mongodb-native/api-generated/collection.html) class use a method to interact with the database.

### Service

- Handles the business logic.

### Controller

- Handles incoming requests and controls the workers.

### Routes

- Describes how the application endpoints respond to the clients requests.

## API

POST `/api/users/`
GET `/api/users/`
DELETE `/api/users/`
PATCH `/api/users/`

POST `/api/fighters/`
GET `/api/fighters/`
DELETE `/api/fighters/`

## Development

- MongoDB + Docker

## Deployment

- AWS ECS2?
