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
    const [pag, setPag] = useState(1);
    const [totalNews, setTotalNews] = useState(0);


    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
    
            const {data} = await axios(url);
            setNoticias(data.articles);
            setTotalNews(data.totalResults);
            console.log(totalNews);
            setPag(1);
        } 
        consultarAPI();
    }, [categoria])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pag}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
    
            const {data} = await axios(url);
            setNoticias(data.articles);
            setTotalNews(data.totalResults);
            
            
        } 
        consultarAPI();
    }, [pag])
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
        console.log(categoria);
    }

    const handleChangePagination = (e,valor) => {
        setPag(valor);
        window.scrollTo(0, 0); // desplazar hacia arriba
    }


  return (
    <Context.Provider value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNews,
            handleChangePagination,
            pag
        }}
    >
        {children}
    </Context.Provider>
  )
}

export default NewsContext;
