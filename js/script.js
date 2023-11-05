function enviarFormulario() {
    const formulario = document.getElementById("meuFormulario");
    const nome = formulario.elements.nome.value;
    const email = formulario.elements.email.value;
    const portalDuvidas = formulario.elements.portalDuvidas.value; // Novo campo

    // Construir a URL com os parâmetros, incluindo o novo campo
    const url = `formAction.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&duvida=${encodeURIComponent(duvida)}&portalDuvidas=${encodeURIComponent(portalDuvidas)}`;


    // Redirecionar automaticamente para a página de ação
    window.location.href = url;

    // Impedir o envio tradicional do formulário
    return false;
}
