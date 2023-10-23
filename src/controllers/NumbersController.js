module.exports = {
    reserve: (req, res) =>{
        
        const mongoose = require('mongoose');
        require('../models/list')
        const listar = mongoose.model('list')
        
        
        for(req.body.qtd; req.body.qtd > 0;req.body.qtd-- ){ 
            const radom = Math.floor(Math.random() * 750) + 1;
            new listar({
                id: radom,
                Name: req.body.name,
                Phone: req.body.phone
                }).save()
        }
       return res.redirect('/number/form')
    },

    form: async (_, res) =>{
        const mongoose = require('mongoose');
        require('../models/list')
        const listar = mongoose.model('list')

        const lista = await listar.find({}).lean()
        res.render('form',{
            title: 'Comprar - EJC',
            style: 'form.css',
            script: 'compra.js',
            listar: lista,
    })
                
    }
}