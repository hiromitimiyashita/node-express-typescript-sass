import { Request, Response } from 'express';
//import { User } from '../models/User';


/*
    Página Inicial
*/
export const index = async (req: Request, res: Response) => {

    // Fazer alguma coisa aqui.

   // const list = await User.findAll();

    const data = {
        pageTitle: 'Página Inicial',
        user: {
            myName: 'Alex'
        },
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



