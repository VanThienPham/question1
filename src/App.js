import { useEffect, useState } from 'react';
import './App.css';
import img from './public/img';

function App() {
  const rootMenu = [
    {
      name: 'Home',
      path: '/home',

    },
    {
      name: 'Service',
      path: '/Service',
    },
    {
      name: 'News',
      path: '/News'
    },
    {
      name: 'Blog',
      path: '/Blog'
    },
    {
      name: 'Contact',
      path: '/Contact'
    }
  ]
  // useEffect(() => {

  // }, [window.location.pathname])
  const [menus, setMenus] = useState(rootMenu);
  return (
    <div className="App">
      <div className='container'>
        <nav className="side_bar">
          <ul>
            {
              menus.map((itemMenu, index) => {
                const active = window.location.pathname === itemMenu?.path;
                return <li key={index} className={active ? 'active' : ''} >
                  <a href={itemMenu?.path}>
                    {itemMenu?.name}
                  </a>
                </li>
              })
            }

          </ul>
        </nav>
        <div className='home'>
          <div className='home-content'>
            <header >
              <a href=''>
                <img alt='logo' src={img.logo} />
              </a>
            </header>
            <section className='content-top'>
              <h3>Lorem ipsum dolor sit asmet?</h3>
              <p>Lorem ipsum dolor sit amet, consectur adipisicing elit. Nisi invenreopo ut non delectus atque dignissimos quisquam maiores vero archicquis in quod, veritas harum netur aperiam nemo, deserunt excepturiio animi recusandae rerum. Nobis quaerat obcaeca veniam facerevoluptabus a suscipit, reiciendis, dolorum minus nesciunt, mpore ipsaius mporibus commodi hic sequi modi netur ipsum labore id. Id sederror vero sit eaque molesas invenre quibusdam, iure dolor. Animi iddebis quo asperiores dignissimos aum. Enim pariatur, archic quodoloremque git minima dolore vero explicabo itaque praesenum</p>
            </section>
            <section className='content-bottom'>
              <div className='content-bottom-item'>
                <h3>Lorem ipsum dolor sit asmet</h3>

                <div>
                  <img className='lorem-img' alt='logo' src={img.lorem} />
                  <p>Lorem ipsum dolor sit amet, consectur adipisicing elit. Nisi invenreopo ut non delectus atque dignissimos quisquam maiores vero archicquis in quod, veritas harum netur aperiam nemo, deserunt excepturiio animi recusandae rerum. Nobis quaerat obcaeca veniam facerevoluptabus a suscipit, reiciendis, dolorum minus nesciunt, mpore ipsaius mporibus commodi hic sequi modi netur ipsum labore id. Id sederror vero sit eaque molesas invenre quibusdam, iure dolor. Animi iddebis quo asperiores dignissimos aum. Enim pariatur, archic quodoloremque git minima dolore vero explicabo itaque praesenum</p>
                </div>

              </div>
              <div className='content-bottom-item'>
                <h3>Lorem ipsum dolor sit asmet</h3>

                <div>
                  <img className='lorem-img' alt='logo' src={img.lorem} />
                  <p>Lorem ipsum dolor sit amet, consectur adipisicing elit. Nisi invenreopo ut non delectus atque dignissimos quisquam maiores vero archicquis in quod, veritas harum netur aperiam nemo, deserunt excepturiio animi recusandae rerum. Nobis quaerat obcaeca veniam facerevoluptabus a suscipit, reiciendis, dolorum minus nesciunt, mpore ipsaius mporibus commodi hic sequi modi netur ipsum labore id. Id sederror vero sit eaque molesas invenre quibusdam, iure dolor. Animi iddebis quo asperiores dignissimos aum. Enim pariatur, archic quodoloremque git minima dolore vero explicabo itaque praesenum</p>
                </div>

              </div>
              <div className='content-bottom-item'>
                <h3>Lorem ipsum dolor sit asmet</h3>

                <div>
                  <img className='lorem-img' alt='logo' src={img.lorem} />
                  <p>Lorem ipsum dolor sit amet, consectur adipisicing elit. Nisi invenreopo ut non delectus atque dignissimos quisquam maiores vero archicquis in quod, veritas harum netur aperiam nemo, deserunt excepturiio animi recusandae rerum. Nobis quaerat obcaeca veniam facerevoluptabus a suscipit, reiciendis, dolorum minus nesciunt, mpore ipsaius mporibus commodi hic sequi modi netur ipsum labore id. Id sederror vero sit eaque molesas invenre quibusdam, iure dolor. Animi iddebis quo asperiores dignissimos aum. Enim pariatur, archic quodoloremque git minima dolore vero explicabo itaque praesenum</p>
                </div>

              </div>
            </section>
            <footer >
              <p>Copyright @2021</p>
            </footer>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
