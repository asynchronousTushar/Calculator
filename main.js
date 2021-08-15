//***********Calculate Data*******************
var calculator = (function() {
		var line3 = [];
	

	return{
		
		getInput: function() {

			return line3;
		},
		
		singleFullstopFinder: function(arr) {
			var arrStr, lastNumstrInd, lastNum;
			
			arrStr = arr.join('');
			lastNumstrInd = arrStr.lastIndexOf(' ');
			
			
			if (arr.length == 1 && arr[0] == '.') {
				return true;
				
			} else if (arr.length > 1 && lastNumstrInd !== -1 ) {
				lastNum = arrStr.slice(lastNumstrInd);
				
				if (lastNum == ' .') return true;
			}
		},
		
		fullstopFinder: function (arr) {
			var arrStr, lastNumStrInd, lastNumStr, firstNumStr;
			
			arrStr = arr.join('')
			lastNumStrInd = arrStr.lastIndexOf(' ');
			
			
			if (arr.length !== 0 && lastNumStrInd !== -1) {
				lastNumStr = arrStr.slice(lastNumStrInd);
			
				return lastNumStr.includes('.');
				
			} else if (arr.length == 0) {
				
				return false;
				
			} else if (lastNumStrInd == -1) {
				firstNumStr = arrStr.slice(0);
				
				return firstNumStr.includes('.');
			}
			
		},
		
		math: function() {
			try{
			return eval(line3.join(''));
				
			} catch (error) {
				alert(error);
				return "Syntax Error";
			}
		},
		
		clear: function() {
			line3.pop();
			return line3;
		},
		
		allClear: function() {
			line3.splice(0, line3.length);
			return line3;
		},
		
		setOutput: function () {
			
			return line3.join('');
		}
	}
})();




