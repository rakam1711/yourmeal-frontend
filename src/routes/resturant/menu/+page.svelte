<script lang="ts">
	import { enhance, applyAction, type SubmitFunction } from '$app/forms'
	export let form: any

	const handleAddItem: SubmitFunction = () => {
		return async ({ result }) => {
			console.log(result)
			await applyAction(result)
		}
	}
	console.log(form)
</script>

<div class="p4 grid">
	{#if form && form.success}
		<div>
			<img src={form.data.item.thumbnail} alt="" />
			name: {form.data.name}
			description: {form.data.description}
			price: {form.data.price}
			quantity: {form.data.quantity}
			category: {form.data.category}
			tags: {form.data.tags}
		</div>
	{/if}

	<form action="" method="post" class="flex flex-col" use:enhance={handleAddItem}>
		<input
			type="text"
			name="name"
			placeholder="Name"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<input
			type="text"
			name="description"
			placeholder="Description"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<input
			type="text"
			name="thumbnail"
			placeholder="Thumbnail"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<input
			type="text"
			name="price"
			placeholder="Price"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<input
			type="text"
			name="quantity"
			placeholder="Quantity"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<input
			type="text"
			name="category"
			placeholder="Category"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<input
			type="text"
			name="tags"
			placeholder="Tags"
			class="input input-bordered input-primary w-full max-w-xs my-2"
		/>
		<button type="submit" class="btn btn-secondary w-full max-w-xs my-2">Add</button>
	</form>
</div>
