
export const isObjectEmpty = (obj) => {
	return Object.keys(obj).length === 0 ? true : false;
}

export const isStringNotEmpty = (str) => {
	return str.length === 0 ? false : true;
}