import Head from 'next/head'
import Avatar from './Avatar'

export default ({ toggle = false, toggleHandler }) =>
  <div>
    <Head>
      <title>My Avatar page</title>
      <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="static/css/style.css" />
      <script src="https://use.fontawesome.com/50fdd82320.js" />
    </Head>
    <button className="avatar" aria-expanded="false">
      <Avatar />
      <div className="avatar-menu">
        <div>
          <img src="static/default.jpeg" className="img" alt="Users" />
          <span>Maddie</span>
        </div>
        <div>
          <i className="fa fa-sliders" aria-hidden="true" />
          <span>Account Settings</span>
        </div>
        <div>
          <i className="fa fa-sign-out" aria-hidden="true" />
          <span>SignOut</span>
        </div>
        <hr />
        <div>
          <div>Account <i className="fa fa-chevron-circle-down" aria-hidden="true" onClick={toggleHandler} /></div>
        </div>
        {
          toggle ?
            <div>
              <hr />
              <div>Personal</div>
              <div>alivmadie@gmail.com</div>
              <div>Tether</div>
              <div>maddie@lettea.it</div>
            </div>
          :
            <div />
        }
      </div>
    </button>
  </div>
