const AccountService=module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')


AccountService.create=async(accounts)=>{

    console.log(accounts.customersid)
    const customerToMake= await CustomerRepository.findById(accounts.customersid)

    if(customerToMake.length===0){
        throw new Error('Customer does not exist')
        
    }

    const listAccountsFromCustomer= await AccountRepository.listAccountsByCustomer(accounts.customersid)

    if(listAccountsFromCustomer.length>=3){
        throw new Error('More than 3 accounts can not be create!')
    }

    accounts.openedat = new Date();
    accounts.amount=0;
    await AccountRepository.create(accounts);

}

AccountService.listAllAccountsFromCustomer=async(id)=>{

    const customerToMake= await CustomerRepository.findById(id)

    if(customerToMake.length===0){
        throw new Error('Customer does not exist')
        
    }

    const list=await AccountRepository.listAccountsByCustomer(id)

    if(list.length<0){
        console.log("There're not Accounts")
    }

    return list;
}

AccountService.CancelarCuenta=async(id)=>{

    const accountExist=await AccountRepository.findById(id)



    if(accountExist.length===0){
        throw new Error('This Account does not exist')
    }

    console.log(accountExist[0].amount)

    if(accountExist[0].amount>0){
        throw new Error('This Account can not be canceled because it has money')
    }

    await AccountRepository.delete(id)

}

AccountService.RetirarSaldo=async(id,account)=>{

    const accountExist=await AccountRepository.findById(id)

    if(accountExist.length===0){
        throw new Error('This Account does not exist')
    }

    if(accountExist[0].amount<account.amount){
        throw new Error('You dont have the enougth money to make this transaccion')
    }
    
    const newMonto=accountExist[0].amount-account.amount;
    account.amount=newMonto;

    await AccountRepository.edit(id,account)

}

AccountService.Consignar=async(id,account)=>{

    const accountExist=await AccountRepository.findById(id)

    if(accountExist.length===0){
        throw new Error('This Account does not exist')
    }
    
    const newMonto=accountExist[0].amount+account.amount;
    account.amount=newMonto;

    await AccountRepository.edit(id,account)

}

AccountService.Tranferir=async(id,account)=>{

    const accountExist=await AccountRepository.findById(id)

    const accountExist2=await AccountRepository.findById(account.id)

    if(accountExist.length===0){
        throw new Error('The first Account does not exist')
    }

    if(accountExist2.length===0){
        throw new Error('The second Account does not exist')
    }

    if(accountExist[0].amount<account.amount){
        throw new Error('You dont have the enougth money to make this transaccion')
    }
    
    accountExist[0].amount=accountExist[0].amount-account.amount;
    const newMonto2=accountExist2[0].amount+account.amount

    account.amount=newMonto2


    await AccountRepository.edit(id,accountExist[0])
    await AccountRepository.edit(account.id,account)
    
}