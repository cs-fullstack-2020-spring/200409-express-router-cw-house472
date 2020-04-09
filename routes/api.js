let express= require('express')
let router = express.Router();
//import json
router.use(express.json());
//get items by id
router.get('/:item_id', (req, res)=>{
    res.send(`You attempted to view ${req.params.item_id} `)
});
//get all items
router.get('/', (req, res)=>{
    res.send('You attempted to view all items')
});

router.post('/', (req, res)=>{
    res.send(req.body)
});

module.exports = router;