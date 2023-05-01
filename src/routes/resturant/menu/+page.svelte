<script lang="ts">
	import { enhance, applyAction, type SubmitFunction } from '$app/forms'
	import Card from '$lib/components/Card.svelte'

	let addNewItem = false

	export let form: any

	const handleAddItem: SubmitFunction = () => {
		addNewItem = false
		return async ({ result }) => {
			await applyAction(result)
		}
	}
</script>

<div class="p4 grid relative w-full h-full">
	{#if form && form.success}
		<Card item={form.data.item} />
	{/if}

	<label for="add-item-form" class="btn">Add New Item</label>

	<input type="checkbox" id="add-item-form" class="modal-toggle" bind:checked={addNewItem} />
	<label for="add-item-form" class="modal cursor-pointer">
		<label class="modal-box relative" for="">
			<form action="" method="post" class="flex flex-col py-4" use:enhance={handleAddItem}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					class="input input-bordered input-primary w-full my-2"
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					class="input input-bordered input-primary w-full my-2"
				/>
				<input
					type="text"
					name="thumbnail"
					placeholder="Thumbnail"
					class="input input-bordered input-primary w-full my-2"
				/>
				<input
					type="text"
					name="price"
					placeholder="Price"
					class="input input-bordered input-primary w-full my-2"
				/>
				<input
					type="text"
					name="quantity"
					placeholder="Quantity"
					class="input input-bordered input-primary w-full my-2"
				/>
				<input
					type="text"
					name="category"
					placeholder="Category"
					class="input input-bordered input-primary w-full my-2"
				/>
				<input
					type="text"
					name="tags"
					placeholder="Tags"
					class="input input-bordered input-primary w-full my-2"
				/>
				<div class="flex justify-between">
					<button type="submit" class="btn btn-secondary w-full max-w-xs my-2">Add</button>
					<button class="modal-action btn btn-primary my-2" on:click={() => (addNewItem = false)}
						>Cancel</button
					>
				</div>
			</form>
		</label>
	</label>
</div>
