# Login and User Configuration

1. When creating a user make sure to encrypt the password. In this case we use bcrypt
2. When the user logs in we need to then create a JWT
   - We use the sign method which takes in the user as the payload and the secret key to generate the JWT
3.
