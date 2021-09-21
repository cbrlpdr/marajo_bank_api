const express = require('express');
const Client = require('../model/client');

const router = express.Router();

router.post('/client', async(req, res) => {
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

module.exports = app => app.use("/register", router)