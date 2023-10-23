module.exports = {
    home: (req, res) =>{
        return res.render('index', {

            title: `Home - EJC`,
            style: `home.css`,
            script: `home.js`
        })
    }
}