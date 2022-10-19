const Message = require('../models/message');

// get all messages
const getAll = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages",
        "data": {
            "messages": [
                {
                    "user": "John",
                    "message": "Hello"
                },
                {
                    "user": "Jane",
                    "message": "Hi"
                }
            ]
        }
    })
};

// get message by id
// getByid

// create message
const create = (req, res) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message for user: " + req.body.user,
    })
}

// update message by id
// update

// delete message by id
// delete

// get message by username
// getByUsername

module.exports.getAll = getAll;
module.exports.create = create;