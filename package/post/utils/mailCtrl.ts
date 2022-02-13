import nodemailer from "nodemailer";

export class Mailer {

    protected transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "sistemastnoradio@gmail.com",
            pass: "sistemasTNOradio"
        }
    })

    mailOptions = {
        from: 'Remitente',
        to: 'elbergjessica@gmail.com',
        subject: 'Asunto',
        text: 'Contenido del email'
    };

    public async sendEmail() {

    }
}