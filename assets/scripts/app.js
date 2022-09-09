let defaultResult = 0;
let currentResult = defaultResult;

// Addition Calculation
function add() {
	currentResult= currentResult + userInput.value;
	
    outputResult(currentResult, 'CalculationDescriptor');
}

addBtn.addEventListener("click", add);
