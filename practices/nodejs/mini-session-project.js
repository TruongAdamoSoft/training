const expess = require('express')
const session = require('express-session')
const { v4: uuid } = require("uuid");

const app = expess()
app.use(session ({
    name: `session-test`,
    genid: (req =>{
        console.log('created')
        return uuid()
    }),
    secret: `very-secret`,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        expires: 600000
    }
}))

app.get('/',(req,res)=>{
    res.send('home page');
    });

app.get('/api/session/login', (req, res)=>{
    req.session.user = {
        id: 1,
        name: 'adudu'
    }
    console.log(req.session)
    return res.status(200).json({status: 'success'})
})

app.get('/api/session/user', (req, res)=>{
    console.log(req.session)
    res.json({message: 'helo'})
    if(req.session.user){

        return res.status(200).json({status: 'success', session: req.session.user}).redirect('/')
    } 
    
    return res.status(500).json({status: 'error', session: 'no session'})
    
})

app.get('/destroy-session', (req, res) => {
    //destroy session
    req.session.destroy(function(err) {
        return res.status(200).json({status: 'success', session: 'cannot access session here'})
    })
})



app.listen(3000)