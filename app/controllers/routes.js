const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')

const router=express.Router();

router.delete('/customers/:id',CustomerController.delete);
router.put('/customers/:id',CustomerController.edit);
router.get('/customers/:id/accounts',AccountController.ListAccountsByCostumer);
router.post('/accounts',AccountController.createAccount);
router.put('/accounts/:id/transfer',AccountController.edit);
router.post('/customers',CustomerController.createCustomer);
router.delete('/accounts/:id',AccountController.delete);
router.put('/accounts/:id/retire',AccountController.retirarSaldo);
router.put('/accounts/:id/consignar',AccountController.consignar);

module.exports=router;