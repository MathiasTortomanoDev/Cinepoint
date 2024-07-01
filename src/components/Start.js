
import React from 'react';
import '../styles/start.css';
import '../styles/arrowRight.css';
import { Link } from "wouter";
import play from "../images/svgs/play.svg"
import ArrowRight from './ArrowRight.js';

const Start = () => {
  return (
    <article className="start">
      <div className="start__container">
        <div className="start__background"></div>
        <section className="start__content">
            <header className="start__header">
                <h1 className="start__title">Interestelar</h1>
                <p className="start__description">Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.</p>
                <div className="start__links__container">
                  <Link href={"Movie/" + 157336} className="start__moreInfo">Ver más</Link>
                  <Link href={"Movie/" + 157336} className="start__goTrailer">
                    <img src={play} alt="play" />
                  </Link>
                </div>
            </header>
            <footer className="start__footer">
                <div className="start__footer__line"></div>
                <ArrowRight />
            </footer>
        </section>
      </div>
    </article>
  );
}

export default Start;
