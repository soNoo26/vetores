import * as readlineSync from 'readline-sync';

function encontrarMNome(nomes: string[]): string {
  let MNome = nomes[0];
    for (let i = 1; i < nomes.length; i++) {
        if (nomes[i].length > MNome.length) {
            MNome = nomes[i];
    }
  }
  return MNome;
}
function main() {
  const QNomes = 5;
  const nomes: string[] = [];

  for (let i = 0; i < QNomes; i++) {
    const nome = readlineSync.question(`Digite o ${i + 1} nome: `);
        nomes.push(nome);
  }
     const MNome = encontrarMNome(nomes);
        console.log(`O maior nome é: ${MNome}`);
}
main();