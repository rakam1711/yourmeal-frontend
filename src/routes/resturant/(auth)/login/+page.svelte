<script lang="ts">
	import { enhance, applyAction, type SubmitFunction } from '$app/forms';
	// import type { } from './$types'

	export let form: any;

	const handleLogin: SubmitFunction = () => {
		return async ({ result }) => {
			await applyAction(result);
		};
	};

	console.log(console);
</script>

<form action="" method="post" class="flex flex-col" use:enhance={handleLogin}>
	{#if form?.errors.length > 0}
		<p class="text-red-600">{form?.errors[0]}</p>
	{/if}
	<input
		type="email"
		name="email"
		placeholder="Email"
		class="input input-bordered input-primary w-full max-w-xs my-2"
	/>
	<input
		type="password"
		name="password"
		placeholder="Password"
		class="input input-bordered input-primary w-full max-w-xs my-2"
	/>
	<button class="btn btn-secondary w-full max-w-xs my-2">Log In</button>
</form>
