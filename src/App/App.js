import {Header} from '../Components/Header/Header'
import './App.css';

//importar provider para context
import {CarritoProvider} from '../context/CarritoContext'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'


function App(props) {
  return (
    <CarritoProvider>
      <PayPalScriptProvider option={{"client-id":"AUD-e1Tko2l4Vs8mG7Qrdt74pe_H4TJxz734-D8kBpRvHqMYOJaqV_RGQVWdEQr2fqvzDtUyBteGY7kT"}}>
        <div>
          <Header/>
          <main >
            {props.children}
          </main>
        </div>
    </PayPalScriptProvider>
  </CarritoProvider>
  );
}

export default App;
