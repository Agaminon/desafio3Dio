// Definir a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criar instâncias de heróis
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');

// Realizar ataques
heroi1.atacar();
heroi2.atacar();