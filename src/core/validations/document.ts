export function isCPFvalid(strCPF: any) {
		let Soma;
		let Resto;
		Soma = 0;
		strCPF = strCPF.replace(/[^\d]+/g, "");
		if (strCPF.length !== 11) {
				return false;
		}
		const invalidNumbers = ["00000000000", "11111111111", "22222222222",
				"33333333333", "44444444444", "55555555555", "66666666666",
				"77777777777", "88888888888"];
		if (invalidNumbers.indexOf(strCPF) !== -1) {
				return false;
		}

		for (let i = 1; i <= 9; i++) {
				Soma = Soma + parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
		}
		Resto = (Soma * 10) % 11;

		if ((Resto === 10) || (Resto === 11)) {
				Resto = 0;
		}
		if (Resto !== parseInt(strCPF.substring(9, 10), 10)) {
				return false;
		}

		Soma = 0;
		for (let i = 1; i <= 10; i++) {
				Soma = Soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
		}
		Resto = (Soma * 10) % 11;

		if ((Resto === 10) || (Resto === 11)) {
				Resto = 0;
		}
		if (Resto !== parseInt(strCPF.substring(10, 11), 10)) {
				return false;
		}
		return true;
}

export function isCNPJvalid(strCNPJ: any) {
		strCNPJ = strCNPJ.replace(/[^\d]+/g, "");
		if (strCNPJ.length !== 14) {
				return false;
		}
		const invalidNumbers = ["00000000000000", "11111111111111", "22222222222222",
				"33333333333333", "44444444444444", "55555555555555", "66666666666666",
				"77777777777777", "88888888888888"];
		if (invalidNumbers.indexOf(strCNPJ) !== -1) {
				return false;
		}

		// Valida DVs
		let tamanho = strCNPJ.length - 2;
		let numeros = strCNPJ.substring(0, tamanho);
		const digitos = strCNPJ.substring(tamanho);
		let soma = 0;
		let pos = tamanho - 7;
		for (let i = tamanho; i >= 1; i--) {
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2) {
						pos = 9;
				}
		}
		let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado.toString() !== digitos.charAt(0)) {
				return false;
		}

		tamanho = tamanho + 1;
		numeros = strCNPJ.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (let i = tamanho; i >= 1; i--) {
				soma += numeros.charAt(tamanho - i) * pos--;
				if (pos < 2) {
						pos = 9;
				}
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado.toString() !== digitos.charAt(1)) {
				return false;
		}

		return true;
}

export function isDocumentValid(value: any, type: any) {
		if (type === "F") {
				return isCPFvalid(value);
		}
		return isCNPJvalid(value);
}
