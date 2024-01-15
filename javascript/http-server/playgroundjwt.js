const jwt = require('jsonwebtoken');

// Example data to be included in the token
const user = {
  id: 123,
  username: 'exampleUser',
};

// Secret key used for signing the token (should be kept secret)
const secretKey = 'yourSecretKey';

// Generate a JWT token
const token = jwt.sign(user, secretKey);

// Output the generated token
console.log(token);
