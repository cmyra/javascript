// Import the express module
const express = require('express');

// Create an app object
const app = express();

// Use the express.json middleware to parse JSON requests
app.use(express.json());

// Define the /add endpoint that accepts two input numeric numbers and returns the sum of the numbers in JSON
app.get('/add', (req, res) => {
  // Get the input numbers from the query parameters
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  // Check if the input numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    // Send a 400 (Bad Request) response with an error message
    res.status(400).json({ error: 'Invalid input numbers' });
  } else {
    // Calculate the sum of the input numbers
    const sum = num1 + num2;

    // Send a 200 (OK) response with the sum in JSON
    res.status(200).json({ sum: sum });
  }
});

// Define the /subtract endpoint that accepts two input numeric numbers and returns the difference of the numbers in JSON
app.get('/subtract', (req, res) => {
  // Get the input numbers from the query parameters
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  // Check if the input numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    // Send a 400 (Bad Request) response with an error message
    res.status(400).json({ error: 'Invalid input numbers' });
  } else {
    // Calculate the difference of the input numbers
    const difference = num1 - num2;

    // Send a 200 (OK) response with the difference in JSON
    res.status(200).json({ difference: difference });
  }
});

// Define the /multiplication endpoint that accepts two input numeric numbers and returns the multiplication of the numbers in JSON
app.get('/multiplication', (req, res) => {
  // Get the input numbers from the query parameters
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  // Check if the input numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    // Send a 400 (Bad Request) response with an error message
    res.status(400).json({ error: 'Invalid input numbers' });
  } else {
    // Calculate the multiplication of the input numbers
    const product = num1 * num2;

    // Send a 200 (OK) response with the product in JSON
    res.status(200).json({ product: product });
  }
});

// Define the /division endpoint that accepts two input numeric numbers and returns the quotient of the numbers in JSON
app.get('/division', (req, res) => {
  // Get the input numbers from the query parameters
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  // Check if the input numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    // Send a 400 (Bad Request) response with an error message
    res.status(400).json({ error: 'Invalid input numbers' });
  } else if (num2 === 0) {
    // Send a 400 (Bad Request) response with an error message
    res.status(400).json({ error: 'Division by zero' });
  } else {
    // Calculate the quotient of the input numbers
    const quotient = num1 / num2;

    // Send a 200 (OK) response with the quotient in JSON
    res.status(200).json({ quotient: quotient });
  }
});

// Define the /home endpoint that displays in JSON "My first arithmetic web services api"
app.get('/home', (req, res) => {
  // Send a 200 (OK) response with the message in JSON
  res.status(200).json({ message: 'My first arithmetic web services api' });
});

// Define a port number to listen on
const port = 5000;

// Start the server and listen on the port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});