import {PrismaService} from '@/infra/prisma/prisma.service'


export interface RepositoryBase<ID_TYPE, DOMAIN_TYPE> {
  save(domain:DOMAIN_TYPE): Promise< ID_TYPE | undefined >
  findById(id:ID_TYPE): Promise < DOMAIN_TYPE | undefined>
}


export default abstract class RepositoryBasePrismaImp<ID_TYPE, DOMAIN_TYPE> implements RepositoryBase<ID_TYPE, DOMAIN_TYPE>{
  protected constructor(
    protected prisma:PrismaService
  ) {}

  protected abstract getQuery(): any
  protected abstract toPersistence(domain: DOMAIN_TYPE): any | null
  protected abstract toDomain(persistence:any): DOMAIN_TYPE | null


  public async save(domain: DOMAIN_TYPE): Promise<ID_TYPE | undefined>{
    const persistence = this.toPersistence(domain)
    if(!persistence){
      return undefined
    }
    try {
      const query = this.getQuery()
      const persistenceEntity = await query.create({
        data: {
          ...persistence
        }
      })
      return persistenceEntity.id
    }catch (e){
      throw e
    }
  }

  public async findById(id: ID_TYPE): Promise< DOMAIN_TYPE  | undefined >  {
    try {
      const query = this.getQuery()
      const persistence = query.findUnique({
        where: {
          id
        }
      })
     return this.toDomain(persistence)
    }catch (e) {
      throw e
    }
  }
}