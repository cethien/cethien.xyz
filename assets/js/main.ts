import persist from '@alpinejs/persist';
import Alpine from 'alpinejs';

declare global {
	interface Window {
		Alpine: typeof Alpine;
	}
}

window.Alpine = Alpine;

Alpine.plugin(persist);
Alpine.start();

import './init';
