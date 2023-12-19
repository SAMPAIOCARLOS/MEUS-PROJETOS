let jsonToFormData = (json, parentKey = '') => {
	return Object.entries(json).reduce((formData, [key, value]) => {
		const appendToFormData = (data, parentKey = '') => {
			for (let innerKey in data) {
				if (data.hasOwnProperty(innerKey)) {   /*'innerKey' estava isol ${}*/
					const nestedKey = parentKey ? `${parentKey, innerKey}` : innerKey;
					const innerValue = data[innerKey];

					if (innerValue instanceof File) {
						formData.append(nestedKey, innerValue);
					} else if (Array.isArray(innerValue)) {
						innerValue.forEach((item, index) => {
							const arrayKey = `${nestedKey}[${index}]`;
							appendToFormData(item, arrayKey);
						});
					} else if (typeof innerValue === 'object' && innerValue !== null) {
						appendToFormData(innerValue, nestedKey);
					} else {
						formData.append(nestedKey, innerValue);
					}
				}
			}
		};

		appendToFormData({ [key]: value }, parentKey);

		return formData;
	}, new FormData());
}



fetch('https://api.github.com/search/repositories?q=javascript&per_page=1&page=1')
.then(v => v.json())
.then((v) => {
	let formData = jsonToFormData(v);
	formData.forEach(function(value, key){
		console.log(key + ': ' + value);
	});
});

// retirar esses if else if else e corrigir o bug que tem.






