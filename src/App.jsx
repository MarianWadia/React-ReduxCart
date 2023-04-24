import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={ProductListing}/>
        <Route path='/product/:id'Component={ProductDetails}/> 
      </Routes>
    </div>
  );
}

export default App;
