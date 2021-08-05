import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


import useWindowSize from './hooks/useWindowSize';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Modal from './components/Modal';
import Assortment from './components/Assortment';
import Instagram from './components/Instagram';
import Filling from './components/Filling';
import Order from './components/Order';
import Footer from './components/Footer';

import 'normalize.css';
import './App.css';
import Popular from './components/Popular';

import modalStyles from './components/Modal/Modal.module.scss';

export default function App() {
  const [showMenuModal, setShowMenuModal] = useState(0);

  const size = useWindowSize();

  const menu = [
    ['about', 'О нас'],
    ['filling', 'Начинки'],
    ['assortment', 'Свадебные', 'wedding'],
    ['assortment', 'Детские', 'child'],
    ['assortment', 'Популярные', 'popular'],
    ['assortment', 'Необычные', 'extraordinary'],
    ['assortment', 'Капкейки', 'cupcakes'],
    ['order', 'Как сделать заказ'],
  ];

  const [selectedTab, setSelectedTab] = useState('wedding');

  return (
    <>
      <Header setShowMenuModal={(state) => setShowMenuModal(state)} />
      <Main size={size} menu={menu} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      {/* <Slider size={size} /> */}
      <Popular size={size}/>
      <About size={size} />

      {
        console.log('draw', selectedTab),
        showMenuModal
          ? (
            <Modal setShowMenuModal={(state) => setShowMenuModal(state)}>
              {/* <h1>Modal</h1> */}
              {/* <ul>
                {menu.map((el) => <li><a href={`/${el[0]}`}>{`${el[1]}`}</a></li>)}
              </ul> */}
              <BrowserRouter>
                {menu.map(el => {
                  return (
                    <div className={modalStyles.Modal__container} onClick={() => (
                      el[0] == 'assortment'
                      ? setSelectedTab(el[2])
                      : ''
                    )}>
                      <Link
                        className={modalStyles.Modal__link}
                        to={`#${el[0]}`}
                      >{el[1]}</Link>
                    </div>

                  )
                })}
              </BrowserRouter>
            </Modal>
          )
          : ''
      }
      <Assortment selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Instagram />
      <Filling size={size} />
      <Order />
      <Footer />
    </>
  );
}
