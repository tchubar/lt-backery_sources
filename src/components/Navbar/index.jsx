import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import s from './Navbar.module.scss';

export default function Navbar({menu, selectedTab, setSelectedTab}) {

  return (
    <nav className={s.Navbar}>
    <BrowserRouter>
                {menu.map(el => {
                  return (
                    <div className={s.Navbar__container} onClick={() => (
                      el[0] == 'assortment'
                      ? setSelectedTab(el[2])
                      : ''
                    )}>
                      <Link
                        className={s.Navbar__link}
                        to={`#${el[0]}`}
                      >{el[1]}</Link>
                    </div>

                  )
                })}
              </BrowserRouter>
    </nav>
  );
}
