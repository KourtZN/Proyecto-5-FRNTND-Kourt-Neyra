import {Header} from '../Components/Header/Header'
import './App.css';

//importar provider para context
import {CarritoProvider} from '../context/CarritoContext'


function App(props) {
  return (
    <CarritoProvider>
    <div>

<Header/>

    <main >
    {props.children}
    </main>
  </div>
  </CarritoProvider>
  );
}

export default App;
