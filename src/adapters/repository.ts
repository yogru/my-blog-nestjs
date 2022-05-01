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

  public async save(domain: DOMAIN_TYPE): Promise<ID_TYPE | undefined>{
    try {
      const query = this.getQuery()
      const persistenceEntity = await query.create({
        data: {
          ...domain
        }
      })
      return persistenceEntity.id
    }catch (e){
      throw e
    }
  }

  public async findById(id: ID_TYPE): Promise< DOMAIN_TYPE  | undefined >  {
    throw new Error("Method not implemented.")
  }

}