//Require express
const express = require('express') ;

//require model schema
const Contact = require('../models/Contact');

//require router
const router = express.Router();
 
//creating routes 
//test route
router.get('/test',async (req,  res)=> { 
    try {
        
        res.status(200).send('Hello')
    } catch (error) {
        res.status(400).send(error)
    }
})

//Add new contact
router.post('/add_contact', async (req, res)=>{
    try {
        const {name, email, phone} = req.body ;
        const newContact = new Contact ({name, email, phone}) ;
        await newContact.save();
        res.status(200).send({msg: 'Contact added Successfully',newContact})
    } catch (error) {
        res.status(400).send(error)
    }
})


















//Exporting routes
module.exports = router








