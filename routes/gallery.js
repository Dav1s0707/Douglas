const multer = require('multer')

module.exports = (app)=>{
    //importar o config database
    var database = require('../config/database')
    //importar model gallery
    var gallery = require('../models/gallery')

    //exibir o forms do gallery
    app.get('/gallery', async(req,res)=>{
        //conectar com o database
        database()
        //executar a busca de documentos
        var documentos = await gallery.find()
        res.render('gallery.ejs', {dados:documentos})
 
   })
   //importar a config do multer
   var upload = require('../config/multer')
   //upload do arquivo
   app.post('/gallery', (req,res)=>{
   upload(req,res,async (err)=>{
       if(err instanceof multer.MulterError){
           res.send("O arquivo é maior que 10000kb")
       }else if(err){
           res.send("Tipo de arquivo invalido")
       }else{
           
           database()   
           //gravar o nome do arquivo na coleção gallery
           var documento = await new gallery({
            arquivo:req.file.filename
           }).save()
           
           res.redirect('/gallery')
       }

   })
   
   })
}