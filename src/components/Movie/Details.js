// Details.js
import React, { useEffect, useState } from "react";
import "../../styles/details.css";
import ArrowRight from "../ArrowRight";
import { GetCredits } from "../../services/GetCredits";
import profileImg from "../../images/profileImgDefault.jpg"
  
const Details = ({ id, revenue, budget }) => {
    const [actors, setActors] = useState([]);
    const onlyActing = true;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const actorsData = await GetCredits(id, onlyActing)
                setActors(actorsData)
            } catch (error) {
                console.error("Error al obtener los detalles:", error);
            }
        };

        fetchData();
    }, [id, onlyActing]);

    const formatMoney = (amount) => {
        const number = parseFloat(amount);
    
        if (isNaN(number)) {
            return "Invalid input";
        }
        
        if (number >= 1e6) {
            return `U$D ${(number / 1e6).toFixed(3)}M`;
        } else if (number >= 1e3) {
            return `U$D ${(number / 1e3).toFixed(3)}k`;
        } else {
            return `U$D ${number.toFixed(3)}`;
        }
    }

    const handleScrollRight = () => {
        const container = document.querySelector(".details__acting__list");
        container.scrollLeft += 240;
    };

    return (
        <div className="details__container">
            <h5 className="details__title">Protagonistas</h5>
            <div className="details__acting__list__container">
                <div className="details__acting__list">
                    {actors.map(actor => (
                        <div className="details__actor__container" key={actor.id}>
                            <img className="details__actor__img" 
                                src={actor.profile_path ? 
                                    "https://image.tmdb.org/t/p/w200" + actor.profile_path : 
                                    profileImg} 
                                alt="perfil del actor" />
                            <span className="details__actor__name">{actor.name}</span>
                        </div>
                    ))}
                </div>
                <div className="details__list__arrowRight">
                    <ArrowRight size="little" onClick={handleScrollRight} />
                </div>
            </div>
            <h5 className="details__title">Análisis Financiero</h5>
            <div className="details__financialAnalysis">
                <div className="details__financialAnalysis__subcontainer">
                    <h6 className="details__financialAnalysis__title">Presupuesto</h6>
                    <span className="details__financialAnalysis__money">{formatMoney(budget)}</span>
                </div>
                <div className="details__financialAnalysis__line"></div>
                <div className="details__financialAnalysis__subcontainer">
                    <h6 className="details__financialAnalysis__title">Recaudación</h6>
                    <span className="details__financialAnalysis__money">{formatMoney(revenue)}</span>
                </div>
            </div>
        </div>
    );
}

export default Details;
