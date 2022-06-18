const Router = require('express').Router;
const router = Router();
const path = require('path');
const swaggerConfig = require('../docs/swaggerConfig')

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./docs/index.html'));
})

router.get('/swagger-config', (req, res) => {
    res.status(200).json(swaggerConfig);
})



module.exports = router;