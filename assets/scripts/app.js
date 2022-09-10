let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}
function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	resultOperation
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: resultOperation,
	};
	// To Have userinput Log in console or Local Storage Furthermore.
	logEntries.push(logEntry); //The Objects Pushed in Array And Classified As Arrays.
	console.log(logEntry.operation);
	console.log(logEntries);
	console.dir("------------");
}
function createAndWriteOutput(Operator, initialresult, userinput) {
	const DescriptionCalculationResult = `${initialresult} ${Operator} ${userinput}`;
	outputResult(currentResult, DescriptionCalculationResult);
}

// Addition Calculation
function add() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult += enteredNumber;
	createAndWriteOutput("+", initialresult, enteredNumber);
	// To Have Full Details Of Data Entry in Log.
	writeToLog("ADD", enteredNumber, initialresult, currentResult);
}
function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput("-", initialresult, enteredNumber);
    writeToLog("SUBTRACT", enteredNumber, initialresult, currentResult);
}
function divide() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput("/", initialresult, enteredNumber);
    writeToLog("DIVIDE", enteredNumber, initialresult, currentResult);
}
function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput("*", initialresult, enteredNumber);
    writeToLog("MULTIPLY", enteredNumber, initialresult, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
