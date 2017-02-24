export default (stringTemplate, data) => {
	const delimiters = /{{\s*(.+?)\s*}}/g;
	return stringTemplate.replace(delimiters, (val, match) => data[match]);
};