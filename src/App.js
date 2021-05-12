//import './App.css';
import Phones from "./Phones";

const phone = '+1 917 963 13 09'
const phone2 = '+1 917 963 24 11'

const person = {
    name: 'Iurii',
    phone: '+1 917 9631309',

}

function App() {
    return (
        <div className="App">
            Component APP
            <Phones phoneNumber={phone}
                    phoneNumber2={phone2}
                    person={person}/>
        </div>
    );
}

export default App;
