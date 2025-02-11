import { ProductDigitalDomainEntity } from "../../domain/model/product-digital.entity"

export class ProductDigitaViewModel {
  constructor(
    public productName: string,
    public price: number,
    public discountPrice: number,
    public validity: string,
    public totalQuota: string,
    public priceDisplay: string,
    public discountPriceDisplay: string
  ) {
  }

  getDiscoutPrice() {
    return new Intl.NumberFormat('id-ID').format(this.discountPrice)
  }

  getPrice() {
    return new Intl.NumberFormat('id-ID').format(this.price)
  }
}
