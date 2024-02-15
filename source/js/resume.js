class resume {

    static language;

    static langResume() {
        if (location.href.includes("pt-br")) {
            return 0;
        } else if (location.href.includes("us")) {
            return 1;
        } else {
            return 0;
        }
    }

    static async gerenciarResume() {
        this.language = await this.langResume();

        const gerrar = await (() => {
            this.gerrarExperiencias();
            this.gerarCertificado();
            this.gerrarEventos();
        });
        gerrar();

        sistem.verLinguagem('resume');
    }

    static gerarCertificado() {

        fetch('../db/certificates.json').then((response) => {
            response.json().then((certificado) => {
                for (let index = 0; index < certificado.length; index++) {
                    this.criar(certificado, index, "courses");
                }
            });
        });

    }

    static gerrarEventos() {

        fetch('../db/events.json').then((response) => {
            response.json().then((eventos) => {
                for (let index = 0; index < eventos.length; index++) {
                    this.criar(eventos, index, "events");
                }
            });
        });

    }

    static gerrarExperiencias() {
        fetch("../db/experience.json").then((response) => {
            response.json().then((experience) => {
                for (let i = 0; i < experience.length; i++) {
                    let img = document.createElement("img");
                    img.src = experience[i]["img"];
                    img.className = "company";

                    let div_info = document.createElement("div")
                    div_info.className = "info";

                    let h3 = document.createElement("h3");
                    h3.innerText = experience[i]["titulo"][this.language];

                    let p_desc = document.createElement("p");
                    p_desc.innerText = experience[i]["empresa"] + " · " + experience[i]["tipo"][this.language];

                    let data = experience[i]["duracao"];

                    let p_time = document.createElement("p");
                    p_time.innerText = data["completo"] + " · " + sistem.calcTime(data["inicio"], data["fim"])
                    p_time.className = "time";

                    let p_end = document.createElement("p");
                    p_end.innerText = experience[i]["localizacao"][this.language] + " · " + experience[i]["modelo"][this.language];

                    let div_t = document.createElement("div");
                    div_t.className = "t";

                    div_info.appendChild(h3);
                    div_info.appendChild(p_desc);
                    div_info.appendChild(p_time);
                    div_info.appendChild(p_end);

                    div_t.appendChild(img);
                    div_t.appendChild(div_info);

                    document.getElementById("work").appendChild(div_t)

                }
                
            });
        });
    }

    static criar(array, index, tipo) {
        var div = document.createElement("div");
        div.className = "t";

        var img = document.createElement("img");
        img.className = "company";
        img.src = array[index]["img"];

        var div_info = document.createElement("div");
        div_info.className = "info";

        var h3 = document.createElement("h3");
        h3.id = array[index]["codigo"];
        h3.innerText = array[index]["titulo"][this.language];

        var p_company = document.createElement("p");
        p_company.innerText = array[index]["org"];

        var p_emissao = document.createElement("p");
        p_emissao.className = "time";
        p_emissao.innerText = array[index]["emissao"];

        var p_duracao = document.createElement("p");
        p_duracao.className = "time";
        p_duracao.innerText = array[index]["duracao"];

        div_info.appendChild(h3);
        div_info.appendChild(p_company);
        div_info.appendChild(p_emissao);
        div_info.appendChild(p_duracao);

        if (array[index]["credencial"] != null) {
            var p_credencial = document.createElement("p");
            p_credencial.className = "credencial";
            p_credencial.innerText = array[index]["credencial"];
            div_info.appendChild(p_credencial);
        }

        var button = document.createElement("button");
        button.className = "credencial";
        button.innerText = "Exibir credencial";

        button.addEventListener("click", () => {
            certificates.openCertificate(array[index]["codigo"])
        });

        var img_link = document.createElement("img");
        img_link.src = "../../archive/images/other/link-externo.png";
        img_link.className = "link-img";

        button.appendChild(img_link);

        div_info.appendChild(button);

        div.appendChild(img);
        div.appendChild(div_info);

        console.log(div);

        document.getElementById(tipo).appendChild(div);
    }

}
