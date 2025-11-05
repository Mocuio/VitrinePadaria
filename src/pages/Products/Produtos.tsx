import React from 'react'
import Card from "../../components/ProductCard/Card";
import './products.css'
import Footer from '../../components/FooterProdutos/FooterProdutos';
const produtos = () => {
    return (
        <>
         <main className='produtos-page'>
            <section className='cardSectionStyle'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            
            </section>
        </main>
        <Footer/>
        </>
       
    )
}
export default produtos
