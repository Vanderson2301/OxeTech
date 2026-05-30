// Três barrinhas do menu mobile
const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")


menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
 });

 //Projetos

 const projetos = [
    {
        nome: "Delícia do Bolo",
        descricao: "Projeto desenvolvido para um cliente real utilizando HTML, CSS, JavaScript, Tailwind CSS e ReactJS para criar um site moderno de vendas de bolos e doces, permitindo que os clientes escolham os produtos e enviem os pedidos diretamente pelo WhatsApp do proprietário.",
        imagem: "./delicia_Bolo.png",
        link: "https://deliciadebolo.vercel.app/"},
    {
        nome: "Consulta de Notas dos Alunos",
        descricao: "Projeto desenvolvido para gerenciar e consultar notas dos alunos, com interface intuitiva e funcionalidades para que os alunos possam visualizar suas notas e desempenho acadêmico.",
        imagem: "./projeto_Alunos.png",
        link: "https://surpresa-nine-alpha.vercel.app/"},
    
 ];
 const projetosContainer = document.getElementById("projetosContainer");
 function exibirProjetos(lista) {
    projetosContainer.innerHTML = "";
    lista.forEach(projeto => {
        projetosContainer.innerHTML += `
            <div class="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg mt-5 mx-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            
            <img src="${projeto.imagem}" alt="${projeto.nome}" class="w-full h-auto object-cover">
            
            <div class="p-6">
            
            <h3 class="text-2xl font-bold text-gray-800 mb-3">${projeto.nome}</h3>

            <p class="text-gray-600 leading-7 text-justify">${projeto.descricao}</p>
            </div>

            <button class="flex justify-items bg-blue-500 text-white px-4 py-2 rounded-full mx-auto my-5 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><a href="${projeto.link}" target="_blank">Ver Projeto</a></button>
        `;
    });
}
exibirProjetos(projetos);

//formulário

const form = document.getElementById("contatoForm");
const feedBack = document.getElementById("feedBack");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    feedBack.classList.remove("hidden");
    form.reset();
    setTimeout(() => {
        feedBack.classList.add("hidden");
    }, 3000);
});