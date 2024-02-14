class page {
    static gerrarHeader(){
        let header = document.getElementById("header");
    
        let h1 = document.createElement("h1");
        let a_h1 = document.createElement("a");
        a_h1.innerText = "RAFAEL ROTHMANN";
        a_h1.id = "home";
    
        h1.appendChild(a_h1);
    
        let nav = document.createElement("nav");
        
        let div_seletion = document.createElement("div");
        div_seletion.className = "seletion";

        div_seletion.addEventListener(("mouseover"),() => {
            sistem.mostrarLinguagens()
        });

        div_seletion.addEventListener(("mouseout"),() => {
            sistem.esconderLinguagens()
        });
    
        let div_seleted = document.createElement("div");
        div_seleted.id = "seleted";
    
        let buttonPrincipal = document.createElement("button");
        buttonPrincipal.disabled = true;
        
        let img_flag_p = document.createElement("img");
        img_flag_p.id="principal";
        img_flag_p.className = "flag";
    
        let p_1_idioma = document.createElement("p");
        p_1_idioma.innerText = "Português";
        p_1_idioma.id="1-idioma";
    
        buttonPrincipal.appendChild(img_flag_p);
        buttonPrincipal.appendChild(p_1_idioma);
    
        div_seleted.appendChild(buttonPrincipal);
    
        div_seletion.appendChild(div_seleted);
    
        let div_options = document.createElement("div");
        div_options.id = "options";
    
        let buttonSecundario = document.createElement("button");
        buttonSecundario.id="button-2";
    
        let img_flag_s = document.createElement("img");
        img_flag_s.id="secundario";
        img_flag_s.className = "flag";
    
        let p_2_idioma = document.createElement("p");
        p_2_idioma.innerText = "English";
        p_2_idioma.id="2-idioma";
    
        buttonSecundario.appendChild(img_flag_s);
        buttonSecundario.appendChild(p_2_idioma);
    
        div_options.appendChild(buttonSecundario);
    
        div_seletion.appendChild(div_options);
    
        nav.appendChild(div_seletion);
    
        let ul = document.createElement("ul");
    
        let li_am = document.createElement("li");
        li_am.innerHTML = "<a id='aboutme'>Sobre Mim</a>";
    
        let li_cv = document.createElement("li");
        li_cv.innerHTML = "<a id='cv'>Currículo</a>";
    
        let li_pj = document.createElement("li");
        li_pj.innerHTML = "<a id='project'>Projetos</a>";
    
        let li_ct = document.createElement("li");
        li_ct.innerHTML = "<a id='contact'>Contato</a>";
    
        ul.appendChild(li_am);
        ul.appendChild(li_cv);
        ul.appendChild(li_pj);
        ul.appendChild(li_ct);
    
    
        nav.appendChild(ul);
    
        header.appendChild(h1);
        header.appendChild(nav);
    
        this.gerrarFooter();
    }
    
    static gerrarFooter() {
        let footer = document.getElementById("footer");

        let div_ft = document.createElement("div")
        div_ft.id = "ft";

        let div_resum_footer = document.createElement("div")
        div_resum_footer.id = "resum-footer";

        let h1 = document.createElement("h1")
        h1.innerText = "RAFAEL ROTHMANN";

        let p_resum2 = document.createElement("p")
        p_resum2.id = "resum2"
        p_resum2.innerText = "Tenho 19 anos e este é o meu site de portfolio, onde compartilho os projetos e eventos em que participei ao longo dos anos. Aqui, você encontrará uma variedade de trabalhos que representam meu crescimento e dedicação na area da Tecnologia. Espero que essas experiências demonstrem minha paixão pelo aprendizado e minha determinação em contribuir de forma significativa em diferentes projetos e eventos.";

        div_resum_footer.appendChild(h1)
        div_resum_footer.appendChild(p_resum2)

        let div_lin = document.createElement("div")
        div_lin.id = "lin"

        let ul_link_1 = document.createElement("ul")
        ul_link_1.className = "link"
        ul_link_1.innerHTML= "<li><h6 id='allC'>Todos os Conteúdos</h6></li><li><a id='aM'>Sobre mim</a></li><li><a  id='lN'>Ultimas Noticias</a></li><li><a id='cV'>Currículo</a></li><li><a id='pJ'>Projetos</a></li><li><a id='cTT'>Contato</a></li>"

        let ul_link_2 = document.createElement("ul")
        ul_link_2.className = "link"
        ul_link_2.innerHTML = "<li><h6 id='fA'>Formação Academica</h6></li><li><a id='eV'>Eventos</a></li><li><a id='gR'>Gradução</a></li><li><a id='cR'>Cursos</a></li>";

        let ul_link_3 = document.createElement("ul")
        ul_link_3.className = "link"
        ul_link_3.innerHTML = "<li><h6 id='projects'>Projetos</h6></li><li><a href='https://github.com/RafaelRothmann/Portfolio' id='wS' target='_blank'>Protifolio</a></li><li><a href='https://github.com/RafaelRothmann/Chess-System_Java-Project' id='cS' target='_blank'>Chess System</a></li><li><a href='https://github.com/RafaelRothmann/Beecrowd-Cpp' id='bC' target='_blank'>Beecrowd Cpp</a></li>"

        div_lin.appendChild(ul_link_1)
        div_lin.appendChild(ul_link_2)
        div_lin.appendChild(ul_link_3)

        div_ft.appendChild(div_resum_footer)
        div_ft.appendChild(div_lin)

        let div_c = document.createElement("div")
        div_c.innerHTML = "<p id='credits'></p>"

        footer.appendChild(div_ft)
        footer.appendChild(div_c)

        console.log(footer)

    }
}



