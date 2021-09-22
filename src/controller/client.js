const express = require('express');
const bcrypt = require('bcryptjs');
const Client = require('../model/client');

const router = express.Router();

router.post('/register', async(req, res) => {
    try
    {
        const client = await Client.create(req.body);

        return res.status(201).send({"message": "Client created!"});
    }
    catch (err)
    {
        return res.status(400).send({"error": "Registration failed"});
    }
})

router.post('/auth', async(req, res) => {
    const { email, password } = req.body;
    
    const client = await Client.findOne({ email }).select('+password');
    
    if(!client)
        return res.status(400).send({'error': 'Error during authentication, please check your credentials'});
    
    if(!await bcrypt.compare(password, client.password))
        return res.status(400).send({'error': 'Error during authentication, please check your credentials'});
    
    return res.status(200).send({
        'message': 'Autentication successful!',
        'client': client
    })
})

module.exports = app => app.use("/client", router)