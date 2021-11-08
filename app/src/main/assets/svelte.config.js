import WindiCSS from 'vite-plugin-windicss'
import adapterStatic from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterStatic(),
		appDir: 'svelte',
        router: false,
        hydrate: false,
		vite: {
		 plugins: [
		   WindiCSS(),
		 ],
		},
	}
};

export default config;
