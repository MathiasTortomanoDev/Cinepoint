// Reviews.js
import React, { useEffect, useState } from "react";
import { GetReviews } from "../../services/GetReviews";
import "../../styles/reviews.css";
import Star from "./Star";
import ArrowRight from "../ArrowRight";

const HowLongIsContent = (review) => {
    if (review.length >= 220) {
        return review.slice(0, 220) + "...";
    }
    return review;
};

const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reviewsData = await GetReviews(id);
                setReviews(reviewsData);
            } catch (error) {
                console.error("Error al obtener las reseñas:", error);
            }
        };

        fetchData();
    }, [id]);

    if (reviews.length === 0) {
        return (
            <div className="reviews__noReviews">
                Todavia no hay reviews :(
            </div>
        )
    }
    
    const handleScrollRight = () => {
        const container = document.querySelector(".reviews__container");
        container.scrollLeft += 420; // Adjust as needed
    };

    return (
        <div className="reviews__content__container">
            <div className="reviews__container">
                {reviews.map((review) => (
                    <div className="review__container" key={review.id}>
                        <h6 className="review__authorUsername">{review.author_details.username}</h6>
                        <span className="review__authorName">{review.author}</span>
                        <p className="review__text">{HowLongIsContent(review.content)}</p>
                        <span className="review__rating">
                            <Star rating={review.author_details.rating}></Star>
                        </span>
                    </div>
                ))}
            </div>
            {reviews.length > 1 && (
                <div className="reviews__arrowRight__container">
                    <ArrowRight size="little" onClick={handleScrollRight} />
                </div>
            )}
        </div>
    );
};

export default Reviews;
