import React, { useState } from "react";
import "../styles/Footer.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            We want to make vaccination easy and accessible to everyone.
          </h3>
        </div>
        <button
          className="btn btn-success  rounded-pill"
          id="btn-rgt"
          style={{ display: "inline-block" }}
          onClick={() => {
            navigate("/registration.js");
          }}
        >
          Register
        </button>
      </section>

      <footer className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a className="footer__link" href="#">
              About
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
