import React, { useState, useEffect } from "react";
import "../styles/detail.scss";
import { useLocation } from "react-router-dom";
import { getQuoteById } from "../services/quotesService";
import { ShareButtons } from "../components/ShareButtons";

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const DetailPage = () => {
    const [quote, setQuote] = useState();
    const location = useLocation();

    useEffect(() => {
        const getQuoteByIdAsync = async () => {
            const backendQuote = await getQuoteById(location.state);
            setQuote(backendQuote);
        };
        getQuoteByIdAsync();
    }, [location.state]);

    return (
        <>
            <main>
                <div className="quote__container detail">
                    <img
                        className="quote__image detail"
                        src={`${quote && quote.desktopImage.publicURL}`}
                        alt="Quote"
                    />
                    <img
                        className="quote__image--mb detail"
                        src={`${quote && quote.mobileImage.publicURL}`}
                        alt="Quote"
                    />
                    <ShareButtons className="mobile mobile-only" />
                </div>
                <div className="detail__container">
                    <div className="detail__header">
                        <p>
                            {quote &&
                                new Date(quote.activeTs).toLocaleDateString(
                                    "en-US",
                                    options
                                )}
                        </p>
                        <ShareButtons className="no-mobile" />
                    </div>
                    <h3 className="detail__title">{quote && quote.title} </h3>
                    <img
                        src="https://lm-challenges.s3.amazonaws.com/resources/quote-icon.svg"
                        alt=""
                    />
                    <h4>{quote && quote.author.title}</h4>
                    <p>{quote && quote.description}</p>
                </div>
            </main>
        </>
    );
};
