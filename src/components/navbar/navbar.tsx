import React from 'react'
import classnames from 'classnames'
import { FiAlignJustify, FiShoppingCart } from "react-icons/fi";

import styles from './navbar.module.scss';
import Breakpoints, { getWith } from '../../utils/breakpoints';

const Navbar = () => {
  
  //not working
  const sizeIcons = () => {
    let size = 16;
    if(getWith() > Breakpoints.mobile_landscape) size = 22
    return size
  };
  
  return (
    <nav className={styles.main}>
      <div className="col-1">
        <div id="logo">I'm logo</div>
      </div>
      <div className="col-2">
        <div>
          <FiShoppingCart size={sizeIcons()}/>
        </div>
        <FiAlignJustify size={sizeIcons()} />
      </div>
    </nav>
  )
}

export default Navbar