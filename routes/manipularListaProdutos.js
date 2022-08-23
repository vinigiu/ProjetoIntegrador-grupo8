const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const manipularListaProdutosController = require('../controllers/manipularListaProdutosController');

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        let caminho = path.join(__dirname, '../public/images/products');
        callback(null, caminho)
    },
    filename:(req,file,callback) => {
        let nome = Date.now() + file.originalname;
        callback(null, nome)
    }
});

const upload = multer ({storage:storage});


router.get('/criar', manipularListaProdutosController.create);
router.post('/criar', upload.fields([{name:'img1', maxCount:1},{name:'img2', maxCount:1},{name:'img3', maxCount:1},{name:'img4', maxCount:1}]), manipularListaProdutosController.saveCriar);

router.get('/deletar', manipularListaProdutosController.deletar);
router.post('/deletar', manipularListaProdutosController.saveDeletar);

module.exports = router;