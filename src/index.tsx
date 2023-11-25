import { render } from 'preact';
import './style.css';

import { Wrapper } from "./components/Wrapper/Wrapper";

export function App() {
	return (
		<Wrapper></Wrapper>
	);
}

render(<App />, document.getElementById('app'));
