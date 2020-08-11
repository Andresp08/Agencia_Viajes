
const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    //metodos de Sequelize para interactuar con la bd
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes: viajes
    }); 
        // .then(viajes => res.render('viajes', {
        //     pagina: 'Próximos Viajes',
        //     viajes: viajes
        // }))
        // .catch(error => console.log(error));
}

//mostrar un viaje en especifico
exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
}