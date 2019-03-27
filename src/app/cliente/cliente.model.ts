export class Cliente {
  _id: number;
  nome: string;
  email: string;
  pws: string;
  ativo: boolean;

  validar(confPws: string) {

      let erros: string = "";
      if (this.nome == "") {
          erros += "Por favor digite seu nome. <br>";
      }
      if (this.email == "") {
          erros += "Por favor digite seu email. <br>";
      }
      if (this.pws == "") {
          erros += "Por favor digite sua senha. <br>";
      } else if (this.pws != confPws) {
          erros += "As senhas devem ser iguais. <br>";
      }
      if (erros != "")
          throw erros;

      return true
  }
}