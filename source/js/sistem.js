class sistem {

    static mostrarLinguagens() {
        document.getElementById("options").style = "visibility: visible;";
    }

    static esconderLinguagens() {
        document.getElementById("options").style = "visibility: hidden;";
    }

    static async verLinguagem(page_now) {
        await page.gerrarHeader();

        if (location.href.includes("lang=us")) {
            translation.mudarIdioma("us", page_now);

        } else if (location.href.includes("lang=pt-br")) {
            translation.mudarIdioma("pt-br", page_now);

        } else {
            translation.mudarIdioma("pt-br", page_now);

        }

        this.versaoSite();
    }

    static versaoSite() {
        const data = Date().toString().split(" ")
        document.getElementById("credits").innerText = data[1] + " " + data[3] + " © Rafael Melo Rothmann";
    }

    static calcTime(data_start, data_end) {
        if (data_end == null) {
            data_end = new Date();
        } else {
            data_end = new Date(data_end);
        }
        data_start = new Date(data_start);

        const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

        let diff = monthDiff(data_start, data_end);

        if (diff <= 1) {
            return "1 mês";
        } else if (diff < 12) {
            return diff + " meses";
        } else if (diff == 12) {
            return (diff / 12) + " ano";
        } else {
            return (diff / 12) + " anos";
        }

    }
}