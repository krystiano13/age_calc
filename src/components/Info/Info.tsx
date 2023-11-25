import React, { useState } from "react";
import './Info.css';

const Info = () => {
    const [days,setDays] = useState<number|"- -">("- -");
    const [months,setMonths] = useState<number|"- -">("- -");
    const [years, setYears] = useState<number|"- -">("- -");

    return (
        <section className="Info">
            <p className="element"><span>{years}</span> years</p>
            <p className="element"><span>{months}</span> months</p>
            <p className="element"><span>{days}</span> days</p>
        </section>
    )
}

export { Info };