import { estudianteModel } from '../models/estudiante.model.js'


//obtener todos los estudiantes registrados

const todosEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudianteModel.obtenerTodos()
        return res.json(estudiantes)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error interno del servidor'})
        
    } 
}

//obtener estudiante por rut

const estudianteObtenido = async (req, res) => {
    try {
        const {rut} = req.params
        const estudiante = await estudianteModel.obtenerEstudiante(rut)
        if(!estudiante){
            res.status(404).json({error: 'Estudiante no encontrado'})
        }
        return res.json(estudiante)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error interno del servidor'})
    }
}

// registrar estudiante

const estudianteRegistrado = async (req,res) =>{
    try {
        const {nombre, curso, rut, nivel} = req.body
        const registrar = await estudianteModel.registraEstudiante(nombre, curso, rut, nivel)
        return res.json(registrar)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error interno del servidor'})
    }
}

// editar estudiante

const estudianteActualizado = async (req,res) =>{
    try {
        const {rut} = req.params
        const {nombre, curso, nivel} = req.body
        const editar = await estudianteModel.editarEstudiante(nombre, curso, rut, nivel)
        if(!editar){
            res.status(404).json({ error: 'Estudiante no encontrado'})
        }
        return res.json(editar)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'}) 
    }
}

// borrar estudiante

const estudianteBorrado = async (req, res) =>{
    try {
        const {rut} = req.params
        const borrar = await estudianteModel.borrarEstudiante(rut)
        if(!borrar){
            res.status(404).json({error: 'Estudiante no encontrado'})
        }
        return res.json(borrar)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'})
        
    }
}


export const estudianteController = {
    todosEstudiantes,
    estudianteObtenido,
    estudianteRegistrado,
    estudianteActualizado,
    estudianteBorrado
}