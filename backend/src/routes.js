const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body;

    const x = techs.split(',').map(tech => tech.trim());
    
    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    let { name = login, avatar_url, bio } = response.data;

    res.json({name, avatar_url, bio, x});
});

module.exports = routes;