const { json } = require('express');
const express = require('express');
const app = express();
const hbs = require('hbs');
 
const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public' ));

//express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto)=>{
    
    let palabras = texto.split(' ');
    palabras.forEach((palabra,index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
        return palabras.join(' ');
    });
})


app.get('/',  (req, res)=> {

    res.render('home', {
        nombre: 'agustin'
    });
})

app.get('/about',  (req, res)=> {

    res.render('about', {
        nombre: 'Agustin'
    });
})
 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`)
});