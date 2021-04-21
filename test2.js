
const AccountRepository = require('./app/repositories/AccountRepository')
const ClienteRepository = require('./app/repositories/CustomerRepository')



async function probandoCrearCuenta(){

   await AccountRepository.create({
        
        
        amount: 30000,
        customersid:'1234',
        id:'888',
        openedat: new Date()
        
    })

}

async function probandoListar(){

    const list=await AccountRepository.listAccountsByCustomer('1234')
    console.log(list)
}

async function probandoEliminar(){

   await ClienteRepository.delete('777')
}

probandoEliminar().then(console.log('OK'))