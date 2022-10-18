import { Router } from "express";

import {  DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    ProcessContactsEditPage, 
    DisplayContactsEditPage, 
    ProcessContactsDelete} from "../controllers/contacts.controller.server.js";

    import { AuthGuard } from "../utils/index.js"; //IMPORTING MIDDLEWARE

const router = Router();

router.get('/contact-list',  DisplayContactsList);
router.get('/contact-add', AuthGuard, DisplayContactsAddPage);
router.post('/contact-add', AuthGuard, ProcessContactsAddPage);
router.post('/contact-edit/:id', AuthGuard, ProcessContactsEditPage); //to define parameters id so here we use :id
router.get('/contact-edit/:id', AuthGuard, DisplayContactsEditPage);
router.get('/contact-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;