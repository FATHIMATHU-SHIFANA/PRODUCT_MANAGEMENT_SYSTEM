import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from './COMPONENT/Tables';
import CreateProduct from './COMPONENT/CreateProduct';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Edit from './COMPONENT/Edit';
import Login from './COMPONENT/Login';
import './COMPONENT/Login.css'
import './COMPONENT/Tables.css'
import './COMPONENT/Form.css'

const sample=createContext()
function App() {
  const [product, setproduct] = useState([])
  const [edit, setedit] = useState([])
  const [tab, settab] = useState([])
 
  const productapi="https://dummyjson.com/products"
  useEffect(() => {
      axios.get(productapi).then((res)=>setproduct(res.data.products))
  }, [])
  return (
    <div>
      <sample.Provider value={{product, setproduct,edit, setedit,tab, settab}}>
      <BrowserRouter>
      <Routes>
      <Route path="/"element={ <Login/>}/>
      <Route path="/tables" element={<Tables />} />
      <Route path="/createproduct" element={<CreateProduct/>}/>
      <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
      </sample.Provider>
    </div>
  );
}

export default App;
export {sample}
