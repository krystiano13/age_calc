import React, { useState } from "react";
import './Info.css';

interface Props {
    days: number | "- -",
    months: number | "- -",
    years: number | "- -",
}

const Info: React.FC<Props> = ({ days, months, years }) => {
    return (
        <section className="Info">
            <p className="element"><span>{years}</span> years</p>
            <p className="element"><span>{months}</span> months</p>
            <p className="element"><span>{days}</span> days</p>
        </section>
    )
}

export { Info };