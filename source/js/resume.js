class resume {

    static langResume() {
        if (location.href.includes("pt-br")) {
            return 0;
        } else if (location.href.includes("us")){
            return 1;
        } else {
            return 0;
        }
    }

    static gerarCertificado() {

        var language = this.langResume();

        fetch('../db/certificates.json').then((response) => {
            response.json().then((certificado) => {
                for (let index = 0; index < certificado.length; index++) {
                    var div = document.createElement("div");
                    div.className = "t";

                    var img = document.createElement("img");
                    img.className = "company";
                    img.src = certificado[index]["img"];

                    var div_info = document.createElement("div")
                    div_info.className = "info"

                    var h3 = document.createElement("h3")
                    h3.id = certificado[index]["codigo"]
                    h3.innerText = certificado[index]["titulo"][language]

                    var p_company = document.createElement("p")
                    p_company.innerText = certificado[index]["org"]

                    var p_emissao = document.createElement("p")
                    p_emissao.className = "time"
                    p_emissao.innerText = certificado[index]["emissao"]

                    var p_duracao = document.createElement("p")
                    p_duracao.className = "time"
                    p_duracao.innerText = certificado[index]["duracao"]

                    var p_credencial = document.createElement("p")
                    p_credencial.className = "credencial"
                    p_credencial.innerText = certificado[index]["credencial"]

                    var button = document.createElement("button")
                    button.className = "credencial"
                    button.innerText = "Exibir credencial"
                    button.addEventListener("click", () => {
                        certificates.openCertificate(certificado[index]["codigo"])
                    });

                    div_info.appendChild(h3)
                    div_info.appendChild(p_company)
                    div_info.appendChild(p_emissao)
                    div_info.appendChild(p_duracao)
                    div_info.appendChild(p_credencial)
                    div_info.appendChild(button)

                    div.appendChild(img)
                    div.appendChild(div_info)

                    console.log(div)

                    document.getElementById("courses").appendChild(div)

                }
                sistem.verLinguagem('resume')
            });
        });

    }
}
