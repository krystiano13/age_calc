import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <section className="formSection">
            <form className="form">
                <section className="formInput">
                    <label>DAY</label>
                    <input type="number" placeholder="DD" />
                </section>
                <section className="formInput">
                    <label>MONTH</label>
                    <input type="number" placeholder="MM" />
                </section>
                <section className="formInput">
                    <label>YEAR</label>
                    <input type="number" placeholder="YYYY" />
                </section>
            </form>
            <div className="separator"></div>
        </section>
    )
}

export { Form };