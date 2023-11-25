import React, { useState } from "react";

const Info = () => {
    const [days,setDays] = useState<number|"- -">("- -");
    const [months,setMonths] = useState<number|"- -">("- -");
    const [years, setYears] = useState<number|"- -">("- -");

    return (
        <section className="Info">
            <p className="element">{years} years</p>
            <p className="element">{months} months</p>
            <p className="element">{days} days</p>
        </section>
    )
}

export { Info };