export class Pointage {
  id: number;
  entryTime: string;
  exitTime: string;
  totalHours: number;

  constructor(id: number, entryTime: string, exitTime: string, totalHours: number = 0) {
    this.id = id;
    this.entryTime = entryTime;
    this.exitTime = exitTime;
    this.totalHours = totalHours;
  }
}
