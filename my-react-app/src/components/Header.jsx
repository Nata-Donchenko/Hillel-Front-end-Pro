import './Header.css'
import { LinkPost } from './Links/LinkPost.jsx'


export function Header () {
  return (
    <>
      <nav className='navbar navbar-expand-lg headerNav'>
        <div className='d-flex w-100 justify-content-between align-items-center'>

          <div >
            <LinkPost/>
          </div>

          <div className='collapse navbar-collapse justify-content-end'>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href="#">Home</a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href="#">About</a>
              </li>
        
              <li className='nav-item'>
                <a className='nav-link' href="#">Documentation</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
