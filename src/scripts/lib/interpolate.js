const matchingFunction = data => (val, match) => {
	const matchedData = data[match];
	if(matchedData) {
		return data[match];
	}

	console.log(match,data[match]);
	return '';
};

export default (stringTemplate, data) => {
	const delimiters = /{{\s*(.+?)\s*}}/g;
	return stringTemplate.replace(delimiters, matchingFunction(data));
};
