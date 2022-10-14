const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
	return tell(question).then((response) => [
		`Your question was: ${question}`,
		`Your fortune is: ${response}`,
	]);
}

function getFortune(question) {
	const promise = ask(question);
	return promise.catch((error) => {
		return `There was an error: ${error}`;
	});
}

function fullSession(question) {
	let output = [];
	return welcome()
		.then((welcomeMessage) => {
			output.push(welcomeMessage);
			return output;
		})
		.then(() => getFortune(question))
		.then((fortuneMessage) => {
			output = output.concat(fortuneMessage);
		})

		.then(() => goodbye())
		.then((goodbyeMessage) => {
			output.push(goodbyeMessage);
			return output;
		});
}

module.exports = { getFortune, fullSession };
