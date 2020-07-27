const crypto = require('crypto');
const connection = require('../database/connection');
const generateIniqueId = require('../utils/generateUniqueId');

module.exports = {

async index (request, response) {
    const ongs =  await connection('ongs').select('*');
        return response.json(ongs);
},


    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id =  generateIniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id});
    }
};