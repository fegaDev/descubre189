import React,{createContext,useState}  from 'react'
import {Data} from '../Data/Data'

export const handleInfo = createContext();
export const handleButton = createContext();
export const handleTheme = createContext();

export const Provider =({children}) => {
    const random = Math.floor(Math.random()*Data.length);
    const [frase, setFrase] = useState(Data[random].frase);
    const [autor, setAutor] = useState(Data[random].autor);
    const [color, setFondo] = useState('blue');

    const cambiar = () =>{
        const random = Math.floor(Math.random()*Data.length);
        const randomValue = Data[random];
        setFrase(randomValue.frase)
        setAutor(randomValue.autor)
    }
    
    const theme = () =>{
        if(color === 'white'){
            setFondo('blue')
            console.log(color)
        }
        else if(color === 'blue'){
            setFondo('white')
            console.log(color)
        }
    }


    return(
        <handleInfo.Provider value={{frase,autor}}>
            <handleButton.Provider value={{cambiar}}>
        <handleTheme.Provider value={{theme , color}}>
                {children}
        </handleTheme.Provider>
            </handleButton.Provider>
        </handleInfo.Provider>
    )
}