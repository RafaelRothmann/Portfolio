mudarImagemnoticias();

function mudarImagemnoticias(){
    const news = ["archive/images/certificates/certificate-Lua.jpg","archive/images/certificates/certificate-Lua.jpg","archive/images/certificates/certificate-Lua.jpg"];

    const id_imgNews = ["n1-img","n2-img","n3-img"]

    for (let index = 0; index < news.length; index++) {
        document.getElementById(id_imgNews[index]).src=news[index];
    }
}

function mostrarLinguagens() {
    document.getElementById("options").style = "visibility: visible;";
}

function esconderLinguagens() {
    document.getElementById("options").style = "visibility: hidden;";
}