export class RelogioService{

    private Data: Date;

    private getHorarioAtual(): Date{
        let data = new Date();
        return data;
    }

    generateHorarioAtual(delay: number, callback: (horarioAtual: Date) => void) {
    callback(this.getHorarioAtual());
    setInterval(() => callback(this.getHorarioAtual()), delay);
  }
}