const express = require("express")
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

let plNames = ["c", "c++"]
app.get('/', (req, res) => {
   res.status(200).render('index',{pageTitle: "Homepage", plNames})
})
app.post('/', (req, res) => {
   plNames.push(req.body.plName)
   res.redirect('/')
})
app.get('/contact', (req, res) => {
   res.status(200).render('contact',{pageTitle: "Contact Us"})
})
const PORT = 3001
app.listen(PORT, () => {
   console.log(`server is ruuning on port ${PORT}`)
})