import React, { Fragment, useState } from 'react';
import Burger from "./Burger"
import Cart from "./Cart"
import "./styles/styles.css"

// IMPORT DE IMAGENES DE HAMBURGESAS
import Hamburger from "./images/Hamburger.png"

function App() {

  // Estado de burgers con listado de burgers
  const [burgers, setBurgers] = useState ([
    { id: 1, image: Hamburger, nombre: 'Burger Completa', precio: 300 },
    {id: 2, image: Hamburger, nombre: 'Burger con Cheddar', precio: 280},
    {id: 3, image: Hamburger, nombre: 'Burger con jamón y queso', precio: 200},
    {id: 4, image: Hamburger, nombre: 'Burger con bacon', precio: 230},
    {id: 5, image: Hamburger, nombre: 'Burger de pollo completa', precio: 250},
  ])

  // state del carrito
  const [cart, setCart] = useState([])


  return (
    <Fragment>
      {/* SECTION CONTENEDOR GLOBAL */}
      <section className='container'>

        {/* SECTION DEL HEADER */}
        <section className='container__header'>

          {/* BOTON DEL HEADER */}
          <div className='container__header_menu'>
            <button className='container__header__menu--button'></button>
          </div>

          {/* TITULO DEL HEADER */}
          <div className='container__header__title'>
            <h3 className='container__header__title--text'>
              BONHO STORE
            </h3>
          </div>

          {/* CART DEL HEADER */}
          <div className='container__header__cartDiv'>
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>

        {/* SECTION CONTENEDOR PRINCIPAL */}
        <section className='container__content'>
          <div className='container__content__title'>
            <h1>Promoción todo JULIO 30%off en combos</h1>
          </div>

          <div className='container__content__listBurgers'>
          {burgers.map((burger) => (
        <Burger
        key={burger.id}
        burger={burger}
        cart={cart}
        setCart={setCart}
        burgers= {burgers}
        />
      ))}
          </div>
        </section>

        {/* SECTION DEL FOOTER */}
        <section className='container__footer'>
            <p>BONHO STORE 2021 - Todos los derechos reservados</p>
        </section>
      </section>

      <Cart
      cart= {cart} />

    </Fragment>
  );
}

export default App;
