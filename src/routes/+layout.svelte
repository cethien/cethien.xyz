<script>
	import { toggleTheme } from '$lib/theme'
	import '../app.css'
</script>

<svelte:head>
	<title>cethien.xyz</title>
</svelte:head>

<header class="flex items-center justify-between px-2 py-1">
	<h1
		class="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text py-2 text-5xl font-extrabold text-transparent"
	>
		cethien.xyz
	</h1>
	<button
		on:click={() => toggleTheme()}
		class="flex items-center justify-center text-2xl"
	>
		<span
			class="icon-[material-symbols--light-mode] dark:icon-[material-symbols--dark-mode]"
		></span>
	</button>
</header>

<main class="px-2 py-1">
	<slot />
</main>
