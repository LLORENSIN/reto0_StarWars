import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/personaje/'

const EditPersonaje = () => {

    const [nombre, setNombre] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [color_pelo, setColor_Pelo] = useState('')
    const [color_piel, setColor_Piel] = useState('')
    const [color_ojos, setColor_ojos] = useState('')
    const [anyo_nacimiento, setAnyo_nacimiento] = useState('')
    const [genero, setGenero] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            altura: altura,
            peso: peso,
            color_pelo: color_pelo,
            color_piel: color_piel,
            color_ojos: color_ojos,
            anyo_nacimiento: anyo_nacimiento,
            genero: genero
        })
        navigate('/')
    }

    useEffect( () =>{

        const getPersonajeById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setAltura(response.data.altura)
            setPeso(response.data.peso)
            setColor_Pelo(response.data.color_pelo)
            setColor_Piel(response.data.color_piel)
            setColor_ojos(response.data.color_ojos)
            setAnyo_nacimiento(response.data.anyo_nacimiento)
            setGenero(response.data.genero)


        }
        getPersonajeById()
        
    }, [])
  return (
    <div>
        <h2>Editar personaje</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Altura</label>
                <input 
                    value={altura} 
                    onChange={ (e)=> setAltura(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Peso</label>
                <input 
                    value={peso} 
                    onChange={ (e)=> setPeso(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Color de Pelo</label>
                <input 
                    value={color_pelo} 
                    onChange={ (e)=> setColor_Pelo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Color de Piel</label>
                <input 
                    value={color_piel} 
                    onChange={ (e)=> setColor_Piel(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Color de Ojos</label>
                <input 
                    value={color_ojos} 
                    onChange={ (e)=> setColor_ojos(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Año de Nacimiento</label>
                <input 
                    value={anyo_nacimiento} 
                    onChange={ (e)=> setAnyo_nacimiento(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Genero</label>
                <input 
                    value={genero} 
                    onChange={ (e)=> setGenero(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditPersonaje