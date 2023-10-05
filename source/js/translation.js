function news(lang) {
    const id_news = [
        ["n1-title", "n2-title", "n3-title"],
        ["n1-org", "n2-org", "n3-org"],
        ["n1-time", "n2-time", "n3-time"]
    ];
    const buttonPrincipal = document.getElementById("1");

    if (lang == "Português") {
        const news_ptbr = [
            ["Curso de Lua", "Curso de GitHub", "Participação Erad"],
            ["Organização: Udemy", "Organização: Microsoft", "Organização: SBC"],
            ["Duração: 4 horas", "Duração: 1 hora 52 minutos", "Duração: 24 horas"]
        ];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.getElementById(id_news[i][j]).innerText = news_ptbr[i][j];  
            }
        }
    } else if (lang == "English") {
        const news_usuk = [
            ["Course of Lua", "Course of GitHub", "Participation Erad"],
            ["Company: Udemy", "Company: Microsoft", "Company: SBC"],
            ["Duration: 2 hours", "Duration: 1 hour 52 minutes", "Duration: 24 hours"]
        ];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.getElementById(id_news[i][j]).innerText = news_usuk[i][j];
            }
        }
    }
}

function mudarIdiomaIndex(button) {
    const buttonPrincipal = [document.getElementById("principal"), document.getElementById("1")];
    const buttonSecundario = [document.getElementById("secundario"), document.getElementById("2")];

    switch (button) {
        case 'secundario':
            if (buttonSecundario[1].innerText == "English" && buttonPrincipal[1].innerText == "Português") {

                buttonPrincipal[0].src = "archive/images/flags/us-uk-flag.jpg";
                buttonPrincipal[1].innerText = "English";

                buttonSecundario[0].src = "archive/images/flags/Flag-Brazil.png";
                buttonSecundario[1].innerText = "Português";
                traduzirIndex('us');
                news("English");
            } else if (buttonSecundario[1].innerText == "Português" && buttonPrincipal[1].innerText == "English") {

                buttonPrincipal[0].src = "archive/images/flags/Flag-Brazil.png";
                buttonPrincipal[1].innerText = "Português";

                buttonSecundario[0].src = "archive/images/flags/us-uk-flag.jpg";
                buttonSecundario[1].innerText = "English";
                traduzirIndex('pt-br');
                news("Português");
            }
            break;
    }

}

function traduzirIndex(lang) {

    const ids = [
        "aboutme", "cv", "project", "contact", "imsd", "me", "resum", "tnews","resum2","allC","aM","lN","cV","pJ","cTT","fA","eV","gR","cR","projects"
    ];

    switch (lang) {
        case 'us':

            const usuk = [
                "About Me", "Resume", "Project", "Contact", "I'm a Software Developer", "I", "graduated from high school in 2022, and in the following year, I enrolled at the University of Software Engineering. During this period, I improved my skills, resulting in several small projects hosted on GitHub. I possess knowledge of languages such as Java, JavaScript, C++, Lua, HTML, and CSS, as well as Git and UML, which allows me to contribute more effectively to group work.", "Last News", "I'am 19 years old and this is my website of portifolio, where I shared the projects and events I have participated in over the years. Here, you will find a variety of works that represent my growth and dedication in the field of Technology. I hope these experiences demonstrate my passion for learning and my determination to contribute meaningfully to variours projects and events.","All Contents","About Me","Last News","Resume","Projects","Contact","Academic Education","Events","Graduation","Courses","Projects"
            ]

            for (let index = 0; index < ids.length; index++) {
                document.getElementById(ids[index]).innerText = usuk[index];
            }

            break;
        case 'pt-br':

            const ptbr = [
                "Sobre Mim", "Currículo", "Projetos", "Contato", "Eu sou um Desenvolvedor de Software", "Me", "formei no ensino médio em 2022 e, no ano seguinte, ingressei na faculdade de Engenharia de Software. Durante esse período, dediquei-me a aprimorar minhas habilidades técnicas, resultando em diversos mini projetos hospedados no GitHub. Possuo conhecimento sólido em linguagens como Java, Javascript, C++, Lua, HTML e CSS, além de dominar ferramentas como Git e UML, o que me permite contribuir de forma eficaz em projetos de equipe.", "Ultimas Noticias","Tenho 19 anos e este é o meu site de portfolio, onde compartilho os projetos e eventos em que participei ao longo dos anos. Aqui, você encontrará uma variedade de trabalhos que representam meu crescimento e dedicação na area da Tecnologia. Espero que essas experiências demonstrem minha paixão pelo aprendizado e minha determinação em contribuir de forma significativa em diferentes projetos e eventos.","Todos os Conteúdos","Sobre mim","Ultimas Noticias","Currículo","Projetos","Contato","Formação Academica","Eventos","Gradução","Cursos","Projetos"
            ];

            for (let index = 0; index < ids.length; index++) {
                document.getElementById(ids[index]).innerText = ptbr[index];
            }

            break;

    }
}