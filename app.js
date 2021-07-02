console.clear()

const { argv } = require('yargs')
const { crearArchivo } = require('./helpers/multiplicar')
const args = require('./config/yargs')
require('colors')

crearArchivo(args.b, args.l, args.h)
    .then( msg => console.log(`El archivo ${msg} fue creado`.bgGreen))
    .catch(err => console.log(err.bgRed))