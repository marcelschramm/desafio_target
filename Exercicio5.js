let str = "Exemplo de string para inverter";

let inverted = "";

for (let i = str.length - 1; i >= 0; i--) {
  inverted += str[i];
}

console.log(inverted);
