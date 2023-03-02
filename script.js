//your code here
const textElement = docuement.querySelector("#evaluatedText");
const h3Element = docuement.querySelector("#wordCount");

function handleInput(e){
	const sentence = e.target.value;
	const count = sentence.match(/\S+/ig).length :0;
	h3Element.textContent = count;
}
	textElement.addEventListener('input', handleInput);
	