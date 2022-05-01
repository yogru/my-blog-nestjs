import validatorLib from 'validator'

export class Validator {

  public isEmail(email:string):boolean{
    return validatorLib.isEmail(email)
  }

  public isLength(plain:string, min:number, max?: number | undefined):boolean{
    return validatorLib.isLength(plain,{ min, max })
  }

}
const validator = new Validator()
export default validator