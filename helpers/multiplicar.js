const fs = require('fs')
require('colors')

const crearArchivosByAsync = async (base) => {
    console.log(`
    ================================================.
                   Tabla del ${base}
    ================================================
    `)
    try {
        let baseFinal = base + 10
        for (base; base <= baseFinal; base++) {
            let salida = ''
    
            for (let i = 1; i <= 10; i++) {
                salida += `${base} x ${i} = ${base * i}\n`
            }
            await fs.writeFileSync(`./TABLES/tabla-${base}.txt`, salida)
        }
        return `Archivos Creados`
    } catch (err) {
        throw err
    }
}
const crearArchivosByPromesas = (base) => {
    console.log(`
    ================================================
                   Tabla del ${base}
    ================================================
    `)
    return new Promise((resolve, reject) => {
        try {
            let baseFinal = base + 10
            for (base; base <= baseFinal; base++) {
                let salida = ''
        
                for (let i = 1; i <= 10; i++) {
                    salida += `${base} x ${i} = ${base * i}\n`
                }
                fs.writeFileSync(`./TABLES/tabla-${base}.txt`, salida)
                resolve(`tabla-${base}`)
            }   
        } catch (error) {
            reject(error)
        }
    })
}
const crearArchivo = async (base, listar, hasta) => {
    try {
        let salida = ''
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        if(listar) {
            console.log(`
            ================================================
            ============== Tabla del ${base} =====================
            ================================================\n`.green)
            console.log(salida.rainbow)
        }
        fs.writeFileSync(`./documents/tabla-${base}.txt`, salida)
        return`tabla-${base}`.magenta
    } catch (error) {
        throw error
    }
} 
module.exports = {
    crearArchivosByAsync,
    crearArchivosByPromesas,
    crearArchivo
}