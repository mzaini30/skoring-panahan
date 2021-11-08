<svelte:head>
	<title>Skoring Panahan</title>
</svelte:head>

<div id="jarak" v-on:mounted='mounted'>
	<div class="p-6">
		<h1 class="text-center mb-6 font-serif text-2xl">Skoring Panahan</h1>

		<a href="/" v-for='x in jaraknya.sort((a, b) => a - b).reverse()' class="list" v-text='x + " meter"'></a>	
		<a href="" class="list" v-on:click.prevent='menuTambah = true'>Tambahkan Jarak</a>
	</div>

	<div v-if='menuTambah'>
		<div class="w-full h-screen bg-gray-800/50 cursor-pointer fixed top-0 left-0" v-on:click='menuTambah = false'></div>
		<div class="fixed top-0 left-0">
			<form action="" v-on:submit.prevent='tambahJarak' class="bg-white mt-10 w-[80%] mx-auto p-4">
				<div class="mb-3">Masukkan Jarak (dalam meter)</div>
				<input type="tel" v-model='inputJarak' class="mb-3 border w-full p-2 border-blue-300" required>
				<input type="submit" value="Tambahkan" class="bg-green-500 text-white py-1 px-3 cursor-pointer">
			</form>
		</div>
	</div>
</div>

<div>
	<script>
		PetiteVue.createApp({
			jaraknya: [],
			inputJarak: '',
			menuTambah: false,
			mounted(){
				if (localStorage.jarak) {
					this.jaraknya = JSON.parse(localStorage.jarak)
				}
			},
			tambahJarak(){
				this.jaraknya = [...this.jaraknya, this.inputJarak]
				this.menuTambah = false
				this.inputJarak = ''
				this.jaraknya = [...new Set(this.jaraknya)]
				localStorage.jarak = JSON.stringify(this.jaraknya)
			}
		}).mount('#jarak')
	</script>
</div>

<style>
	.list {
		@apply p-3 block border mb-2 rounded shadow
	}
	input {
		@apply focus:outline-none;
	}
</style>