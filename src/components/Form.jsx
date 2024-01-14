import React from 'react';

const CATEGORIAS = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
];

export const Form = () => {
  return (
    <div className="m-4">
      <form action="">
        
        <select 
            name="" 
            id=""
            className='border border-gray-300 rounded-md w-full text-center py-3 text-gray-600'
        >
            <option value="" className='text-gray-300' disabled>--- Select a category ---</option>
          {
            CATEGORIAS.map(categoria =>
                <option
                    className='text-gray-600   '
                    key={categoria.value}
                    value={categoria.value}
                >
                    {categoria.label} 
                </option>    
            )
          }  
        </select>
        <button
            className='bg-indigo-500 w-full mt-3 py-3 rounded-md text-white font-bold uppercase hover:bg-indigo-900 transition-all'
        >
            Find News
        </button>
        
        
        
      </form>
    </div>
  );
};


