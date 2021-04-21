const AccountController=module.exports

const AccountService=require('../services/AccountService');

AccountController.ListAccountsByCostumer = async(req,res,next) =>{
    
    const params=req.params;

    try{


        const response=await AccountService.listAllAccountsFromCustomer(params.id)

        res.send(response)

    }catch(error){

        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);


    }
}


AccountController.createAccount = async(req,res,next)=>{

    const body=req.body;

    try{
        await AccountService.create(body)
        res.send({message: 'Account created'})
    }catch(error){

        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);

    }

}

AccountController.edit=async(req,res,next)=>{

    const params = req.params;
    const body= req.body;

    try{
        await AccountService.Tranferir(params.id, body);

        res.send({message: 'Transfer Have Been Succesfully'})

    }catch(error){

        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.retirarSaldo=async(req,res,next)=>{

    const params = req.params;
    const body= req.body;

    try{
        await AccountService.RetirarSaldo(params.id, body);

        res.send({message: 'The retire is succesfully'})

    }catch(error){

        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.consignar=async(req,res,next)=>{

    const params = req.params;
    const body= req.body;

    try{
        await AccountService.Consignar(params.id, body);

        res.send({message: 'Consignación existosa. '})

    }catch(error){

        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}


AccountController.delete=async(req,res,next)=>{

    const params=req.params;

    try{

        await AccountService.CancelarCuenta(params.id)
        res.send({message:'Account have been canceled'});
    }catch(error){

        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);

    }

}

    