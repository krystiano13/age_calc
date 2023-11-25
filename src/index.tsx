import { render } from 'preact';
import './style.css';

import { Wrapper } from "./components/Wrapper/Wrapper";
import { Form } from "./components/Form/Form";
import { Info } from "./components/Info/Info";

export function App() {
	return (
		<Wrapper>
			<Form />
			<Info />
		</Wrapper>
	);
}

render(<App />, document.getElementById('app'));
