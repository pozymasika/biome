import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [count] = useState(0);

	useEffect(() => {
		console.log("the count is: ", count);
	}, [count]);

	const text = ["hello", "my very good friend", "how are you?"];
	const splitTextintoWords = text.flatMap((sentence) => sentence.split(" "));
	console.log(splitTextintoWords);

	return (
		<section>
			<p> this is an unformatted string</p>
			<input type="text" autoFocus />
		</section>
	);
}

export default App;
