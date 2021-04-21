const CustomerService=module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

CustomerService.create=async (customer)=>{

    const customerToFind= await CustomerRepository.findById(customer.id)


    if(customerToFind.length >0 ){

        throw new Error('Customer already exist')
    }

    await CustomerRepository.create(customer)
}

CustomerService.editar=async(id,customer)=>{

    const customerToFind=await CustomerRepository.findById(id)

    if(customerToFind.length===0){
        throw new Error('This customer does not exist')

    }

    await CustomerRepository.edit(id,customer)
}

CustomerService.eliminar=async(idCustomer)=>{

    const customerToFind=await CustomerRepository.findById(idCustomer)
    
    if(customerToFind.length===0){
        throw new Error('This customer does not exist')
    }

    const list=await AccountRepository.listAccountsByCustomer(idCustomer)

    console.log(list)

    if(list.length>0){

        throw new Error('We can not delete a customer with existing accounts')
    }

    await CustomerRepository.delete(idCustomer)

}

CustomerService.findById=async(id)=>{

    const customerToFind = await CustomerRepository.findById(id)

    if(customerToFind.length===0){
        return undefined;
    }

    return customerToFind[0];
}




