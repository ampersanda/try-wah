fetch('./output.wasm')
		.then(response => response.arrayBuffer())
		.then(bytes => WebAssembly.instantiate(bytes))
		.then(results => {
			document.getElementById('container').textContent = results.instance.exports.add_func(10);
		}).catch(console.error);
