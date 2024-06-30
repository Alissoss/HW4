const height = 4;
function createTree(height) {
    
let tree = '';

for (let i = 1; i <= height; i++) {

let spaces = ' '.repeat(height - i);

let stars = '*'.repeat(2 * i - 1);

tree += spaces + stars + '\n';
}
return tree.trim();
}

const Fir = createTree(height);
console.log(Fir);