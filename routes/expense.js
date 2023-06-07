// require express and it's router component
const express = require('express');

const router = express.Router();

// require the middlewares and callback functions from the controller directory
const {create, expenseById, expenseByDate, read, update, remove} = require('../controllers')

// Create POST route to create an expense
router.post(("/expenses/create", create));

// Create PUT route to update an expense
router.put("/expenses/:id", expenseById, update)


// Create DELETE route to remove an expense
router.delete("/expenses/:id",remove);

/**
 * Create GET route to read an expense
 * expensesById, the middleware function get the req and res and queries the
 * database to get the data, and then sends that data to the read function using
 * a next params sent in the middleware function.
 */
router.get("/expense/:id", expenseById, read);

// Create GET route to read a list of expenses
router.get("/expense/list/:expenseDate", expenseByDate, read);
// Create a callback to handle url params

module.exports = router;
