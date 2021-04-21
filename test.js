//importando el repositorio
const ClienteRepository = require('./app/repositories/CustomerRepository')
console.log('probando....')

ClienteRepository.create({
    name:'Manuel',
    lastname:'ferrer',
    id:'123',
    email:'juan@juan.com'
}).then(console.log)//para que el programa espere a que la operacion termine...

async function probandoBuscar(){

    const cliente=await ClienteRepository.findById('1234')
    console.log(cliente)
}

async function probandoEditar(){
    
    await ClienteRepository.edit('1234',{
        name:'jose',
        lastname:'peres',
    })
    
}
