import Card from './Components/Card'
import Button from './Components/Button'  
import {Provider} from './Contexto/Contexto'
import soleado from './Components/Resources/soleado.png'
import black from './Components/Resources/black.png'
import './App.css';

const App = () => { 

  const cambiarTemaClaro = () =>{
    document.body.style.backgroundColor = '#070d1f'
  }
  const cambiarTemaNegro = () =>{
    document.body.style.backgroundColor = 'black'
  }

  return (
    <div className="App">
      <div className="fondoContainer">
        <div className="fondoWrapper">
        <button className="btn1" onClick={cambiarTemaClaro}>
        <img src={soleado} alt="btn" />
        </button>
        <button className="btn2" onClick={cambiarTemaNegro}>
        <img src={black} alt="btn" />
        </button>
        </div>
      </div>
    <Provider>
      <Card/>
      <Button/>
    </Provider>
    </div>

  );
}

export default App;
