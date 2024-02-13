class page {
    static gerrarHeader(){
        let header = document.createElement("header");
    
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
    
        document.getElementById("body").appendChild(header);
    }
    
}



