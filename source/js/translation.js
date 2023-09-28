function mudarIdiomaHtml(button) {

    const buttonPrincipal = [document.getElementById("principal"), document.getElementById("1")];
    const buttonSecundario = [document.getElementById("secundario"), document.getElementById("2")];

    switch (button) {
        case 'secundario':
            if (buttonSecundario[1].innerText == "English" && buttonPrincipal[1].innerText == "Português") {

                buttonPrincipal[0].src = "../archive/images/flags/us-uk-flag.jpg";
                buttonPrincipal[1].innerText = "English";

                buttonSecundario[0].src = "../archive/images/flags/Flag-Brazil.png";
                buttonSecundario[1].innerText = "Português";
                traduzir('us');

            } else if (buttonSecundario[1].innerText == "Português" && buttonPrincipal[1].innerText == "English") {

                buttonPrincipal[0].src = "../archive/images/flags/Flag-Brazil.png";
                buttonPrincipal[1].innerText = "Português";

                buttonSecundario[0].src = "../archive/images/flags/us-uk-flag.jpg";
                buttonSecundario[1].innerText = "English";
                traduzir('pt-br');

            }
            break;
    }

}

function traduzir(lang) {

    const ids = [
        "aboutme", "cv", "project", "contact", "imsd", "me", "resum"
    ];

    switch (lang) {
        case 'us':

            const usuk = [
                "About Me", "Resume", "Project", "Contact", "I'm a Software Developer","I","graduated from high school in 2022, and in the following year, I enrolled at the University of Software Engineering. During this period, I improved my skills, resulting in several small projects hosted on GitHub. I possess knowledge of languages such as Java, JavaScript, C++, Lua, HTML, and CSS, as well as Git and UML, which allows me to contribute more effectively to group work."
            ]

            for (let index = 0; index < ids.length; index++) {
                document.getElementById(ids[index]).innerText = usuk[index];
            }

        break;
        case 'pt-br':

        const ptbr = [
            "Sobre Mim", "Currículo", "Projetos", "Contato", "Eu sou um Desenvolvedor de Software", "Me", "formei no ensino médio em 2022 e, no ano seguinte, ingressei na faculdade de Engenharia de Software. Durante esse período, dediquei-me a aprimorar minhas habilidades técnicas, resultando em diversos mini projetos hospedados no GitHub. Possuo conhecimento sólido em linguagens como Java, Javascript, C++, Lua, HTML e CSS, além de dominar ferramentas como Git e UML, o que me permite contribuir de forma eficaz em projetos de equipe."
        ];

        for (let index = 0; index < ids.length; index++) {
            document.getElementById(ids[index]).innerText = ptbr[index];
        }

        break;

    }

}