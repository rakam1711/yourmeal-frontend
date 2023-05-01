<script lang="ts">
	import { enhance, applyAction, type SubmitFunction } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: any

	const handleRegister: SubmitFunction = () => {
		return async ({ result }) => {
			await applyAction(result)
		}
	}
</script>

<form action="" method="post" class="flex flex-col" use:enhance={handleRegister}>
	{#if form?.errors.length > 0}
		<p class="text-red-600">{form?.errors[0]}</p>
	{/if}
	<input
		type="text"
		name="firstname"
		placeholder="First Name"
		class="input input-bordered input-primary w-full max-w-xs my-2"
	/>
	<input
		type="text"
		name="lastname"
		placeholder="Last Name"
		class="input input-bordered input-primary w-full max-w-xs my-2"
	/>
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
	<input
		type="password"
		name="confirmPassword"
		placeholder="Confirm Password"
		class="input input-bordered input-primary w-full max-w-xs my-2"
	/>
	<input
		type="text"
		name="phone"
		placeholder="Phone"
		class="input input-bordered input-primary w-full max-w-xs my-2"
	/>

	<button class="btn btn-secondary w-full max-w-xs my-2">Register</button>
</form>
