

class Carros{
    constructor(nome,marca,hp){
        this.nome = nome
        this.marca = marca
        this.hp = hp
        this.velocidade = 0


    }
    escolher(){
        
        let escolha = prompt("Escolha um deses carros: Celta, Uno, Escort, Gol")

        if(escolha === "Celta"){
            alert("Voce escolheu " + car1.marca+" "+ car1.nome +" de " + car1.hp+" Cavalos")
        }else if(escolha === "Uno"){
            alert("Voce escolheu " + car2.marca +" "+ car2.nome + " de "+ car2.hp+" Cavalos" )
        }else if(escolha === "Escort"){
            alert("Voce escolheu " +car3.marca+" "+ car3.nome + " de " + car3.hp+" Cavalos")
        }else{
            alert("Voce escolheu " + car4.marca +" "+ car4.nome +" de " + car4.hp+" Cavalos")
        }
        alert("Voce esta pronto para corrida.")
    }

    acelerar(aceleracao) {
        this.velocidade += aceleracao;
        alert(`O carro   acelerou para ${this.velocidade} km/h.`);
      }
      frear() {
        this.velocidade = 0;
        alert(`O carro   freiou.`);
      }

      curva(){
        alert(`O carro fez a curva fechada e conseguiu o primeiro lugar`)
      }
      reta(){
        this.velocidade = 140;
        alert(`O carro  acelerou para ${this.velocidade} km/h e conseguiu ganhar a corrida`);
      }


}



const car1 = new Carros ("Celta","Chevrolet",140 )
const car2 = new Carros ("Uno","Volkswagen",110)
const car3 = new Carros ("Escort","Ford",115)
const car4 = new Carros ("Gol","Volkswagen",116)

car1.escolher()
car1.acelerar(50);
car1.acelerar(30);
car1.frear();
car1.curva()
car1.reta()



car2.escolher()
car2.acelerar(50);
car2.acelerar(30);
car2.frear();
car2.curva()
car2.reta()


car3.escolher()
car3.acelerar(50);
car3.acelerar(30);
car3.frear();
car3.curva()
car3.reta()


car4.escolher()
car4.acelerar(50);
car4.acelerar(30);
car4.frear();
car4.curva()
car4.reta()





