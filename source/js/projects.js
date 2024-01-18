class projects {

    static mostar(language){

        var lang;

        if(language == 'pt-br') {
            lang = 0;
        } else if (language == 'us') {
            lang = 1;
        }

        fetch('../db/projects.json').then((response) => {
            response.json().then((project) => {
                for (let index = 0; index < project.length; index++) {
                    var a = document.createElement("a");
                    a.target = "_blank";
                    a.href = project[index]['url'];

                    var h3 = document.createElement("h3");
                    h3.innerText = project[index]['titulo'][lang];

                    var h5 = document.createElement("h5");
                    h5.innerText = project[index]['descricao'][lang];
                    
                    var img = document.createElement("img");
                    img.src = project[index]['img'];

                    var p = document.createElement('p');
                    p.innerText = project[index]['linguagens'][lang];

                    a.appendChild(h3);
                    a.appendChild(img);
                    a.appendChild(h5);
                    a.appendChild(p);

                    document.getElementById("projetos").appendChild(a);
                }

            });
        });

    }



}