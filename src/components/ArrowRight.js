// ArrowRight.js
import React from "react";

const ArrowRight = ({ size, onClick }) => {
    let width = 13;
    let height = 23;

    switch (size) {
        case "little":
            width = 8;
            height = 13;
            break;

        case "big":
            width = 20;
            height = 30;
            break;

        default:
            width = 13;
            height = 23;
            break;
    }

    return (
        <button className={"arrowRight arrowRight" + size} onClick={onClick}>
            <svg className="arrowRight__icon" width={width} height={height} viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.456 10.1469C13.1813 10.8953 13.1813 12.1107 12.456 12.8591L3.17239 22.4387C2.44711 23.1871 1.26925 23.1871 0.543963 22.4387C-0.181321 21.6903 -0.181321 20.4749 0.543963 19.7265L8.51629 11.5L0.549766 3.27353C-0.175519 2.52512 -0.175519 1.30971 0.549766 0.561304C1.27505 -0.187101 2.45291 -0.187101 3.1782 0.561304L12.4618 10.1409L12.456 10.1469Z" fill="#E4E4E4"/>
            </svg>
        </button>
    );
};

export default ArrowRight;
