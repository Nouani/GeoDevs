const axios = require('axios');

const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res){
        const response = await Dev.find();

        res.json(response);
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({github_username});

        if (!dev){
            const response = await axios.get(`https://api.github.com/users/${github_username}`);
    
            let { name, avatar_url, bio } = response.data;
            const techsArray = parseStringAsArray(techs);
            const location  = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
    
            if (!name){
                name = response.data.login;
            }
    
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        res.json(dev);
    }
}