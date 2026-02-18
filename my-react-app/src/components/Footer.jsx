import './Footer.css'
import { LinkFollow } from './Links/LinkFollow.jsx'
import { LinkGitHub } from './Links/LinkGitHub.jsx'

export function Footer () {
  return (
    <>
      <div className='d-flex footer'>
  
        <div className="p-2 flex-grow-1">
          <p >Created by Paul Hallett Maintained by Juriy Bura ©2026</p>
        </div>

        <div className="p-2 footer-btns">
          <LinkFollow/>
          <LinkGitHub/>
        </div>
      </div>
    </>
  )
}
