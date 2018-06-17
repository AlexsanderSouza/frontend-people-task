import { Tarefa } from './tarefa';
import { Pessoa } from "./pessoa";

export class Alocacao {
    constructor(
      public pessoa?: Pessoa,
      public tarefa?: Tarefa,
      public id?: number) { }
  }