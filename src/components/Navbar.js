import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ setCountry, setCategory }) {
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleCountry = (e) => {
    setCountry(e.target.value)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <label className="nav-link" htmlFor="category">Choose Category:</label>
            <li className="nav-item">
              <select className="nav-link" name="category" id="category" onChange={handleCategory}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainemnt</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">technology</option>
              </select>
            </li>
            <label className="nav-link" htmlFor="country">Choose Country:</label>
            <li className="nav-item">
              <select className="nav-link" name="country" id="country" onChange={handleCountry}>
                <option value="in">India</option>
                <option value="ae">United Arab Emirates</option>
                <option value="ar">Argentina</option>
                <option value="at">Austria</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="bg">Bulgaria</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="co">Colombia</option>
                <option value="cu">Cuba</option>
                <option value="de">Germany</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="gb">United Kingdom</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungary</option>
                <option value="id">Indonesia</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
                <option value="lt">Lithuania</option>
                <option value="lv">Latvia</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="my">Malaysia</option>
                <option value="ng">Nigeria</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>
                <option value="nz">New Zealand</option>
                <option value="ph">Philippines</option>
                <option value="pl">Poland</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="rs">Serbia</option>
                <option value="ru">Russia</option>
                <option value="sa">Saudi Arabia</option>
                <option value="se">Sweden</option>
                <option value="sg">Singapore</option>
                <option value="sk">Slovakia</option>
                <option value="tr">Turkey</option>
                <option value="ua">Ukraine</option>
                <option value="us">United States</option>
                <option value="ve">Venezuela</option>
                <option value="za">South Africa</option>

              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
