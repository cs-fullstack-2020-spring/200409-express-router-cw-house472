let express= require('express')
let router = express.Router();


router.use(express.json());


router.get('/:userName' ,(req, res)=>{
res.send(`Welcome Back ${req.params.userName}`)

});

router.delete('/:userName' ,(req, res)=>{
    res.send(`You attempted to delete ${req.params.userName}`)
});

router.put('/', (req, res)=>{
    res.send(req.body)
});

module.exports=router;
