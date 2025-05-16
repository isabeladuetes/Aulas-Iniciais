// Questão 1
let valorCompra = 240;
let ehDiaPromocao = true;
let temCartaoFidelidade = false;
let percentualDesconto = 0;

if (valorCompra >= 200) {
    percentualDesconto += 10;
    console.log("Desconto de 10% aplicado por compra acima de R$200");
} 
if (ehDiaPromocao) {
    percentualDesconto += 15;
    console.log("Desconto adicional de 15% aplicado por ser dia de promoção");
}
if (temCartaoFidelidade) {
    percentualDesconto += 5;
    console.log("Desconto adicional de 5% aplicado por ter cartão fidelidade");
}
let valorDesconto = valorCompra * (percentualDesconto / 100);
let valorFinal = valorCompra - valorDesconto;

console.log(`Valor original: R$${valorCompra.toFixed(2)}`);
console.log(`Total de desconto: ${percentualDesconto}% (R$${valorDesconto.toFixed(2)})`);


// Questão 2
let idade = 15;
let passouExameTeorico = false;
let passouExamePratico = false;

if (idade >= 18) {
    console.log("Você term 18 anos, pode dirigir!");
} 
else {
    console.log("Você não tem idade suficiente para dirigir");
} 
if (passouExameTeorico) {
    console.log("Muito bem, você passou no exame teórico");
} 
else {
    console.log("Não foi dessa vez que você passou no exame prático");
} 
if (passouExamePratico) {
    console.log("Passou no exame prático com sucesso!");
} 
else {
    console.log("Você não pode dirigir");
}


// Questão 3
let anosDeIdade;
let ehFeriado;
let temCartaoDesconto;
let valorIngresso;

anosDeIdade = 70;
ehFeriado = true;
temCartaoDesconto = true;

if (anosDeIdade <= 10) {
    valorIngresso = 20;
    console.log("Categoria: Criança - Preço base: R$20");
} 
else if (anosDeIdade > 60) {
    valorIngresso = 25;
    console.log("Categoria: Idoso - Preço base: R$25");
} 
else {
    valorIngresso = 40;
    console.log("Categoria: Adulto - Preço base: R$40");
} 
if (ehFeriado) {
    let acrescimo = valorIngresso * 0.2;
    valorIngresso += acrescimo
    console.log(`Acréscimo de 20% por ser feriado: -R$ ${acrescimo.toFixed(2)}`);
} 
if (temCartaoDesconto) {
    let desconto = valorIngresso * 0.15;
    valorIngresso -= desconto;
    console.log(`Desconto de 15% por ter cartão: -R$${valorIngresso.toFixed(2)}`);
} console.log(`Preço final do ingresso: R$${valorIngresso.toFixed(2)}`);


// Questão 4
let idadeDaPessoa = 18;
let classificacaoIndicativa = 16;
let acompanhadaPorResponsavel = false;
let temIngresso = true;

if (classificacaoIndicativa >= 16) {
    console.log("Você pode assistir ao filme, divirta-se!");
} 
else {
    console.log("Infelizmente você não pode assistir");
} 
if (acompanhadaPorResponsavel) {
    console.log("A entrada é permitida com um responsável");
} 
else {
    console.log(`Entrada não permitida para menores de ${classificacaoIndicativa} anos`);
} 
if (temIngresso) {
    console.log("Você tem o ingresso, pode entrar");
} 
else {
    console.log("Para entrar é nescessário comprar um ingresso");
}


// Atividade 5
const pontoBase = 100;
const nivelDeDificuldade = 1;
let completouEmTempoRecorde = true;
let coletouTodosItens = false;
let pontosFinais;

pontosFinais = pontoBase * nivelDeDificuldade;

if (completouEmTempoRecorde) {
    pontosFinais *= 2;
}
if (coletouTodosItens) {
    pontosFinais += 150;
}
console.log(`Os pontos ganhos nessa fase é de ${pontosFinais}`);


// Atividade 6
let temperaturaAtual = 12;
let ocasiao = "festa";
let preferenciaColorida = true;
let prefereEstampa = true;

let orcamento = 320;
let preco;
let recomendacao;

