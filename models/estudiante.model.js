import { pool } from '../database/connection.js';


const obtenerTodos = async () => {
    const { rows } = await pool.query('SELECT * FROM ESTUDIANTES')
    return rows
}

const obtenerEstudiante = async (rut) => {
    const query = {
        text: 'SELECT * FROM ESTUDIANTES WHERE RUT = $1',
        values: [rut]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const registraEstudiante = async (nombre, curso, rut, nivel) => {
    const query = {
        text: 'INSERT INTO ESTUDIANTES VALUES ($1, $2, $3, $4) RETURNING *',
        values: [nombre, curso, rut, nivel]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const editarEstudiante = async (nombre, curso, rut, nivel) => {
    const query = {
        text: 'UPDATE ESTUDIANTES SET NOMBRE = $1, CURSO = $2, NIVEL = $3 WHERE RUT = $4 RETURNING *',
        values: [nombre,curso,nivel,rut] 
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const borrarEstudiante = async (rut) => {
    const query = {
        text: 'DELETE FROM ESTUDIANTES WHERE RUT = $1 RETURNING *',
        values: [rut]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}


export const estudianteModel = {
    obtenerTodos,
    obtenerEstudiante,
    registraEstudiante,
    editarEstudiante,
    borrarEstudiante
}