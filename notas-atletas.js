class Atleta {
  constructor(atletas) {      //constructor que recebe a matriz de objetos.
    this.atletas = atletas; //instancia a matriz na propriedade atletas do objeto.
  }
  ordenaNotas() {
    // let notasOrdenadas = [];
    // for (let i = 0; i < copiaAtletas.length; i++) {
    //   notasOrdenadas.push(
    //     this.atletas[i].notas.sort((a, b) => a - b)
    //   );
    // }
    // return notasOrdenadas;
    let notasOrdenadas = this.atletas.map(e => {
        return e.notas.sort((a, b) => a - b);
    });
    return notasOrdenadas;
  }
  eliminarMaiorEMenorNota() {
    let notasAjustadas = this.ordenaNotas().map(notas => {
      return notas.slice(1, -1);  //Remove a primeira e a última nota
    });

    return notasAjustadas;
  }
  somaMedia() {
    let notasAjustadas = this.eliminarMaiorEMenorNota();
    let resultados = notasAjustadas.map(notas => {
      let soma = notas.reduce((acc, curr) => acc + curr, 0);

      let media = soma / notas.length;
      if (media % 1 === 0) {
        return { media: parseInt(media) };
      } else {
        return { media: parseFloat(media.toFixed(6)) };
      }
    });

    return resultados;
  }

    imprimeResultado() {
        
        //imagem do atleta
        const imagem = "https://imgix.bustle.com/2016/8/5/453179574.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg";
        const hora = new Date();
        //percorrer a matriz de atletas
        this.atletas.map((atleta, index) => {
            const medias = this.somaMedia();
            const impressao = document.getElementById("geral");
            //imprimir no HTML
 
             impressao.innerHTML += `
                <div class="resultado-item">
                    <img src=${imagem} class='resultado-imagem' alt='atleta'>
                    <div class="resultado-conteudo">
                        <h2>Atleta</h2>
                        <p> <strong>Nome:</strong> ${atleta.nome} <br> <strong>Notas:</strong> ${atleta.notas.sort((a,b)=>b-a)}<br> <strong>Media:</strong> ${medias[index].media}</p>
                        <p class="resultado-extra">Data: ${hora.toLocaleDateString('es-ES')}</p>
                    </div>
                </div>
            `; 
              //mostrar na consola
            return console.log(`>nome: ${atleta.nome} \n>notas: ${atleta.notas.sort((a,b)=>b-a)} \n>media: ${medias[index].media}`)
        });
    }
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

const AtletaF = new Atleta(atletas);
AtletaF.imprimeResultado()
