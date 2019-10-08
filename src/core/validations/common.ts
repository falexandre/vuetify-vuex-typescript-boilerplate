import { isValid } from "../utils/FuncHelpers";

export function Required(val: any) {
		return isValid(val) || "Este campo é obrigatório";
}

export function Email(val: any) {
		const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return isValid(val) && Boolean(val.match(pattern)) || "E-mail inválido";
}

export function SameAsPassword(val: any, compare: any) {
		return val === compare || "Senhas diferentes";
}
