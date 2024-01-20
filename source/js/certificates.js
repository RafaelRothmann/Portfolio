class certificates {

    static openCertificate(courseName) {
        var course = "course=" + courseName;
        var lang = null;

        switch (document.getElementById("1-idioma").innerText) {
            case 'Português':
                lang = "lang=pt-br";

                break;
            case 'English':
                lang = "lang=us";

                break;
        }

        window.location.href = "certificates.html?" + lang + "&" + course;
    }

    static seeCertificate() {
        var params = {};

        location.search.slice(1).split("&").forEach(function (pair) {
            pair = pair.split("=");
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        });

        if (params['lang'] != 'us' && params['lang'] != 'pt-br') {
            params['lang'] = 'pt-br';
        }

        this.changePage(params['course'], params['lang']);
    }

    static changePage(course, language) {
        translation.mudarIdioma(language, 'certificates');
        sistem.versaoSite();
        var img, titulo, desc1, desc2, desc3, desc4, lang;
        var found = false;

        if (language == 'pt-br') {
            lang = 0;
        } else if (language == 'us') {
            lang = 1;
        }

        fetch('../db/certificates.json').then((response) => {
            response.json().then((certificates) => {
                for (let index = 0; index < certificates.length; index++) {
                    if (certificates[index]['codigo'] == course) {
                        found = true;

                        titulo = certificates[index]['titulo'][lang];
                        desc1 = certificates[index]['org'];
                        desc2 = certificates[index]['emissao'];
                        desc3 = certificates[index]['duracao'];
                        desc4 = certificates[index]['credencial'];
                        img = "../../archive/images/certificates/certificate-" + certificates[index]['codigo'] + certificates[index]['tipo'];

                    }

                }

                if (!found) {
                    this.procurarEventos(found, lang, language, course);
                } else {
                    this.preencherCampos(titulo, desc1, desc2, desc3, desc4, img, language, found);
                }

            });
        });




    }


    static procurarEventos(found, lang, language, course) {
        var img, titulo, desc1, desc2, desc3, desc4, lang;

        fetch('../db/events.json').then((response) => {
            response.json().then((events) => {
                for (let index = 0; index < events.length; index++) {
                    if (events[index]['codigo'] == course) {
                        found = true;

                        titulo = events[index]['titulo'][lang];
                        desc1 = events[index]['org'];
                        desc2 = events[index]['emissao'];
                        desc3 = events[index]['duracao'];
                        desc4 = events[index]['credencial'];
                        img = "../../archive/images/certificates/certificate-" + events[index]['codigo'] + events[index]['tipo'];


                    }

                }

                if (!found) {
                    titulo = "Error File 404";
                    img = "../../archive/images/other/construcao.png";
                    desc1 = "O Curso de codigo <b>" + course + "</b> não foi possível ser encontrado!";
                    desc2 = "Na linguagem <b>" + language + "</b>!!";
                    desc3 = "Porfavor entre em contato nós enviando essa imagem ao email: ";
                    desc4 = "<a href='mailto:r.m.rothmann@gmail.com?subject=Imagem não encontrada!!&body=" + desc1.replace("<b>", "").replace("</b>", "") +
                        " " + desc2.replace("<b>", "").replace("</b>", "") + "'>r.m.rothmann@gmail.com</a>";
                }

                this.preencherCampos(titulo, desc1, desc2, desc3, desc4, img, language, found);

            });
        });
    }

    static preencherCampos(titulo, desc1, desc2, desc3, desc4, img, language, found) {

        var titleCertificate = document.createElement("h2")
        titleCertificate.innerText = titulo;
        titleCertificate.id = "titleCertificate";

        var a = document.createElement("a");
        a.id = "download";
        a.target = "_blank";
        a.href = img;

        var course = document.createElement("img");
        course.id = "course";
        course.src = img;

        var div_desc = document.createElement("div");
        div_desc.id = "desc";

        var desc_1 = document.createElement("p");
        desc_1.id = "desc1";

        if (language == 'pt-br' && found){
            desc_1.innerText = "Empresa: " + desc1;
        } else if (language == 'us' && found) {
            desc_1.innerText = "Company: " + desc1;
        } else {
            desc_1.innerHTML = desc1;
        }

        div_desc.appendChild(desc_1);
        
        var desc_2 = document.createElement("p");
        desc_2.id = "desc2";
        desc_2.className = "time";
        desc_2.innerHTML = desc2;
        

        div_desc.appendChild(desc_2);
    
        var desc_3 = document.createElement("p");
        desc_3.id = "desc3";
        desc_3.className = "time";
        desc_3.innerHTML = desc3;
        

        div_desc.appendChild(desc_3);

        var desc_4;

        if (desc4 != null) {
            desc_4 = document.createElement("p");
            desc_4.id = "desc4";
            desc_4.className = "credencial";
            desc_4.innerHTML = desc4;
            

            div_desc.appendChild(desc_4);
        }

        a.appendChild(course);
        

        var section = document.getElementById("certificate");
        section.appendChild(titleCertificate);
        section.appendChild(a);
        section.appendChild(div_desc);

        translation.traduzirTime(language);
        translation.traduzirCredencial(language);
    }


}