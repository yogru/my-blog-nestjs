import validator from "@/infra/validator";
import { ErrorChecker } from "@/infra/error";

import { RuntimeException } from "@nestjs/core/errors/exceptions/runtime.exception";


export interface UserProps {
  readonly id?:number
  deleted?: boolean
  account: string
  password: string
  name: string
  createdAt?: Date
  updatedAt?: Date
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
    const validatorError = new ErrorChecker()
    if(!validator.isEmail(this.account)){
      validatorError.add("invalid email")
    }
    if(!validator.isLength(this.password,6)){
      validatorError.add("invalid password")
    }
    if(validatorError.isError()){
      throw new RuntimeException(validatorError.message)
    }
  }
}