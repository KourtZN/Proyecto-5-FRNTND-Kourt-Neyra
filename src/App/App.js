import {Header} from '../Components/Header/Header'
import './App.css';


function App(props) {
  return (
    <div>

<Header/>

    <main >
    {props.children}
    </main>
  </div>
  );
}

export default App;
