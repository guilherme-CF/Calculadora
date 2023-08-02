var estado;
var op1;
var op2;
var resultado;
var operacao;

let calculadora = {
  numeroArray: new Array(),

  inicializacao: function () {
    estado = "inicializado";
    this.display();
  },
  adicao: function () {
    operacao = "adicao";
    estado = "operando2";
    this.numeroArray = [];
  },
  subtracao: function () {
    operacao = "subtracao";
    estado = "operando2";
    this.numeroArray = [];
  },
  multiplicacao: function () {
    operacao = "multiplicacao";
    estado = "operando2";
    this.numeroArray = [];
  },
  divisao: function () {
    operacao = "divisao";
    estado = "operando2";
    this.numeroArray = [];
  },
  porcento: function () {
    operacao = "porcento";
    estado = "resultado";
    this.numeroArray = [];
  },
  clear: function () {
    calculadora.inicializacao();
    this.numeroArray = [];
  },
  delete: function () {
    this.numeroArray.pop();
    this.atualizar_display();
    this.display();
  },
  result: function () {
    switch (operacao) {
      case "adicao":
        resultado = op1 + op2;
        estado = "resultado";
        this.display();
        break;
      case "subtracao":
        resultado = op1 - op2;
        estado = "resultado";
        this.display();
        break;
      case "divisao":
        resultado = op1 / op2;
        resultado = resultado.toFixed(1);
        estado = "resultado";
        this.display();
        break;
      case "multiplicacao":
        resultado = op1 * op2;
        estado = "resultado";
        this.display();
        break;
      case "porcento":
        resultado = op1 / 100;
        estado = "resultado";
        this.display();
        break;
    }
  },

  display: function () {
    switch (estado) {
      case "inicializado":
        document.getElementById("display").innerText = "0";
        estado = "operando1";
        break;
      case "operando1":
        document.getElementById("display").innerText = op1;
        break;
      case "operando2":
        document.getElementById("display").innerText = op2;
        break;
      case "resultado":
        document.getElementById("display").innerText = resultado;
        estado = "operador1";
        break;
    }
  },

  atualizar_display: function (digito) {
    switch (estado) {
      case "operando1":
        this.numeroArray.push(digito);
        op1 = parseFloat(this.numeroArray.join(""));
        this.display();
        break;
      case "operando2":
        this.numeroArray.push(digito);
        op2 = parseFloat(this.numeroArray.join(""));
        this.display();
        break;
    }
  },
};
