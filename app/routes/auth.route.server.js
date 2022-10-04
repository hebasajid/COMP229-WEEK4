import {Router} from 'express';

const router = Router();

//now gonna have a few routes

//display login page
router.get('/login', DisplayLoginPage);
//process login pagE:
router.post('/login', ProcessLoginPage);

//display registartion page
router.get('/register', DisplayRegisterPage);
//proces reg page
router.post('/registration', ProcessRegisterPage);

//process logout page
router.get('/logout', ProcessLogOutPage);
//dont need a logout page - just a button

export default router;