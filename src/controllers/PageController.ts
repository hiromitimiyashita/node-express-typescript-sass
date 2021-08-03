import { Request, Response } from 'express';
//import { User } from '../models/User';
import { sequelize } from '../instances/mysql';


/*
    Página Inicial
*/
export const index = async (req: Request, res: Response) => {

    // Fazer alguma coisa aqui.


    try {

        await sequelize.authenticate();
        console.log('conexao realizada com sucesso');
        

    } catch (e) {
        console.log('Aconteu  erros: ', e)
    }

    //const list = await User.findAll();

    const data = {
        pageTitle: 'Página Inicial',
        user: {
            myName: 'Alex'
        }
//        list
    };
    

    res.render('pages/home', data);
};

/*
    Página Sobre
*/
export const sobre = (req: Request, res: Response) => {

    const data = {
        pageTitle: 'Página Sobre',
       
    };

    // Fazer alguma coisa aqui.



    res.render('pages/sobre', data);
}



