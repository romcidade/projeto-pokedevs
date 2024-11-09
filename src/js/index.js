//PASSO 1 - Precisamos criar uma variavel no JS para trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

			//PASSO 3 - remover a classe aberto só do cartão que tá aberto
		const cartaoPokedevAberto = document.querySelector("aberto");
		cartaoPokedevAberto.classList.remove("aberto");
		
		//PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
		const idPokedevSelecionado = pokedev.attributes.id.value;
		const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
		const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
		cartaoPokedevParaAbrir.classList.add("aberto");

		//PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem

})
})
