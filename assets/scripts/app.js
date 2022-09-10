let defaultResult = 0;
let currentResult = defaultResult;
let logEntries =[]

function getUserNumberInput() {
	return parseInt(userInput.value);
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
    const logEntry={
        operation:'ADD',
        prevResult:initialresult,
        number:enteredNumber,
        result:currentResult
    }
    // To Have userinput Log in console or Local Storage Furthermore.
     logEntries.push(logEntry) //The Objects Pushed in Array And Classified As Arrays.
    console.log(logEntries)
    console.dir('------------')
}
function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult -=enteredNumber;
	createAndWriteOutput("-", initialresult, enteredNumber);
}
function divide() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult /=enteredNumber;
	createAndWriteOutput("/", initialresult, enteredNumber);
}
function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	currentResult *=enteredNumber;
	createAndWriteOutput("*", initialresult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