//***********Input Controller********************
var inputController = (function(calc) {
	var line3 = calc.getInput();
	var line3Output = calc.setOutput;
	
	var DOM = {
		into: '.into',
		by: '.by',
		plus: '.plus',
		minus: '.minus',
		fullStop: '.fullstop',
		one: '.one',
		two: '.two',
		three: '.three',
		four: '.four',
		five: '.five',
		six: '.six',
		seven: '.seven',
		eight: '.eight',
		nine: '.nine',
		zero: '.zero',
		equal: '.equal',
		ac: '.ac',
		clear: '.clear',
		power: '.power',
		line1: '.line-1',
		line2: '.line-2',
		line3: '.line-3',
		line3Interface: '.line-3-interface',
		inr: '.inr',
		powerIndicator: '.power-image svg'
	};
	
	/**********************************************
	****************Answer Section*****************
	**********************************************/
	var answer = function() {
		
		document.querySelector(DOM.line1).textContent = line3Output() + " =";
		document.querySelector(DOM.line2).textContent = calc.math();
		document.querySelector(DOM.line3Interface).textContent = "";
		calc.allClear();
		console.log(line3);
		
		
		
		
		
		
		
		
		
		
	}
	
	/**********************************************
	******************Power is ON******************
	**********************************************/
	var inputData = function() {



		/************INTO Button*****************/
		document.querySelector(DOM.into).addEventListener('click', function(){
			if (line3[line3.length - 1] !== " * " && line3[line3.length - 1] !== " / " && line3[line3.length - 1] !== " + " && line3[line3.length - 1] !== " - " && line3.length !== 0 && calc.singleFullstopFinder(line3) !== true) {
				
			line3.push(' * ');
				
			} else {
				alert("Syntax Error");
			}
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});



		/*************BY Button******************/
		document.querySelector(DOM.by).addEventListener('click', function(){
			if (line3[line3.length - 1] !== " * " && line3[line3.length - 1] !== " / " && line3[line3.length - 1] !== " + " && line3[line3.length - 1] !== " - " && line3.length !== 0 && calc.singleFullstopFinder(line3) !== true) {
				
			line3.push(' / ');
				
			} else {
				alert("Syntax Error");
			}
			
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});



		/*************PLUS Button******************/
		document.querySelector(DOM.plus).addEventListener('click', function(){
			if (line3[line3.length - 1] !== " * " && line3[line3.length - 1] !== " / " && line3[line3.length - 1] !== " + " && line3[line3.length - 1] !== " - " && line3.length !== 0 && calc.singleFullstopFinder(line3) !== true) {
				
			line3.push(' + ');
				
			} else {
				alert("Syntax Error");
			}
			
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});



		/*************MINUS Button******************/
		document.querySelector(DOM.minus).addEventListener('click', function(){
			if (line3[line3.length - 1] !== " * " && line3[line3.length - 1] !== " / " && line3[line3.length - 1] !== " + " && line3[line3.length - 1] !== " - " && line3.length !== 0 && calc.singleFullstopFinder(line3) !== true) {
				
			line3.push(' - ');
				
			} else {
				alert("Syntax Error");
			}
			
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});



		/*************FULLSTOP Button******************/
		document.querySelector(DOM.fullStop).addEventListener('click', function(){
			if (line3[line3.length - 1] !== "." && calc.fullstopFinder(line3) == false) {
				
			line3.push('.');
				
			} else {
				alert("Syntax Error");
			}

			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});



		/*************ONE Button******************/
		document.querySelector(DOM.one).addEventListener('click', function(){
			line3.push('1');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});




		/*************TWO Button******************/
		document.querySelector(DOM.two).addEventListener('click', function(){
			line3.push('2');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************Three Button******************/
		document.querySelector(DOM.three).addEventListener('click', function(){
			line3.push('3');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************FOUR Button******************/
		document.querySelector(DOM.four).addEventListener('click', function(){
			line3.push('4');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************FIVE Button******************/
		document.querySelector(DOM.five).addEventListener('click', function(){
			line3.push('5');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************SIX Button******************/
		document.querySelector(DOM.six).addEventListener('click', function(){
			line3.push('6');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************SEVEN Button******************/
		document.querySelector(DOM.seven).addEventListener('click', function(){
			line3.push('7');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************EIGHT Button******************/
		document.querySelector(DOM.eight).addEventListener('click', function(){
			line3.push('8');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************NINE Button******************/
		document.querySelector(DOM.nine).addEventListener('click', function(){
			line3.push('9');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************ZERO Button******************/
		document.querySelector(DOM.zero).addEventListener('click', function(){
			line3.push('0');
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});


		/*************EQUAL Button******************/
		document.querySelector(DOM.equal).addEventListener('click', answer);


		/*************ALL CLEAR Button******************/
		document.querySelector(DOM.ac).addEventListener('click', function(){
			calc.allClear();
			console.log(calc.allClear());
			document.querySelector(DOM.line3Interface).textContent = line3Output();
			document.querySelector(DOM.line1).textContent = "";
			document.querySelector(DOM.line2).textContent = "";
		});


		/*************CLEAR Button******************/
		document.querySelector(DOM.clear).addEventListener('click', function(){
			calc.clear();
			document.querySelector(DOM.line3Interface).textContent = line3Output();
		});	
		
	}

	/**********************************************
	**********Input data IF power is ON************
	***********************************************/
	var powerInput = function() {
		
		var power = document.querySelector('.power-image svg').style.display;
		var inr = document.querySelector(DOM.inr).style.display;

		if (power === "none" && inr === "none") {
			document.querySelector('.power-image svg').style.display = "block";
			document.querySelector(DOM.inr).style.display = "block";
			document.querySelector(DOM.line3Interface).textContent = "";
			inputData();

		} else if (power === "block" && inr === "block") {
			document.querySelector('.power-image svg').style.display = "none";
			location.reload();
		}
		
		
	}

	document.querySelector(DOM.power).addEventListener('click', powerInput);	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(calculator);
