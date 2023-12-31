class sistem {

    static versaoSite() {
        const data = Date().toString().split(" ")
        document.getElementById("credits").innerText = data[1] + " " + data[3] + " © Rafael Melo Rothmann";
    }

    static mostrarLinguagens() {
        document.getElementById("options").style = "visibility: visible;";
    }

    static esconderLinguagens() {
        document.getElementById("options").style = "visibility: hidden;";
    }
}