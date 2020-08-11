
const Testimonial = require('../models/Testimoniales');

//todos los testimoniales
exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })  
}

//Al llenar el formulario
exports.agregarTestimonial = async (req, res) => {
    //console.log(req.body);
    //Validar campos llenos
    let { nombre, correo, mensaje } = req.body;
    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu Correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu Mensaje' })
    }

    //Revisar por errores
    if (errores.length > 0) {
        //mostrar errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    } else {
        //Almacenar en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
            .then(testimoniales => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}