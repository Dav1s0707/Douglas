const mongoose = require('mongoose')

const conexao = async() =>{
    var atlas = mongoose.connect('mongodb+srv://userAdmin:gabi1205@fiaptecnico.uzpbf.mongodb.net/matheus?retryWrites=true&w=majority')
}

module.exports = conexao