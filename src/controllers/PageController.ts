import { Request, Response } from 'express';



/*
    Página Inicial
*/
export const index = (req: Request, res: Response) => {

    // Fazer alguma coisa aqui.

    const data = {
        pageTitle: 'Página Inicial',
        user: {
            myName: 'Alex'
        }
            
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



