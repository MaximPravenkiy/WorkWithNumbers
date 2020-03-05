function buttonOnClick() {
	result.innerHTML = '';
	let x = 0;
	let x1 = document.getElementById('x1').value;
	let x2 = document.getElementById('x2').value;
	if (x1 === '' || x2 === '') {
		alert("Поля х1 и х2 должны быть заполнены.")
	} else {
		x1 = parseInt(x1);
		x2 = parseInt(x2);
		if (Number.isNaN(x1) || Number.isNaN(x2)) {
			alert("В поля x1 и x2 должны быть введены числовые значения.");
		} else {
			let selected = radio()
			if (selected == 'sum') {
				if (x1 <= x2) { 
					while (x1 <= x2) {
						x = x + x1;
						x1++;
			 		}
			 	} else {
			 		while (x1 >= x2) {
			 			x = x + x1;
			 			x1--;
			 		}
			 	}
				result = document.getElementById('result');
				result.append("Сумма всех чисел от х1 до х2 = " + x);
			} else if (selected	== 'multiply') {
				x = 1;
				if (x1 <= x2) { 
					while (x1 <= x2) {
						x = x * x1;
						x1++;
			 		}
			 	} else {
			 		while (x1 >= x2) {
			 			x = x * x1;
			 			x1--;
			 		}
			 	}
				result.append("Произведение всех чисел от x1 до х2 = " + x);
			} else {
				// 1-ый вариант решения
				if (x1 < 2 || x2 < 2) {
					alert("В поле x1 и x2 должны быть введены натуральные числа большие 2");
				} else {
					if (x2 < x1) {
						alert("Введите x1 меньше, чем х2.");
					} else {
						let massiv = resheto(x2);
						console.log(massiv);
						let simple = [];
						while (x1 < massiv.length) {
							if (massiv[x1] == 1) {
								simple.push(x1);
							}
							x1++;
						}
						console.log(simple);
						result.append("Простые числа из заданного промежутка: " + simple); 
					}
				}

				/* 2-ой вариант решения
				let simple_numbers = [];
				while (x1 <= x2) {
					if (x1 % 2 != 0 && x1 % 3 != 0 && x1 % 5 != 0 && x1 % 7 != 0) {
						simple_numbers.push(x1);
					}
					x1++;
				}
				alert(simple_numbers); */

			}
		}
	}
} 

function ClearInput() {
	document.getElementById('x1').value = "";
	document.getElementById('x2').value = "";
}


function radio() {
	let selected = 0;
	let radio = document.getElementsByName('operation');
	for (let i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			return radio[i].value;
		}
	}
}

function resheto(x2) {
	let resheto = [];
	for (let i = 2; i <= x2; i++) {
		resheto[i] = 1;
	}
	for (i = 2; i * i <= x2; i++) {
		if (resheto[i] == 1) {
			for (j = i * i; j <= x2; j += i) {
				resheto[j] = 0;
			}
		}
	}
	return resheto;
}
