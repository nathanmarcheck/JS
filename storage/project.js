document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-cadastro");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("name").value;
        const idade = document.getElementById("idade").value;

        const aluno = { nome: nome, idade: idade };
        let lista_alunos = JSON.parse(localStorage.getItem('relacaoalunos')) || [];
        lista_alunos.push(aluno);

        localStorage.setItem('relacaoalunos', JSON.stringify(lista_alunos));
        form.reset();
        exibir_alunos();
    });

    exibir_alunos();
});
function exibir_alunos(){
    const lista_alunos = JSON.parse(localStorage.getItem('relacaoalunos')) || []
    const output = document.getElementById('output')
    output.innerHTML = ""
    for(let i = 0; i < lista_alunos.length; i++){
        let li = document.createElement('li')
        li.textContent = 'Nome: ' + lista_alunos[i].nome + 'Idade:' + lista_alunos[i].idade;
        output.appendChild(li)
    }

}
