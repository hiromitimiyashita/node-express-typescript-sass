import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.render('home', {nome: 'Alex'});
});

router.get('/contato', ()=>{});

export default router;