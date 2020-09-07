
Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'd3.5e_cn',
			lang: 'cn',
			dir: 'compendium'
		}); 
	}
});