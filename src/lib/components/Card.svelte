<script lang="ts">
	interface Item {
		id: string
		name: string
		description: string
		thumbnail: string
		price: string
	}

	export let item: Item
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<img src={item.thumbnail} alt={item.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{item.name}</h2>
		<p>{item.description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Add</button>
		</div>
	</div>
</div>

<style>
	figure {
		height: 280px;
	}
</style>
