import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ListaDeProductos from './components/ListaDeProductos';

function App() {
  const arrayDeLink = [
    {nombre:'Home', enlace: '/'}, 
    {nombre:'Carrito', enlace: '/carrito'},  
    {nombre:'Merch', enlace: '/merch'},  
    {nombre:'Servicios', enlace: '/servicios'},  
    {nombre:'Contacto', enlace: '/contacto'}, 
   ];
  return (
    <div>
    <NavBar arrayDeLink={arrayDeLink} tamaño={'20px'}/>
    <ItemListContainer/>
    <ListaDeProductos/>
    </div>
  );
}

export default App;
