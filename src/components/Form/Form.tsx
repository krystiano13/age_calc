import React, { useRef } from 'react';
import './Form.css';
import arrowIcon from '../../assets/images/icon-arrow.svg';

interface Props {
    setDays: (day:number) => void;
    setMonths: (month:number) => void;
    setYears: (year:number) => void;
}

const Form:React.FC<Props> = ({ setDays, setMonths, setYears }) => {

    const [valid,setValid] = React.useState<boolean>(true);

    const dayInput = useRef<HTMLInputElement>(null);
    const monthInput = useRef<HTMLInputElement>(null);
    const yearInput = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        const day:string = dayInput.current.value;
        const month:string = monthInput.current.value;
        const year:string = yearInput.current.value;

        const date:Date = new Date(`${year}-${month}-${day}`);

        if(
            isNaN(date.getDate()) ||
            date.getDate() !== Number(day) ||
            Number(day) > 31 ||
            Number(day) < 1 ||
            (new Date().getTime() - date.getTime()) < 0
        ) {
            setValid(false);
            return;
        }

        console.log(date.getDate());
        setValid(true);
    }

    return (
        <section className="formSection">
            <form className="form">
                <section className="formInput">
                    <label>DAY</label>
                    <input
                        className={valid ? "valid" : "invalid"}
                        ref={dayInput}
                        min={1}
                        max={31}
                        type="number"
                        placeholder="DD"
                    />
                </section>
                <section className="formInput">
                    <label>MONTH</label>
                    <input
                        className={valid ? "valid" : "invalid"}
                        ref={monthInput}
                        min={1}
                        max={12}
                        type="number"
                        placeholder="MM"
                    />
                </section>
                <section className="formInput">
                    <label>YEAR</label>
                    <input
                        className={valid ? "valid" : "invalid"}
                        ref={yearInput}
                        min={0}
                        max={2023}
                        type="number"
                        placeholder="YYYY"
                    />
                </section>
            </form>
            <div className="separator">
                <div className="line"></div>
                <div className="icon" onClick={handleSubmit}>
                    <img src={arrowIcon} alt="arrow icon" />
                </div>
            </div>
        </section>
    )
}

export { Form };