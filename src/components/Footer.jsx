import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footer__title">LM</h1>
            <div className="footer__body">
                <div>
                    <Link to="/">About</Link>
                </div>
                <div>
                    <Link to="/">Email Preferences</Link>
                </div>
                <div>
                    <Link to="/">Privacy Policy</Link>
                </div>
                <div>
                    <Link to="/">Terms of Use</Link>
                </div>
                <div>
                    <Link to="/">Contact</Link>
                </div>
                <div>
                    <Link to="/">Do Not Sell My Info</Link>
                </div>
            </div>
        </div>
    );
};
