import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './components/Footer/Footer'
import mens_banner from '../src/components/assets/banner_mens.png'
import women_banner from '../src/components/assets/banner_women.png'
import kids_banner from '../src/components/assets/banner_kids.png'

function App() {

  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Shop/>}/>
      <Route path='/men' element= {<ShopCategory banner= {mens_banner} category="Men" />}/>
      <Route path='/women' element= {<ShopCategory banner= {women_banner} category="women"/>}/>
      <Route path='/kids' element= {<ShopCategory banner= {kids_banner} category="Kid"/>}/>
      <Route path='/login' element= {<LoginSignUp/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/product' element= {<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/' element= {<Shop/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

   </div>
  )
}

export default App
