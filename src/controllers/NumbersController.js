module.exports = {
    reserve: (req, res) =>{
        
        const mongoose = require('mongoose')
        require('../models/list')
        const listar = mongoose.model('list')
        
        
        for(req.body.qtd; req.body.qtd > 0;req.body.qtd-- ){ 
            const radom = Math.floor(Math.random() * 750) + 1
            new listar({
                id: radom,
                Name: req.body.name,
                Phone: req.body.phone,
                From: req.body.select
                }).save()
        }
       return res.redirect('/number/form')
    },

    form: async (_, res) =>{
        const mongoose = require('mongoose')
        require('../models/list')
        const listar = mongoose.model('list')

        const lista = await listar.find({}).lean()
        res.render('form',{
            title: 'Comprar - EJC',
            style: 'form.css',
            script: 'compra.js',
            listar: lista,
    })
                
    },
    list: async (_, res) =>{

        const mongoose = require('mongoose');
        require('../models/list')
        const listar = mongoose.model('list')
        const lista = await listar.find({}).lean()

        let count = {
        Iago: 0,
        Leticia:  0,
        Riguad: 0,
        Gilsinho: 0,
        Mayara: 0,
        Mariana: 0,
        Brasil: 0,
        Rafael: 0,
        Gustavo: 0,
        EricaFrazao: 0,
        Gabriela: 0,
        Bebesso: 0,
        Lisandra: 0,
        Magna: 0,
        Maria: 0
        }
        lista.forEach(lista=>{
            if(lista.From == 'Iago'){
                count.Iago += 1 
            }
            if(lista.From == 'Leticia'){
                count.Leticia += 1 
            }
            if(lista.From == 'Riguad'){
                count.Riguad += 1 
            }
            if(lista.From == 'Gilsinho'){
                count.Gilsinho += 1 
            }
            if(lista.From == 'Mayara'){
                count.Mayara += 1 
            }
            if(lista.From == 'Mariana'){
                count.Mariana += 1 
            }
            if(lista.From == 'Brasil'){
                count.Brasil += 1 
            }
            if(lista.From == 'Rafael'){
                count.Rafael += 1 
            }
            if(lista.From == 'Gustavo'){
                count.Gustavo += 1 
            }
            if(lista.From == 'Érica Frazão'){
                count.EricaFrazao += 1 
            }
            if(lista.From == 'Gabriela'){
                count.Gabriela += 1 
            }
            if(lista.From == 'Bebesso'){
                count.Bebesso += 1 
            }
            if(lista.From == 'Lisandra'){
                count.Lisandra += 1 
            }
            if(lista.From == 'Magna'){
                count.Magna += 1 
            }
            if(lista.From == 'Maria'){
                count.Maria += 1 
            }
        })

        res.render('list',{
            title: 'Comprar - EJC',
            style: 'list.css',
            script: 'list.js',
            listar: lista,
            countList: lista.length,
            count: count,

        })
    }
}