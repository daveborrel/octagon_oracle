## About

Octagon Oracle is meant to be an aid for UFC sportsbetting which allows users to research specific fighters and make informed decisions about their bets for upcoming events.

## Screenshots

### Postman

![Image](/demo.png)

### Artillery Performance Testing

![Artillery Test](/artillery.png)

- Mean Response Time - 109.6ms
- Median Response Time - 90.9ms
- p95 - 202.4

## Getting Started

First Install Node [here](https://nodejs.org/en/download)

Running it in dev

`npm run dev` - Runs the server

### Testing Endpoints

You can use Postman to test each endpoint to avoid CORS

### Debugging

1. Create a [javascript debug terminal](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal)
2. Run project using `npm run dev`

## Documentation

- [Data Design and Architecture](./documentation/technical-design.md)
- [Technical Design](./documentation/technical-design.md)

## Architecture

- Backend Node (Host it where?)
- DB : MongoDB Atlas Cluster

## Resources Used

- [MongoDB Express Documentation](https://mongodb.github.io/node-mongodb-native/contents.html)
- [Clean Architecture in Node](https://medium.com/@ben.dev.io/clean-architecture-in-node-js-39c3358d46f3)
- [HTTP Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
