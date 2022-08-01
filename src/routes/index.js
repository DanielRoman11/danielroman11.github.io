import { Router } from "express";
const router = Router()

router.get('/', (req,res) => res.render('index'))
router.get('/contact', (req,res) => res.render('contact'))
router.get('/experience', (req,res) => res.render('experience'))
router.get('/formation', (req,res) => res.render('formation'))
router.get('/knowledge', (req,res) => res.render('knowledge'))

export default router