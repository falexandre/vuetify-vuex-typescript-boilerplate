import moment from "moment";

export function isValid(value: any) {
		if (value === null) {
				return false;
		}
		const typeValue = typeof (value);
		switch (typeValue) {
				case "object":
						return Boolean(Object.entries(value).length);
				case "string":
						return Boolean(value.trim());
				case "undefined":
						return false;
				default:
						return true;
		}
}

export function invertFieldDate(value: any, outFormat = "YYYY-MM-DD") {
		return moment(value).format(outFormat);
}

export function objectToQueryStringParams(obj: any) {
		return "?" + Object.keys(obj).reduce((a: any, k: any) => {
				if (isValid(obj[k])) {
						a.push(`${ k }=${ encodeURIComponent(obj[k]) }`);
				}
				return a;
		}, []).join("&");
}

/**
 * https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
 * numberFormat(12345678.9, 2, 3, ".", ",");  // "12.345.678,90"
 * numberFormat(123456.789, 4, 4, " ", ":");  // "12 3456:7890"
 * numberFormat(12345678.9, 0, 3, "-");       // "12-345-679"
 */
export function numberFormat(value = "", decimal = 2, wholePart = 3, thousandDelimiter = "", decimalDelimiter = ".") {
		value = value.replace(/[^\d]+/g, "");
		const re = "\\d(?=(\\d{" + (wholePart || 3) + "})+" + (decimal > 0 ? "\\D" : "$") + ")",
				num = parseInt(value, 10).toFixed(Math.max(0, decimal));
		return (decimalDelimiter ? num.replace(".", decimalDelimiter) : num)
				.replace(new RegExp(re, "g"), "$&" + (thousandDelimiter || ","));
}

export function moneySave(val: any) {
		const value = val.replace("R$ ", "");
		value.replace(".", "");
		return value.replace(",", ".");
}

export function moneyShow(val: any) {
		const reais = val.toFixed(2).split(".");
		reais[0] = `R$ ${ reais[0].split(/(?=(?:...)*$)/).join(".") }`;
		return reais.join(",");
}

export function payloadValid(values: any) {
		const payload: any = {};
		Object.keys(values)
				.filter((val: any) => Array.isArray(values[val]) || isValid(values[val]))
				.map((val: any) => payload[val] = values[val]);
		return payload;
}

export function route(path: any, view: any, children?: any[], redirect?: any) {
		return {
				path,
				component: (resolve: any) => import(`@/pages/${ view }.vue`).then(resolve),
				children,
				redirect
		};
}

export function importComponent(view: any) {
		return {
				component: (resolve: any) => import(`@/pages/${ view }.vue`).then(resolve),
		};
}

export const set = (property: any) => (state: any, payload: any) => (state[property] = payload);
export const setMerge = (property: any) => (state: any, payload: any) => (state[property] = { ...state[property], ...payload });
export const toggle = (property: any) => (state: any) => (state[property] = !state[property]);
