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

    static changePage(course, lang) {
        translation.mudarIdioma(lang, 'certificates');
        sistem.versaoSite();
        var arquivo, titulo, desc1, desc2, desc3, desc4;

        switch (course) {
            case 'LuaUDEMY':
                switch (lang) {
                    case "pt-br":
                        titulo = "Aprenda a programar em Lua";
                        desc1 = "Empresa: Udemy";
                        desc2 = "Duração: 4 horas";
                        desc3 = "Emitida em Setembro de 2023";
                        desc4 = "Código da credencial: UC-fa5e6ff6-148a-4c92-8d9e-8a09e53008d8";

                        break;
                    case "us":
                        titulo = "Learn to program in Lua";
                        desc1 = "Company: Udemy";
                        desc2 = "Duration: 4 hours";
                        desc3 = "Issued on September 2023";
                        desc4 = "Credential Code: UC-fa5e6ff6-148a-4c92-8d9e-8a09e53008d8";

                        break;
                }

                arquivo = "LuaUDEMY.jpg";

                break;
            case 'MCGITHUB2023':
                switch (lang) {
                    case "pt-br":
                        titulo = "Conceitos Básicos de GitHub - Noções básicas de administração e recursos do produto";
                        desc1 = "Empresa: Microsoft";
                        desc2 = "Duração: 1 hora 52 minutos";
                        desc3 = "Emitida em Maio de 2023";
                        desc4 = " ";

                        break;
                    case "us":
                        titulo = "Basic Concepts of GitHub - Basic Notions of Administration and Product Features";
                        desc1 = "Company: Microsoft";
                        desc2 = "Duration: 1 hour 52 minutes";
                        desc3 = "Issued on May 2023";
                        desc4 = " ";

                        break;
                }

                arquivo = "MCGITHUB2023.jpg";
                break;
            case 'ERAD2023':
                switch (lang) {
                    case "pt-br":
                        titulo = "XXIII Escola Regional de Alto Desempenho da Região Sul";
                        desc1 = "Empresa: Sociedade Brasileira de Computação (SBC)";
                        desc2 = "Duração: 24 horas";
                        desc3 = "Emitida em Maio de 2023";
                        desc4 = " ";

                        break;
                    case "us":
                        titulo = "XXIII Regional High Performance School of the Southern Region";
                        desc1 = "Company: Sociedade Brasileira de Computação (SBC)";
                        desc2 = "Duration: 24 hours";
                        desc3 = "Issued on May 2023";
                        desc4 = " ";

                        break;
                }

                arquivo = "ERAD2023.jpg";

                break;
            case 'JavaSpringBoot-2023':
                switch (lang) {
                    case 'pt-br':
                        titulo = "Curso Online de Java";
                        desc1 = "Empresa: Rockseat";
                        desc2 = "Duração: 4 horas";
                        desc3 = "Emitida em Outubro de 2023";
                        desc4 = "Código da credencial: 69aa42ef-6251-41ca-9e71-e33803a8a40c";


                        break;
                    case 'us':
                        titulo = "Online Java Course";
                        desc1 = "Company: Rockseat";
                        desc2 = "Duration: 4 hours";
                        desc3 = "Issued on October 2023";
                        desc4 = "Credential Code: 69aa42ef-6251-41ca-9e71-e33803a8a40c";

                        break;
                }

                arquivo = 'JavaSpringBoot-2023.png';
                break;
            case 'Cambly':
                switch (lang) {
                    case 'pt-br':
                        titulo = "Certificado de Conclusão Cambly";
                        desc1 = "Empresa: Cambly";
                        desc2 = "Duração: 12 horas";
                        desc3 = "Emitida em Novembro de 2023";
                        desc4 = "Código da credencial: f3fe2054";

                        break;
                    case 'us':
                        titulo = "Cambly Certificate of Accomplishment";
                        desc1 = "Company: Cambly";
                        desc2 = "Duration: 12 hours";
                        desc3 = "Issued on November 2023";
                        desc4 = "Código da credencial: f3fe2054";

                        break;
                }
                
                arquivo = 'Cambly.png'
            break;
            default:

                titulo = "Error File 404";
                arquivo = "";
                desc1 = "O Curso de codigo <b>" + course + "</b> não foi possível ser encontrado!";
                desc2 = "Na linguagem <b>" + lang + "</b>!!";
                desc3 = "Porfavor entre em contato nós enviando essa imagem ao email: ";
                desc4 = "<a href='mailto:r.m.rothmann@gmail.com?subject=Imagem não encontrada!!&body=" + desc1.replace("<b>", "").replace("</b>", "") +
                    " " + desc2.replace("<b>", "").replace("</b>", "") + "'>r.m.rothmann@gmail.com</a>";

                break;

        }

        document.getElementById('titleCertificate').innerHTML = titulo;
        document.getElementById('desc1').innerHTML = desc1;
        document.getElementById('desc2').innerHTML = desc2;
        document.getElementById('desc3').innerHTML = desc3;
        document.getElementById('desc4').innerHTML = desc4;
        document.getElementById("course").src = "../../archive/images/certificates/certificate-" + arquivo;
        document.getElementById("download").href = "../../archive/images/certificates/certificate-" + arquivo;
    }

}