let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarCodigo(){
    let textarea = document.querySelector(".textarea").value
    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role" : "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": "Você é um programador que ajuda a gerar códigos de negócios com base na descrição fornecida pelo usuário. responda com o código da pagina em HTML e CSS e sem comentários. sempre mostrando em português Brasileiro."
                }
            ]
        })
    });

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content
    let codigoRetornado = document.querySelector(".codigo")
    let SiteRetornado = document.querySelector(".Site")
    SiteRetornado.srcdoc = resultado
    codigoRetornado.textContent = resultado
    console.log(resultado)
}
