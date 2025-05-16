class Carro{
    constructor(modelo,cor){
        this.modelo = modelo;
        this.cor = cor;
        this.velocidadeAtual = 0;
    }
    acelerar(valor){
        this.velocidadeAtual += valor;
        console.log(`${this.modelo}acelerou.velocidade atual:${this.velocidadeAtual}`);
    }
    frear(valor){
        this.velocidadeAtual -= valor;
        if(this.velocidadeAtual < 0){
            this.velocidadeAtual = 0;
        }
        console.log(`Modelo ${this.modelo}, Freou, Cor ${this.cor}, Velocidade ${this.velocidadeAtual} Km/h`);
    }
    mostrarStatus(){
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Velocidade: ${thi.velocidadeAtual}`);
    }
}
let carro = new Carro("Jetta, Preto ");
//carro.mostrarStatus():
carro.acelerar(283);
carro.frear(126);