const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('./Users', userRoutes);
router.use('/Projects', projectRoutes);

module.exports = router;
