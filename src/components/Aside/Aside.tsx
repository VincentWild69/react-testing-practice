import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Aside.module.scss';
import { navItems } from '../../AppNav/NavLinks';

const Aside = () => {
  return (
    <aside className={styles.aside} data-testid="aside">
      <nav className={styles.nav}>
        {navItems.map(item => (
          <NavLink
            className={link => (link.isActive ? styles.menuLinkActive : styles.menuLink)}
            to={item.path}
            key={item.path}
            data-testid={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
