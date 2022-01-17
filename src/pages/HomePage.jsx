import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import getQuotes from "../services/quotesService";
import { useNavigate } from "react-router-dom";

const PAGINATION_BASE = 6;
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const HomePage = () => {
    // quotes es un estado, y setQuotes es lo que actualiza ese estado
    const [quotes, setQuotes] = useState();
    const [maxQuotesToShow, setMaxQuoteToShow] = useState(PAGINATION_BASE);
    // useEffect ejecuta la función que tiene adentro cuando se renderice el componente
    // (porque tiene un corchete vacío,  sino tendría otro comportamiento)
    useEffect(() => {
        const getQuotesAsync = async () => {
            const backendQuotes = await getQuotes();
            setQuotes(backendQuotes);
        };
        getQuotesAsync();
    }, []);

    const handleOnClick = () =>
        setMaxQuoteToShow(maxQuotesToShow + PAGINATION_BASE);

    const navigate = useNavigate();
    const goToSelectedQuote = (quote) => {
        navigate("/detail", { state: quote._id });
    };

    return (
        <>
            <main>
                <div className="quote__container">
                    {quotes &&
                        quotes.map((quote, index) =>
                            index < maxQuotesToShow ? (
                                <div className="quote">
                                    <img
                                        className="quote__image"
                                        src={`${quote.desktopImage.publicURL}`}
                                        alt="Quote"
                                    />
                                    <img
                                        className="quote__image--mb"
                                        src={`${quote.mobileImage.publicURL}`}
                                        alt="Quote"
                                    />
                                    <button
                                        onClick={() => goToSelectedQuote(quote)}
                                        className="btn btn__ts"
                                    >
                                        {new Date(
                                            quote.activeTs
                                        ).toLocaleDateString("en-US", options)}
                                        <div className="svg__container">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="9"
                                                viewBox="0 0 6 9"
                                                fill="none"
                                            >
                                                <path
                                                    d="M0.579003 7.24484L3.32734 4.49651L0.579003 1.74817C0.446366 1.61583 0.371826 1.43617 0.371826 1.2488C0.371826 1.06143 0.446366 0.881763 0.579003 0.749424C0.855253 0.473174 1.3015 0.473174 1.57775 0.749424L4.829 4.00067C5.10525 4.27692 5.10525 4.72317 4.829 4.99942L1.57775 8.25067C1.3015 8.52692 0.855253 8.52692 0.579003 8.25067C0.309837 7.97442 0.302753 7.52109 0.579003 7.24484Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <></>
                            )
                        )}
                </div>
                {quotes && maxQuotesToShow < quotes.length && (
                    <div className="btn__container">
                        <button
                            className="btn btn__text"
                            onClick={handleOnClick}
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                                    fill="#0A0025"
                                />
                            </svg>
                            View More
                        </button>
                    </div>
                )}
            </main>
        </>
    );
};
