import React from 'react'
import logo from '../assets/media/logo.png'
import exampleVideo from '../assets/media/¿Cómo hacer un presupuesto en Google Sheets - Google Drive_.mp4'

const Content = () => {
  return (
    <section className="content">
          <video
            controls
            width="100%"
            src={exampleVideo}
          ></video>
          <div className="content-description">
            <div className="content-description_title">
              <img src={logo} alt="Logo" />
              <h3>¿Como hacer un presupuesto en google sheets?</h3>
            </div>
            <hr />
            <p>
              En esta clase aprenderemos como crear de manera rápida y sencilla un
              presuspuesto en Google Sheets para que no te enrolles.
            </p>
          </div>
        </section>
  )
}

export default Content
