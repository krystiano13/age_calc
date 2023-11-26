import { render } from 'preact';
import { useState } from 'react';
import './style.css';

import { Wrapper } from "./components/Wrapper/Wrapper";
import { Form } from "./components/Form/Form";
import { Info } from "./components/Info/Info";

export function App() {
	const [days,setDays] = useState<number|"- -">("- -");
	const [months,setMonths] = useState<number|"- -">("- -");
	const [years, setYears] = useState<number|"- -">("- -");
	return (
		<Wrapper>
			<Form
				setDays={(day:number) => setDays(day)}
				setMonths={(month:number) => setMonths(month)}
				setYears={(year:number) => setYears(year)}
			/>
			<Info
				days={days}
				months={months}
				years={years}
			/>
		</Wrapper>
	);
}

render(<App />, document.getElementById('app'));
