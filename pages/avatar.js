/**
* Dependencies
*/

import React from 'react'


/**
*
*/

export default class Avatar extends React.Component {
  render() {
    return (
      <button className="avatar" aria-expanded="false">
        <style jsx>{`
          button {
            cursor: pointer;
            background: transparent;
            border: 0;
          }
          body{
            display:flex;
            align-items:center;
            justify-content:center;
            height:100vh;
          }
          .avatar {
            position:relative;
            width:50px;
            height:50px;
            outline: 0;
          }
          .avatar-name {
            position: absolute;
            left:-100%;
            top: 14px;
            text-align: right;
          }
          .avatar-name b {
            display: block;
          }
          img{
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%, -50%);
            width:48px;
            border-radius:50%;
            background-color: #ccc;
          }
          .progress {
            position: absolute;
            top: -2px;
            left: -2px;
            transform: rotate(-90deg);
          }
          .avatar-menu {
            cursor: initial;
            /*box-shadow: 0 0 4px rgba(200,200,200,.1);*/
            position: absolute;
            right: calc(-50% + 25px);
            top: 60px;
            border: 1px solid #ccc;
            min-width: 272px;
            min-height: 136px;
            display: none;
          }
          .avatar:focus .avatar-menu {
            display: block;
          }
          .avatar-menu:after, .avatar-menu:before {
            bottom: 100%;
            left: calc(90% + 4px);
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }
          .avatar-menu:after {
            border-bottom-color: white;
            border-width: 6px;
            margin-left: -6px;
          }
          .avatar-menu:before {
            border-bottom-color: #ccc;
            border-width: 7px;
            margin-left: -7px;;
          }
        `}</style>
        <Image {...this.props} />
        <div className="avatar-menu" aria-hidden="true">Hello World</div>
      </button>
    )
  }
}

function Image (props) {
  const {src, alt} = props
  if (src) {
    return <img src={src} alt={alt} />
  } else {
    return (
      <svg width="28" height="28" viewBox="0 0 32 32">
        <title>Avatar</title>
        <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942s-9.544-4.371-10-9.947c2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3z"></path>
      </svg>
    )
  }
}