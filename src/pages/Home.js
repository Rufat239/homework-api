import React, { Component } from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import SingleCard from '../components/SingleCard'
import Products from './Products'

export class Home extends Component {
  render() {
    return (
        <>
      <div className='bg-image'>
        <Nav />
        <Header />
      </div>
      <SingleCard />
      </>
      
      
    )
  }
}

export default Home