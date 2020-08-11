
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {

    const viajes = await  Viaje.findAll({
        limit: 3 //solo 3 resultados en la vista index
    })

    const testimoniales = await Testimonial.findAll({
        limit: 3 //solo 3 resultados en la vista index
    })
    
    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}