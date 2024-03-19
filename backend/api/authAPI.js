const express = require('express');
const router = express.Router();

const CustomerModel = require('../models/customer');
const AdminModel = require('../models/admin');
const ProductModel = require('../models/product');

router.post('/customer-login', async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({message:"please enter all fields"});
        }
        const customer = CustomerModel.findOne({email:email});
        if(!customer){
            return res.json({message:"customer does not exist"});
        }
        if(customer.password !== password){
            return res.json({message:"invalid credentials"});
        }
        res.status(200).json({message:"success"});
    }catch(err){
        res.json({message:"error"});
    }
})

router.post('/admin-login', async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({message:"please enter all fields"});
        }
        const admin = AdminModel.findOne({email:email});
        if(!admin){
            return res.json({message:"admin does not exist"});
        }
        if(admin.password !== password){
            return res.json({message:"invalid credentials"});
        }
        res.status(200).json({message:"success"});
    }catch(err){
        res.json({message:"error"});
    }
})

module.exports = router;