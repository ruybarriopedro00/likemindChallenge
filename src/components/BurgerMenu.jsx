import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const BurgerMenu = () => {
    const location = useLocation();
    const ref = useRef();
    useEffect(() => {
        if (ref.current.checked) {
            ref.current.click();
        }
    }, [location]);

    return (
        <nav role="navigation" className="mobile-only">
            <div className="menu__toggle">
                <input ref={ref} type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul className="burgermenu__container">
                    <div className="burgermenu__options">
                        <h3>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </h3>
                        <h3>
                            <li>
                                <Link to="/">Quotes</Link>
                            </li>
                        </h3>
                        <h3>
                            <li>
                                <Link to="/">Articles</Link>
                            </li>
                        </h3>
                        <h3>
                            <li>
                                <Link to="/">Games</Link>
                            </li>
                        </h3>
                    </div>
                    <div className="burgermenu__bg">
                        <div className="burgermenu__bg--gradient"></div>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
