import React, {useState, useEffect} from "react";
import axios, { Axios } from "axios";
import "./index.css";

const MedicosList = () => {
    const [medicos, setMedicos] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMedicos = async () =>{
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log('Requisição bem-sucedida', Response);
                setMedicos(response.data);
               } catch (error) {
                console.error('Erro ao buscar medicos:', error);
                setError('Erro ao buscar medicos. Por favor, tente novamente.');
               }finally{
                setloading(false);
               }
        };
        fetchMedicos();
    
    },[]);

    if (loading){
        return <div className="loading">Carregando...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>
    }

    return (
        <div className="medicos-lista">
            <h1>Lista de Medicos</h1>
            {medicos.length === 0 ?(
                <p>nenhum medico encontrado.</p>
            ) : (
                <ul>
                    {medicos.map(medico => (
                        <li key={medico.id} className="medico-item">
                          <h2>{medico.name}</h2>
                          <p>Email: {medico.email}</p>
                          <p>Telefone: {medico.phone}</p>
                          <p>Website: {medico.website}</p>
                          <p>Endereço: {medico.address.street}, {medico.address.city} - {medico.address.zipcode}</p>
                        </li>

                    ))}
                </ul>
            )}
        </div>

    );


}


export default MedicosList;