

import React from 'react'
import { useGlobalState } from '../context/NewsContext'
import { New } from './New';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export const ListadoNews = () => {

    const { noticias,totalNews, handleChangePagination,pag } = useGlobalState();

    const totalPags = Math.ceil( totalNews / 20);
    

  return (
    <div className=''>
        <h1 className='font-bold mt-10 uppercase text-3xl text-indigo-600'>Last News </h1>


        {
            noticias.map((noticia,index) => 
                <New key={index}  noticia={noticia} />    
            )
        }

        
        <Stack 
            sx={{
                marginY:5
            }}
            spacing={2}
            direction={'row'}
            justifyContent='center'
            alignItems='center'
        >
            <Pagination 
                count={totalPags} 
                color='primary' 
                onChange={handleChangePagination}
                page={pag}
            />
            
        </Stack>

        
    </div>
  )
}
