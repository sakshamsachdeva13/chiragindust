const express = require('express')
const BodyParser = require('body-parser')
const userfeedback = require('./db/feedback')
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express() ;
  
// parsers
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended : true}));



// view engine and static serving
app.set('views' , __dirname + '/views')
app.set('view-engine' , 'hbs') ;
app.engine('hbs' , exphbs({defaultLayout : 'Layout' , layoutsDir : __dirname + '/views/Layout'}))
app.use(express.static(path.join(__dirname, '/public')));



// serving routes
app.get('/' , (req , res) => {

    res.render('index.hbs' , {css : "index.css"})
})

app.get('/feedback' , (req , res) => {

    res.render('feedback.hbs' , {css : "feedback.css"});

})



app.get('/about' , (req , res) => {

    res.render('about.hbs' , {css : "about.css"})
})



app.get('/products' , (req , res) => {

    res.render('products.hbs' , {css : "products.css"}) 
})



app.post('/feedback' , (req , res) => {

  let feed = new userfeedback({

    customername : req.body.name , 
    Billno : req.body.billno , 
    Contactno : req.body.contactno , 
    feedBack : req.body.feedback, 
  }) ; 

   feed.save()
   .then(result => {
       console.log(result);
       res.redirect('/feedback');
   })
   .catch(error => {
       console.log(error)

   })
} )



// db connection
mongoose.connect('mongodb://localhost/test');


// db port
app.listen(9000 , () => {

    console.log(' app chlri hai ');
})
