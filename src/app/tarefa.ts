export class Tarefa {
    constructor(
        public titulo?: string,
        public descricao?: string,
        public dtIni?: Date,
        public dtFim?: Date,
        public id?:    number) {}
}