if (temperaturaAtual <= 20) 
  if (ocasiao == "casual") {
    recomendacao = "Calça de alfaiateria";
    preco = 100;    
  } else if (ocasiao == "formal") {
    recomendacao = "Terno";
    preco = 189;    
  } else { ocasiao == "festa"
    recomendacao = "Moletom";
    preco = 56;
  }

  if (temperaturaAtual > 20) {
    if (ocasiao == "casual") {
      recomendacao = "Regata";
      preco = 50;    
    } else if (ocasiao == "formal") {
      recomendacao = "Vestido longo";
      preco = 175;    
    } else { ocasiao == "festa"
      recomendacao = "Short";
      preco = 89;
    } 
} console.log(`Recomendamos para essa temperatura de ${temperaturaAtual} ºC uma ${recomendacao} no valor de R$ ${preco}`);

// Atividade 7
let valorJogo = 150;
let diasDeEmprestimo = 15;
let diaDeAtraso = 2
let jogoDanificado = false;
let comunicouAtraso = true;
let multa;
let valorFinal2;

if (diaDeAtraso > 0) {
    if (comunicouAtraso) {
        multa = valorJogo * 0.05
    } else {
        multa = valorJogo * 0.1
    }
}

if (jogoDanificado) {
    multa = valorJogo * 0.2
} 
valorFinal2 = valorJogo + multa; 
console.log("O valor final pago será de R$ " + valorFinal2.toFixed(2));


// Atividade 8 
let materiasDeInteresse = "Biologia";
let horariosDisponiveis = "tarde";
let nivelDeConhecimento = 5;
let prefereEstudarSozinho = true;
let prefereExplicarParaOutros = false;

let materiasDeInteresse2 = "Biologia";
let horariosDisponiveis2 = "tarde";
let nivelDeConhecimento2 = 4;
let prefereEstudarSozinho2 = false;
let prefereExplicarParaOutros2 = true;

let compatibilidade;
let diferencaDeNivel = nivelDeConhecimento - nivelDeConhecimento2;

if (materiasDeInteresse == materiasDeInteresse2) {
    compatibilidade = true;
}
if (horariosDisponiveis == horariosDisponiveis2) {
    compatibilidade = true;
}
if (diferencaDeNivel > 2) {
    compatibilidade = false;
}
if (diferencaDeNivel < 0) {
    diferencaDeNivel -= diferencaDeNivel;
}
if (prefereEstudarSozinho === prefereEstudarSozinho2) {
    compatibilidade = false;
}
if (prefereExplicarParaOutros === prefereExplicarParaOutros2) {
    compatibilidade = false;
}
if (compatibilidade) {
    console.log("Essas pessoas podem estudar juntas!");
} else {
    console.log("Essas pessoas não são compativeis para estudar juntas");
}



// Atividade 9
let idade1 = 16;
let mediaEscolar = 9;
let temJogoEspecifico = false;
let temAutorizacaoPais = true;
let temAdvertencias = false;
let participar;

if (idade1 >= 10) {
    participar = true;
}
if (mediaEscolar >= 7) {
    participar = true;
}
if (temJogoEspecifico) {
    participar = false;
}
if (temAutorizacaoPais < 18) {
    participar = true;
}
if (temAdvertencias) {
    participar = false;
}
if (participar) {
    console.log("Esse aluo pode participar do campeonato de e-sports escolar");
} else {
    console.log("Esse aluno não pode participar do campeonato de e-sports escolar");  
}


// Atividade 10
let tipoDeExercicio = "corrida";
let Duracao = 2;
let frequenciaSemanal = 3;
let atingiuMeta = true;
let compartilhouNasRedes = false;
let recompensa;

if (tipoDeExercicio === "corrida") {
    recompensa =+ 100;
} else if (tipoDeExercicio === "caminhada") {
    recompensa =+ 150;
} else if (tipoDeExercicio === "ciclismo") {
    recompensa =+ 200;
}
if (Duracao >= 4) {
    recompensa =+ 250;
}
if (frequenciaSemanal >= 3) {
    recompensa =+ 100;
}
if (atingiuMeta) {
    recomendacao =+ 400;
}
if (compartilhouNasRedes) {
    recompensa =+ 50;
}
console.log(`A recompensa total é de: ${recomendacao} pontos`);
