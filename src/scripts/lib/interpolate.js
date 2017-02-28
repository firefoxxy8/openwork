const matchingFunction = data => (val, match) => {
	const matchedData = data[match];
	if (matchedData) {
		return data[match];
	}
	const result = match.split('.').reduce((o, i) => o[i], data);
	return result;
};

export default (stringTemplate = '', data = {}) => {
	const delimiters = /{{\s*(.+?)\s*}}/g;
	return stringTemplate.replace(delimiters, matchingFunction(data));
};
