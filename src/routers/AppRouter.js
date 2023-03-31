import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Straps from '../pages/Straps'
import PowerBanks from '../pages/PowerBanks'
import Home from '../pages/Home'
import Cables from '../pages/Cables'
import MagSafe from '../pages/MagSafe'
import Charger from '../pages/Charger'
import More from '../pages/More'
import Products from '../pages/Products'


class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/straps' element={<Straps />}></Route>
        <Route path='/powerBanks' element={<PowerBanks />}></Route>
        <Route path='/cables' element={<Cables />}></Route>
        <Route path='/magSafe' element={<MagSafe />}></Route>
        <Route path='/charger' element={<Charger />}></Route>
        <Route path='/more' element={<More />}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRouter