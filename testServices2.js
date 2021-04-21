const AccountService = require ('./app/services/AccountService')

async function probarCrearCliente(){

    await AccountService.create({
           
    amount: 30000,
    customersid:'123',
    id:'222',
    openedat: new Date()
        
    })
}

async function mostrarCuentas(){

    const cuentas= await AccountService.listAllAccountsFromCustomer('1234')

    console.log(cuentas)
}

async function borrarCuenta(){

    await AccountService.CancelarCuenta('888')
}

async function probarEditar(){

    await AccountService.Tranferir('1',{

    amount: 4000,
    id: '2'
    })

}



//robarCrearCliente().then(console.log('OK'))
probarEditar().then(console.log('OK'))