import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const amount =  useSelector((state)=> state.amount)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/">Features</a>
            <a className="nav-item nav-link" href="/">Pricing</a>
          </div>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <button type="button" disabled={true} className="btn btn-success">Amount: {amount}</button>
        </form>
      </nav>
    </div>
  )
}
