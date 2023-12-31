class sistem {

    static mostrarLinguagens() {
        document.getElementById("options").style = "visibility: visible;";
    }
    
    static esconderLinguagens() {
        document.getElementById("options").style = "visibility: hidden;";
    }

    static verLinguagem(page) {
        if (location.href.includes("?lang=us")) {
            translation.mudarIdioma("us", page);

        } else if (location.href.includes("?lang=pt-br")) {
            translation.mudarIdioma("pt-br", page);

        } else {
            translation.mudarIdioma("pt-br", page);

        }

        this.versaoSite();
    }

    static versaoSite() {
        const data = Date().toString().split(" ")
        document.getElementById("credits").innerText = data[1] + " " + data[3] + " © Rafael Melo Rothmann";
    }
}