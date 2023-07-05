import express, { response } from 'express';
import 'dotenv/config'
import cors from 'cors';
import morgan from 'morgan';

console.log('primer clg node')

//creamos una instancia de express

const app = express();

//configuramos el puerto en el que se va a ejecutar nuestro back end

app.set('port', process.env.PORT || 5050);

//inicializamos nuestro back end

app.listen(app.get('port'), () => {
	console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}).on('error', () => {
	console.log('ERROR:', error);
	process.exit(1);
})

//MIDDLEWARES: config extras del backend antes de que se ejecuten las rutas

//1- Middle nativos de express

app.use(express.json()); //permite recibir obj en formato json
app.use(express.urlencoded({ extended: true })); //permite recibir parametros en las rutas

//2- Middle de terceros

app.use(morgan('dev'));//brinda detalles en nuestra terminal
app.use(cors());//permite recibir peticiones remotas


//Primer endpoint o ruta para prueba

app.get('/test', (req, res)=> {
	console.log('ENTRO EN GET TEST')
	//console.log('Objeto req:', req);
	//res.send({'Aqui va la respuesta'})
	res.status(200).json({ message: "Aqui iria mi respuesta" });
})