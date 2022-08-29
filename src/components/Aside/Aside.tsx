import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Aside.module.scss';

const menuItems = [
  {name: 'home', path: '/'},
  {name: 'basic example', path: '/basicexample'},
  {name: 'feauture', path: '/feauture'}
];

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {menuItems.map(item => (
          <NavLink
            className={link => (link.isActive ? styles.menuLinkActive : styles.menuLink)}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
