export class ProductDigitalDomainEntity {
  constructor(
    public productName: string,
    public price: number,
    public discountPrice: number,
    public validity: string,
    public totalQuota: string
  ) { }
}
