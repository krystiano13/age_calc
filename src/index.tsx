import { render } from 'preact';
import './style.css';

import { Wrapper } from "./components/Wrapper/Wrapper";
import { Form } from "./components/Form/Form";

export function App() {
	return (
		<Wrapper>
			<Form />
		</Wrapper>
	);
}

render(<App />, document.getElementById('app'));
