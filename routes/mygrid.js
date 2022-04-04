module.exports = (app)=>{
    //importar a cpnfig do database
    var conexao = require('../config/database')
    //executar conexao
    conexao()
    //importar o modelo mygrid
    var mygrid = require('../models/mygrid')

    //abrir o forms
    app.get('/mygrid',async(req,res)=>{
        var resultado = await mygrid.find()
        res.render('mygrid.ejs',{dados:resultado})
        //console.log(resultado)
    })

    //gravar as infos do forms no banco de dados
    app.post('/mygrid',(req,res)=>{
        var documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/mygrid')})
        .catch(()=>{res.send('Não deu certo parcero')})
    })
}