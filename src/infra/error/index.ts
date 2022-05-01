export class ErrorChecker {
  constructor(
    private errorList: string [] = []
  ) {}
  public add(message:string){
    this.errorList.push(message)
  }
  public get message() {
    return this.errorList.join(', ')
  }
  public isError():boolean {
    return this.errorList.length >= 1 ? true : false;
  }

}