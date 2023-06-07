// require express and it's router component
const express = require('express');

const router = express.Router();

// require the middlewares and callback functions from the controller directory
const {create, expenseById, expenseByDate, read, update, remove} = require('../controllers')

/*
 * Create POST route to create an expense
 * works like a normal api endpoint function,
 * create get's 2 parameter, req and res
 */
router.post(("/expenses/create", create));

/*
 * Create PUT route to update an expense
 * works a bit differently, expensesById is a middleware function,
 * get's multiple parameters, req, res, and next. next is a function,
 * that invokes the next middleware function in the stack.
 */
router.put("/expenses/:id", expenseById, update)

/*
 * Create DELETE route to remove an expense
 * work similary to upper post request;
 */
router.delete("/expenses/:id",remove);

/*
 * Create GET route to read an expense
 * expensesById, the middleware function get the req and res and queries the
 * database to get the data, and then sends that data to the read function using
 * a next params sent in the middleware function.
 */
router.get("/expense/:id", expenseById, read);

/*
 * Create GET route to read a list of expenses
 * expensesByDate middleware function gets 4 arguments, where the parametes are,
 * req, res, next, and date, which the value of extracted route parameter;
 */
router.get("/expense/list/:expenseDate", expenseByDate, read);

// Create a callback to handle url params

module.exports = router;
