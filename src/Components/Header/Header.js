import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

export default() => (
    <div className='headerContainer'>
        <ul className='headerContainer__list'>
            <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/' exact activeClassName={'active-item'}>Main</NavLink></li>
            <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/news' activeClassName={'active-item'}>News</NavLink></li>
            <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/list' activeClassName={'active-item'}>Example List</NavLink></li>
            <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/teniteration' activeClassName={'active-item'}>10 итерация</NavLink></li>
            <li className='headerContainer__item'><NavLink className='headerContainer__link' to='/about' activeClassName={'active-item'}>About</NavLink></li>
        </ul>
    </div>
);
