export class TaskRemove {

  idRemovedTask!: string;
  numberLoop!: number;

  constructor(
    idRemovedTask: string,
    numberLoop: number
  ) {
    this.idRemovedTask = idRemovedTask;
    this.numberLoop    = numberLoop;
  }

}
