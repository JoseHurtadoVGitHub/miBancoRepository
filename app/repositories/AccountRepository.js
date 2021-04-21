const AccountRepository = module.exports
const DB= require('../config/database')



AccountRepository.create=(accounts)=>{

    return DB('accounts').insert(accounts)
}


AccountRepository.listAccountsByCustomer = (customerId)=>{

    return DB('accounts').where({customersid:customerId}).select('*')

}

AccountRepository.findById=(Id)=>{

    return DB('accounts').where({id: Id}).select('*')
}

AccountRepository.delete= (Id)=>{

    return DB('accounts').where({id: Id}).del()
}

AccountRepository.edit = (Id,account)=>{

    return DB('accounts').where({id:Id}).update(account)
}

