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

}