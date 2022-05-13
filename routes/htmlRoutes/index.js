const path = require('path');
const router = require('express').Router();

// look for and host index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../lib/public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../lib/public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../lib/public/zookeepers.html'));
});

module.exports = router;