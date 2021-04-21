const CustomerService = require ('./app/services/CustomerService')

async function probarCrearCliente(){

    await CustomerService.create({

    name:'José Luis',
    lastname:'Hurtado Villa',
    id:'1234',
    email:'juan@juan.com'

    })
}

async function probarEditar(){

    await CustomerService.editar('7772',{

    name:'José Luis',
    lastname:'Hurtado',
    })

}

async function probarEliminar(){

    await CustomerService.eliminar('1234')
}


async function buscarCliente(){

   const customerToFind=await CustomerService.findById('1234')
    console.log(customerToFind)
}

//probarCrearCliente().then(console.log('OK'))
//probarEliminar().then(console.log('OK'))
//buscarCliente().then(console.log('OK'))

