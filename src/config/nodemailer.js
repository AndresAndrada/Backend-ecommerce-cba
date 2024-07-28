const nodemailer = require('nodemailer');
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

async function newUser(email) {
    //creacion y configuracion del envio de mail

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: GMAIL_ADMIN, // generated ethereal user
            pass: PASSWORD_ADMIN, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
        from: `"ECOMMERCE CBA👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "BIENVENID@ A ECOMMERCE CBA", // Subject line
        html: `Hola ${email}. Gracias por elegir a ECOMMERCE CBA 👏. <br></br> Te invitamos a navegar por nuestra pagina y buscar el mejor curso para vos.<br></br> Recuerda que tu curso ideal esta a solo un click ✍️📉 <br></br>
           <a href=''> Click aquí para regresar a ECOMMERCE CBA </a> - <br></br>
          `, // html body
    });
    return informacion;
};

module.exports = { newUser };