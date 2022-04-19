

const prompt = require('prompt-sync')();

console.clear();

const heroi = prompt(`Qual seu nome herói: `);

prompt(`

aperte qualquer tecla para continuar ${heroi}...
`)

console.clear();

console.log(`

-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

Bem-vindo herói "${heroi}" aqui começa sua jornada guerreiro do mares...

Você percorreu a imensidão vasta dos mares mais profundos e perigosos para resgatar
a mais linda princesa de todos os tempos, Arnya filha do rei da Terra de Tunix, seu rei.

Black Skull, o navio pirata mais perigoso dos sete mares, em suas mãos é como um leão
pronto para açoitar os seres mais perigosos que cruzam seu caminho.

Você ${heroi} é mais temido que mil serpentes marinhas quando se torna um com o seu navio. 
E nas sombras, no covio dos mais ardilosos forasteiros do mar, muitos são os que perguntam:
"como pode um pirata como nós ser contra nós". Não sabem eles que entre a luz e a
escuridão, surgem o que alguns chamam de anti-heróis, mas para aqueles que você trouxe
liberdade você é White ${heroi} o terror dos piratas e para os maus você prefere ser 
chamado de Black ${heroi}!!!

E agora o seu rei quer recompensá-lo, conforme a bravura para honra sua, sobre todo o reino, 
ou conforme sua fraqueza para desprezo do seu nome em toda a Terra de Tunix.


Apresente-se "${heroi}", seu rei Jorgrak quer te fazer algumas perguntas e definir seu
destino

boa sorte

-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

\n\n`);

prompt(`

aperte ENTER guerreiro para continuar...

`)

console.clear();

let quantidadeSim = 0;

const pergunta1 = `
Destemido guerreiro ${heroi} a princesa Arnya foi trazida por ti sã e salva? [0 = não | 1 = sim]`;

const pergunta2 = `
Você valente ${heroi} capturou o feiticeiro "Rohran o maldito" que orquestrou o rapto da 
princesa Arnya? [0 = não | 1 = sim]`;

const pergunta3 = `
Eu soube que o dragão dos mares, "Binian a serpente infernal", agora é um troféu em suas 
mãos. Você trouxe a cabeça dela para mim ${heroi}? [0 = não | 1 = sim]`;

const pergunta4 = `
A Terra de Valzorler teme o reino de Tunix, e todos aqueles irmãos de "Rohran o maldito" 
nunca mais ousarão intentar contra nós de Tunix, graças a você bravo ${heroi}? [0 = não | 1 = sim]`;

const pergunta5 = `
A bondade dos habitantes de Paxilia é para conosco por você ${heroi} ter libertado-os dos 
maquiavélicos exércitos do bruxo Rohran das terras de Valzorler que os mantia cativeiros? [0 = não | 1 = sim]`;


console.log(`
-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
`);

console.log(pergunta1);
const respostaPergunta1 = Number.parseInt(prompt());

respostaPergunta1 == 1 && quantidadeSim++;

console.log(`
-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
`);

console.log(pergunta2);
const respostaPergunta2 = Number.parseInt(prompt());

respostaPergunta2 == 1 && quantidadeSim++;

console.log(`
-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
`);

console.log(pergunta3);
const respostaPergunta3 = Number.parseInt(prompt());

respostaPergunta3 == 1 && quantidadeSim++;

console.log(`
-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
`);

console.log(pergunta4);
const respostaPergunta4 = Number.parseInt(prompt());

respostaPergunta4 == 1 && quantidadeSim++;

console.log(`
-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
`);

console.log(pergunta5);
const respostaPergunta5 = Number.parseInt(prompt());

respostaPergunta5 == 1 && quantidadeSim++;

console.log(`
-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

`);


prompt(`

Agora o bondoso e justo rei Jorgrak de Tunix irá pronunciar sobre ti ${heroi}
honra ou desonra conforme seus atos e sua lealdade a sua terra e aos seus irmãos

aperte ENTER para saber seu destino herói ${heroi}...

`)

console.clear();

quantidadeSim === 0 && console.log(`Rei Jorgrak de Tunix diz: 

Guerreiro ${heroi} você falhou miseravelmente, para com seu povo e para com o seu rei.
Agora você será conhecido como "${heroi} o miserável" e seu nome será motivo de desonra
enquanto você viver.

`);

(quantidadeSim === 1 || quantidadeSim === 2) && console.log(`Rei Jorgrak de Tunix diz: 

Guerreiro ${heroi} você falhou quase totalmente, mas não se apresentou de mãos vazias.
A minha bondade estará contigo, te darei mais uma chance "${heroi}": vá, alimente-se,
recobre o ânimo, você partirá pela manhã e só voltará com as mão cheias, diga-nas das
honras do seu rei.

`);

quantidadeSim === 3 && console.log(`Rei Jorgrak de Tunix diz: 

Bravo guerreiro ${heroi} acaso suas mãos abriram-se nos segundos finais deixando escapar
a sua glória que estava sendo derramada como ouro sobre elas?
Óh destemido ${heroi} foi por muito pouco eu sei.
Eu sei do seu esforço em fazer tudo que lhe pedi com perfeição e por esse motivo,
considerei o trabalho que quase foi completamente feito, para sua honra.
Venha, revigore-se e junte-se aos seus irmão de Tunix que aguardavam ansiosos por sua
volta.

`);


quantidadeSim === 4 && console.log(`Rei Jorgrak de Tunix diz: 

É intrépido e astuto "Black ${heroi}" o terror dos piratas, temos algo em comum, nós dois
não somos medíocres. O sabor da caça é muito melhor quando depois de morta, retiramos a 
melhor parte e colocamos os melhores temperos para depois saboreá-la.

Faltou aquele tempero jovem ${heroi} não foi? Por um pouco a glória completa, não é mesmo?
Eu já fui jovem e vou de dar um conselho: "regozije-se com o que você tem no prato sem
perder o ímpeto de ter algo melhor amanhã para comer".

Agora venha e alegre-se com seus irmãos de Tunix, você fez um bom trabalho.


`);



quantidadeSim === 5 && console.log(`Rei Jorgrak de Tunix diz: 

Black ${heroi}, seu nome será lembrado por muitas gerações em Tunix, e a minha gratidão
será do tamanho do meu maior tesouro. 

Bravo e leal ${heroi} você trouxe de volta minha filha, a princesa Arnya, a flor dos meus
dias de volta para mim e para minha amada rainha Meenia.

E por esse motivo você será conhecido de agora em diante por "Sir ${heroi} o honrado", e seu
nome será lembrado por muitas gerações como o homem mais leal do rei Jorgrak, aquele que
cumpriu inquestionavelmente todas as tarefas passadas por mim.

Minha casa será sua casa e você irá morar junto ao meu castelo enquanto você respirar sobre
a terra.

`);
