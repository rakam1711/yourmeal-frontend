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

<div class="card w-80 bg-base-100 shadow-xl">
	<figure>
		<div
			style={`
			background: url('${item.thumbnail}');
			background-size: cover;
			background-position: center;
		`}
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{item.name}</h2>
		<p>{item.description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Edit</button>
		</div>
	</div>
</div>

<style>
	figure {
		height: 180px;
	}

	figure > div {
		height: 100%;
		width: 100%;
	}
</style>
