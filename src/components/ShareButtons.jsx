import React from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";

const shareUrl = window.location.href;

export const ShareButtons = (props) => {
    return (
        <div className={`share__container ${props.className}`}>
            <FacebookShareButton url={shareUrl}>
                <img
                    src="https://lm-challenges.s3.amazonaws.com/resources/fb-icon.svg"
                    alt="Share via facebook"
                />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
                <img
                    src="https://lm-challenges.s3.amazonaws.com/resources/tw-icon.svg"
                    alt="Share via Twitter"
                />
            </TwitterShareButton>
            <EmailShareButton url={shareUrl}>
                <img
                    src="https://lm-challenges.s3.amazonaws.com/resources/email-icon.svg"
                    alt="Share via Email"
                />
            </EmailShareButton>
        </div>
    );
};
