const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        res.json(req.query);
    },
}