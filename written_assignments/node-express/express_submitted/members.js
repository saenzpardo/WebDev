const express = require('express');
const uuid = require('uuid');
const router = express.Router();
// import Members.js
const members = require('../../Members');

// Gets All Members
router.get("/", (req, res) => res.json(members));

// Get Single Memeber
// :id is a URL parameter
router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {        
        res.json(members.filter((member) => member.id === parseInt(req.params.id)));
    } else {
        // if ID isn't found - push this message below and change request to 400
        res.status(400).json({ msg: `No member with ID of ${req.params.id}` });
    }  
});

// Create member
// POST request
router.post('/', (req, res) => {
    // create new member using UUID to issue unique
    // ID number
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include name and email'});
    } 
    
    // Add new members to array
    members.push(newMember);
    // Send response
    res.json(members);
});

// Update Member
router.put("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {        
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member updated', member });
            }
        });
    } else {
        // if ID isn't found - push this message below and change request to 400
        res.status(400).json({ msg: `No member with ID of ${req.params.id}` });
    }  
});

// Delete Member
router.delete("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {        
        res.json({ msg: 'Member deleted', members: members.filter((member) => member.id !== parseInt(req.params.id))
    });
    } else {
        // if ID isn't found - push this message below and change request to 400
        res.status(400).json({ msg: `No member with ID of ${req.params.id}` });
    }  
});

module.exports = router;