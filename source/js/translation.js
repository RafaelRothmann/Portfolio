class translation {

    static contact = {
        success: "Mensagem enviada!",
        error: "Não foi possível enviar sua mensagem.",
        sending: "Enviando..."
      }

    static news(language) {
        const id_news = [
            ["n1-title", "n2-title", "n3-title"],
            ["n1-org", "n2-org", "n3-org"],
            ["n1-time", "n2-time", "n3-time"]
        ];

        var lang, carregado = 0;

        if (language == "pt-br") {
            lang = 0;

        } else if (language == "us") {
            lang = 1;
        }

        fetch('source/db/certificates.json').then((response) => {
            response.json().then((certificate) => {

                document.getElementById("n1-title").innerText = certificate[0]['titulo'][lang];

                if (lang == 0) {
                    document.getElementById("n1-org").innerText = "Organização: " + certificate[0]['org']

                } else if (lang == 1) {
                    document.getElementById("n1-org").innerText = "Company: " + certificate[0]['org']
                }

                document.getElementById("n1-time").innerText = certificate[0]['duracao']

                document.getElementById("n1").href = "source/pages/certificates.html?lang=" + language 
                + "&course=" +certificate[0]['codigo'];
                
            });
        });

        fetch('source/db/events.json').then((response) => {
            response.json().then((events) => {

                document.getElementById("n2-title").innerText = events[0]['titulo'][lang];

                if (lang == 0) {
                    document.getElementById("n2-org").innerText = "Organização: " + events[0]['org']

                } else if (lang == 1) {
                    document.getElementById("n2-org").innerText = "Company: " + events[0]['org']
                }

                document.getElementById("n2-time").innerText = events[0]['duracao']

                document.getElementById("n2").href = "source/pages/certificates.html?lang=" + language 
                + "&course=" + events[0]['codigo'];
                this.traduzirTime(language);
            });
        });

        fetch('source/db/projects.json').then((response) => {
            response.json().then((projects) => {
                document.getElementById("n3-title").innerText = projects[0]['titulo'][lang];

                document.getElementById("n3-org").innerText = projects[0]['linguagens'][lang];

                document.getElementById("n3").href = "source/pages/projects.html?lang=" + language + "#" 
                + projects[0]['codigo'];                
            });
        });

        
    }

    static mudarIdioma(lang, page) {
        const buttonPrincipal = [document.getElementById("principal"), document.getElementById("1-idioma")];
        const buttonSecundario = [document.getElementById("secundario"), document.getElementById("2-idioma"), document.getElementById("button-2")];
        const archive = ["archive/images/flags/", "../../archive/images/flags/"];
        var path;

        if (page == 'index') {
            path = archive[0];
            
        } else {
            path = archive[1];
        }

        this.traduzirHeadandFooter(lang);
        this.botaoHeadandFooter(lang, page);
        this.traduzir(lang, page);

        switch (lang) {
            case 'pt-br':
                buttonPrincipal[0].src = path + "Flag-Brazil.png";
                buttonPrincipal[1].innerHTML = "Português";

                buttonSecundario[0].src = path + "us-uk-flag.jpg";
                buttonSecundario[1].innerHTML = "English";

                buttonSecundario[2].onclick = function goToAmerican() {

                    if (location.href.includes("lang=pt-br")) {
                        window.location.href = location.href.replace("lang=pt-br", "lang=us");
                    } else if (location.href.includes("&")) {
                        window.location.href = page +".html?lang=us" + location.href.substring(location.href.search("&"));
                    } else {
                        window.location.href = page +".html?lang=us";
                    }

                };

                break;
            case 'us':
                buttonPrincipal[0].src = path + "us-uk-flag.jpg";
                buttonPrincipal[1].innerHTML = "English";

                buttonSecundario[0].src = path + "Flag-Brazil.png";
                buttonSecundario[1].innerHTML = "Português";

                buttonSecundario[2].onclick = function goToBrazil() {

                    if (location.href.includes("lang=us")) {
                        window.location.href = location.href.replace("lang=us", "lang=pt-br");
                    } else if (location.href.includes("&")) {
                        window.location.href = page +".html?lang=pt-br" + location.href.substring(location.href.search("&"));
                    } else {
                        window.location.href = page +".html?lang=pt-br";
                    }

                };

                break;

        }

    }

    static traduzir(language, page) {
        switch (page) {
            case 'index':
                this.traduzirIndex(language);
                this.news(language);
                
                break;
            case 'resume':
                
                this.traduzirResume(language);

                break;
            case 'certificates':

                if (language == 'us') {
                    document.title = "Certificate | Rafael Rothmann";
                } else if (language == 'pt-br') {
                    document.title = "Certificado | Rafael Rothmann";
                }

                break;
            case 'projects':
                this.traduzirProjects(language);
                projects.mostar(language);

            break;
            case 'contact':
                this.traduzirContact(language);

            break;
        }
    }

    static traduzirIndex(language) {
        const ids = ["imsd", "me", "resum", "tnews", "uc", "ue", "up"];

        switch (language) {
            case 'us':
                document.title = "Home | Rafael Rothmann";

                const us = [
                    "I'm a Software Developer", "I", "graduated from high school in 2022, and in the following year, I enrolled at the University of Software Engineering. During this period, I improved my skills, resulting in several small projects hosted on GitHub. I possess knowledge of languages such as Java, JavaScript, C++, C#, Lua, HTML, and CSS, as well as Git and UML, which allows me to contribute more effectively to group work.", "Last News","Last Certificate:", 
                    "Last Event:","Last Project:"
                ];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = us[index];
                }

                break;
            case 'pt-br':
                document.title = "Início | Rafael Rothmann";

                const ptbr = [
                    "Eu sou um Desenvolvedor de Software", "Me", "formei no ensino médio em 2022 e, no ano seguinte, ingressei na faculdade de Engenharia de Software. Durante esse período, dediquei-me a aprimorar minhas habilidades técnicas, resultando em diversos mini projetos hospedados no GitHub. Possuo conhecimento sólido em linguagens como Java, Javascript, C++, C#, Lua, HTML e CSS, além de dominar ferramentas como Git e UML, o que me permite contribuir de forma eficaz em projetos de equipe.", "Ultimas Noticias","Ultimo Certificado:","Ultimo Evento:", "Ultimo Projeto:"
                ];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = ptbr[index];
                }

                break;

        }
    }

    static traduzirResume(language) {
        const ids = ["resuM", "ae", "cer", "even", "engenharia", "school", "lssa","ep"];
        this.traduzirTime(language);
        this.traduzirCredencial(language);

        switch (language) {
            case 'us':
                document.title = "Resume | Rafael Rothmann";

                const us = ["I am 19 years old, and I am currently studying Software Engineering at PUCRS. I reside in Porto Alegre, Rio Grande do Sul, actively seeking opportunities to apply and enhance the knowledge gained in the classroom. My passion for programming and software development drives me to pursue an internship that will not only complement my academic background but also provide enriching hands-on experiences. On this page, you will find a detailed record of my academic activities and achievements thus far. ", "Academic Background", "Certificates", "Events",
                    "Bachelor's Degree in Software Engineering", "High School", "LSSA - La Salle Santo Antônio School","Experience"
                ];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = us[index];
                }

                break;
            case 'pt-br':
                document.title = "Currículo | Rafael Rothmann";

                const pt_br = ["Tenho 19 anos, e atualmente curso Engenharia de Software na PUCRS. Resido em Porto Alegre, Rio Grande do Sul, onde busco oportunidades para aplicar e aprimorar os conhecimentos adquiridos em sala de aula. Minha paixão por programação e desenvolvimento de software me motiva a buscar um estágio que não apenas complementará minha formação acadêmica, mas também me proporcionará experiências práticas enriquecedoras. Nesta página, você encontrará um registro detalhado de minhas atividades acadêmicas e conquistas até o momento. ", "Formação acadêmica", "Certificados", "Eventos",
                    "Bacharelado em Engenharia de Software", "Ensino Médio Completo", "LSSA - Colégio La Salle Santo Antônio","Experiências"
                ];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = pt_br[index];
                }

                break;
        }

    }

    static traduzirProjects(language) {
        const ids = ["titulo"];

        switch (language) {
            case 'us':
                document.title = "Projects | Rafael Rothmann";
                const us = ["Projects"];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = us[index];
                }

                break;
            case 'pt-br':
                document.title = "Projetos | Rafael Rothmann";
                const pt_br = ["Projetos"];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = pt_br[index];
                }


                break;
        }
    }

    static traduzirContact(language) {
        const ids = ['form-title','name-title','company-title','country-title','msg-title','enviar'];

        switch (language) {
            case 'us':
                document.title = "Contact | Rafael Rothmann";
                const us = ['Send me a message','Full Name:','Company Name:','Country:','Message:','Send'];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = us[index];
                }

                translation.contact.success = "Message Sent!";
                translation.contact.error = "Could not send your message!";
                translation.contact.sending = "Sending...";

                break;
            case 'pt-br':
                document.title = "Contato | Rafael Rothmann";
                const pt_br = ['Me envie uma mensagem','Nome Completo:','Nome da Empresa:','País:','Mensagem:','Enviar'];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = pt_br[index];
                }

                translation.contact.success = "Mensagem enviada!";
                translation.contact.error = "Não foi possível enviar sua mensagem.";
                translation.contact.sending = "Enviando...";

                break;
        }
    }

    static traduzirHeadandFooter(language) {
        const ids = ["aboutme", "cv", "project", "contact", "resum2", "allC", "aM", "lN", "cV", "pJ", "cTT", "fA", "eV", "gR", "cR", "projects"];


        switch (language) {
            case 'us':
                const us = ["About Me", "Resume", "Projects", "Contact", "I'am 19 years old and this is my website of portifolio, where I shared the projects and events I have participated in over the years. Here, you will find a variety of works that represent my growth and dedication in the field of Technology. I hope these experiences demonstrate my passion for learning and my determination to contribute meaningfully to variours projects and events.",
                    "All Contents", "About Me", "Last News", "Resume", "Projects", "Contact", "Academic Education", "Events", "Graduation", "Courses", "Projects"];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = us[index];
                }

                break;

            case 'pt-br':
                const ptbr = ["Sobre Mim", "Currículo", "Projetos", "Contato",
                    "Tenho 19 anos e este é o meu site de portfolio, onde compartilho os projetos e eventos em que participei ao longo dos anos. Aqui, você encontrará uma variedade de trabalhos que representam meu crescimento e dedicação na area da Tecnologia. Espero que essas experiências demonstrem minha paixão pelo aprendizado e minha determinação em contribuir de forma significativa em diferentes projetos e eventos.", "Todos os Conteúdos", "Sobre mim", "Ultimas Noticias", "Currículo", "Projetos", "Contato", "Formação Academica", "Eventos", "Gradução", "Cursos", "Projetos"];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).innerText = ptbr[index];
                }

                break;
        }




    }

    static botaoHeadandFooter(language, page) {

        const ids = ["home", "aboutme", "cv", "project", "contact", "aM", "lN", "cV", "pJ", "cTT", "eV", "gR", "cR"];
        var archive = {};

        if (page == 'index') {
            archive = ["source/pages/", ""];
        } else {
            archive = ["", "../../"];
        }

        switch (language) {
            case 'pt-br':

                var links_ptbr = [
                    archive[1] + "index.html?lang=pt-br",
                    archive[1] + "index.html?lang=pt-br#aboutMe",
                    archive[0] + "resume.html?lang=pt-br",
                    archive[0] + "projects.html?lang=pt-br",
                    archive[0] + "contact.html?lang=pt-br",
                    archive[1] + "index.html?lang=pt-br#aboutMe",
                    archive[1] + "index.html?lang=pt-br#lastnews",
                    archive[0] + "resume.html?lang=pt-br",
                    archive[0] + "projects.html?lang=pt-br",
                    archive[0] + "contact.html?lang=pt-br",
                    archive[0] + "resume.html?lang=pt-br#events",
                    archive[0] + "resume.html?lang=pt-br#graduted",
                    archive[0] + "resume.html?lang=pt-br#courses"
                ];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).href = links_ptbr[index];
                }


                break;

            case 'us':

                var links_us = [
                    archive[1] + "index.html?lang=us",
                    archive[1] + "index.html?lang=us#aboutMe",
                    archive[0] + "resume.html?lang=us",
                    archive[0] + "projects.html?lang=us",
                    archive[0] + "contact.html?lang=us",
                    archive[1] + "index.html?lang=us#aboutMe",
                    archive[1] + "index.html?lang=us#lastnews",
                    archive[0] + "resume.html?lang=us",
                    archive[0] + "projects.html?lang=us",
                    archive[0] + "contact.html?lang=us",
                    archive[0] + "resume.html?lang=us#events",
                    archive[0] + "resume.html?lang=us#graduted",
                    archive[0] + "resume.html?lang=us#courses"
                ];

                for (let index = 0; index < ids.length; index++) {
                    document.getElementById(ids[index]).href = links_us[index];
                }


                break;
        }
    }

    static traduzirTime(lang) {
        var time = document.getElementsByClassName("time")
        const pt_br = ["Dez", "Abr", "Fev", "Jul", "Jun", "Maio", "Ago", "Set", "Out", "horas", "hora", "minutos", "Duração:", "Verificação emitida em","O momento","mês","meses","ano"]
        const us = ["Dec", "Apr", "Feb", "July", "June", "May", "Aug", "Sept", "Oct", "hours", "hour", "minutes", "Duration:", "Issued on","Present","month","months","year"]

        switch (lang) {
            case 'us':
                for (let i = 0; i < time.length; i++) {
                    for (let j = 0; j < pt_br.length; j++) {
                        time[i].innerHTML = time[i].innerHTML.replace(pt_br[j], us[j]);
                    }
                }

                break;
            case 'pt-br':
                for (let i = 0; i < time.length; i++) {
                    for (let j = 0; j < us.length; j++) {
                        time[i].innerHTML = time[i].innerHTML.replace(us[j], pt_br[j]);
                    }
                }
                break;
        }

    }

    static traduzirCredencial(lang) {
        var credencial = document.getElementsByClassName("credencial")
        const pt_br = ["Código da credencial:", "Exibir credencial"]
        const us = ["Credential Code:", "Show Credential"]

        switch (lang) {
            case 'us':
                for (let i = 0; i < credencial.length; i++) {
                    for (let j = 0; j < pt_br.length; j++) {
                        credencial[i].innerHTML = credencial[i].innerHTML.replace(pt_br[j], us[j]);
                    }
                }

                break;
            case 'pt-br':
                for (let i = 0; i < credencial.length; i++) {
                    for (let j = 0; j < us.length; j++) {
                        credencial[i].innerHTML = credencial[i].innerHTML.replace(us[j], pt_br[j]);
                    }
                }
                break;
        }
    }
}