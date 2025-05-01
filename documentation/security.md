# JWT

### Logging In

1. When creating a user make sure to encrypt the password. In this case we use bcrypt
2. When the user logs in we need to then create a JWT
   - We use the `sign` method which takes in the user as the payload and the secret key to generate the JWT
3. If the password matches then return the response with the token
4. For the subsequent calls to the fighter endpoints, we need to check for a token.

### Subsequent Requests
