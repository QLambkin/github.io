import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span className="html-tag">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>
        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="html-tag">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
