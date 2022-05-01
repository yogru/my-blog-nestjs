import validator from "@/infra/validator";

export interface UserProps {
  readonly id?:number
  deleted?: boolean
  account: string
  password: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export class ValidatorError extends Error {
  errorList: string []
  constructor() {
    super();
    this.errorList = []
  }

  public add(message:string){
    this.errorList.push(message)
    this.message = this.errorList.join(', ')
  }

  public isError():boolean {
    return this.errorList.length >= 1 ? true : false;
  }

}


export default class User {
  readonly id?: number
  deleted?: boolean
  account: string
  password: string
  name: string
  createdAt?: Date
  updatedAt?: Date

  constructor(u:UserProps) {
    this.id = u.id
    this.deleted = u.deleted
    this.account = u.account
    this.password = u.password
    this.name = u.name
    this.createdAt = u.createdAt
    this.updatedAt = u.updatedAt
  }

  public validate(){
    /**
     *  실제 도메인 규칙 검증.
     *  비밀번호 자리수
     *  이메일 유효성 등등
     */
    const validatorError = new ValidatorError()
    if(!validator.isEmail(this.account)){
      validatorError.add("invalid email")
    }
    if(!validator.isLength(this.password,6)){
      validatorError.add("invalid password")
    }
    if(validatorError.isError()){
      throw ValidatorError
    }
  }

}