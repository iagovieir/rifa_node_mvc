const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose');

const NumberController = require('./controllers/NumbersController')
const HomeController = require('./controllers/HomeController')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://iagounijp:Iara.2020@cluster0.zwsu41c.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    useMongoClient: true
    console.log('Conectado ao banco de dados com sucesso')
}).catch((err)=>{
    console.log(`houve um erro. e o erro é referente à ${err}`)
})

const app = express();

app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(__dirname + '/public'))

app.get('/', HomeController.home) //renderiza a tela inicial
app.get('/number/form', NumberController.form); //formulário de reserva de numero
app.post('/number/reserve', NumberController.reserve);//faz a requição para reservar o número 

app.listen(process.env.PORT || 8080, ()=> {
    console.log('Servidor conectado!');
})