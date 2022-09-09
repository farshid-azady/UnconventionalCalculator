let defaultResult = 0;
let currentResult = defaultResult;

// Addition Calculation
function add() {
	const enteredNumber = userInput.value;
	const DescriptionResult = `${currentResult} + ${enteredNumber}`;
	currentResult = currentResult + +enteredNumber;

	outputResult(currentResult, DescriptionResult);
}

addBtn.addEventListener("click", add);
