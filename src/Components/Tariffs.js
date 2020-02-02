import React from 'react';

export default function Tariffs(props) {
    const {title, price, type, minutes, text, internet} = props;
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                <li>{price} <span>руб./месяц</span></li>
                <li>{type}</li>
                <li>{minutes} <span>мин</span></li>
                <li>{text}</li>
                <li>{internet}</li>
            </ul>
        </div>
    )
}