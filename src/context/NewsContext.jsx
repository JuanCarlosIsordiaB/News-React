import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';

export const Context = createContext();

export const useGlobalState = () => {
    const data = useContext(Context);
    return data;
}


const NewsContext = ({children}) => {
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);

    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

        const {data} = await axios(url);
        setNoticias(data.articles);
    } 

    useEffect(() => {
        consultarAPI();
    }, [categoria])
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
        console.log(categoria);
    }


  return (
    <Context.Provider value={{
            categoria,
            handleChangeCategoria
        }}
    >
        {children}
    </Context.Provider>
  )
}

export default NewsContext;
