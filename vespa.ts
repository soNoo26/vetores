import * as readline from 'readline';

function findWordsWithLetterA(words: string[]): string[] {
  const wordsWithLetterA: string[] = [];

  for (const word of words) {
    if (word.toLowerCase().includes('a')) {
      wordsWithLetterA.push(word);
    }
  }

  return wordsWithLetterA;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Digite 5 palavras separadas por espaço: ', (input) => {
    const words = input.split(' ');

    if (words.length !== 5) {
      console.log('Você deve digitar exatamente 5 palavras.');
      rl.close();
      return;
    }

    const wordsWithLetterA = findWordsWithLetterA(words);

    if (wordsWithLetterA.length === 0) {
      console.log('Nenhuma palavra contém a letra "a".');
    } else {
      console.log('Palavras que contêm a letra "a":');
      console.log(wordsWithLetterA.join(', '));
    }

    rl.close();
  });
}

main();