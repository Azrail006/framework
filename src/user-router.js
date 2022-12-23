const Router = require('../framework/Router');

const router = new Router()

const users = [
    {id: 1, name: 'Ulbi tv'},
    {id: 2, name: 'Vasya'},
]

router.get('/users', (req, res) => {
    console.log(req.params);
    res.send(users);
})


router.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push(user)
    res.send(users)
})

module.exports = router