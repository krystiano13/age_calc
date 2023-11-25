import React from 'react';
import './Form.css';
import arrowIcon from '../../assets/images/icon-arrow.svg';

const Form = () => {
    return (
        <section className="formSection">
            <form className="form">
                <section className="formInput">
                    <label>DAY</label>
                    <input min={1} max={31} type="number" placeholder="DD" />
                </section>
                <section className="formInput">
                    <label>MONTH</label>
                    <input min={1} max={12} type="number" placeholder="MM" />
                </section>
                <section className="formInput">
                    <label>YEAR</label>
                    <input min={0} max={2023} type="number" placeholder="YYYY" />
                </section>
            </form>
            <div className="separator">
                <div className="line"></div>
                <div className="icon">
                    <img src={arrowIcon} alt="arrow icon" />
                </div>
            </div>
        </section>
    )
}

export { Form };