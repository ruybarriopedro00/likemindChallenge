import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1 className="navbar__title">
                    <Link to="/">Likemind</Link>
                </h1>
                <nav className="navbar__body no-mobile">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/">Quotes</Link>
                    </div>
                    <div>
                        <Link to="/">Articles</Link>
                    </div>
                    <div>
                        <Link to="/">Games</Link>
                    </div>
                </nav>
                <BurgerMenu />
            </div>
        </div>
    );
};
