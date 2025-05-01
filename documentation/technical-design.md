# Tech Design

## NPM Modules Used

- cors
- dotenv
- ejs
- express
- typescript
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [artillery]()

## Project Structure

### Basic Components of Express / Node Backend

When creating a server in node using `http.CreateServer()` its parameter is a callback function.
The reason we seperate this file into `server.js` and `app.js` is because server.js will only create the server and start listening to a port.
The `app.js` file will contain our middleware functions that process the request being sent to the server.

### Module Based Folder Structure

The entire program is subdivided into seperate modules which act as its own standalone app. Each with its own API, service, data access and tests.
In most node projects structures they ask you to do it in the [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) pattern.
However, in order to prepare for working with larger and more complex applications in the future, I wanted to get into the habit of using this structure.
In each module you will have the entire MVC pattern self contained in the directory itself.

### Module Structure

#### Model

- Defines a javaScript class that describes an object.

#### Repository

- Abstracts data access from the service layer and makes the code more organized.
- Each endpoint will have the [Collections](https://mongodb.github.io/node-mongodb-native/api-generated/collection.html) class use a method to interact with the database.

#### Service

- Handles the business logic.

#### Controller

- Handles incoming requests and controls the workers.

### Routes

- Describes how the application endpoints respond to the clients requests.

## API

### Users

- POST `/api/users/`
- GET `/api/users/`
- DELETE `/api/users/`
- PATCH `/api/users/` - Updates it so that a user can get a favourite fighter.
- POST `/api/login` - This will return a JWT.

### Fighters

These routes require a token.

- POST `/api/fighters/`
- GET `/api/fighters/`
- DELETE `/api/fighters/`

## Middleware

Auth.js - checks for the presence of a token.

## Caching

I chose to use memCache as the primary caching method because it is the more simple approach to learn at the moment.
[Caching with memCache and MongoDB](https://loadforge.com/guides/effective-caching-techniques-to-boost-mongodb-performance)

## Sources

- [Writing Middleware](https://expressjs.com/en/guide/writing-middleware.html)

## Development

- MongoDB

## Deployment

- AWS ECS2?
