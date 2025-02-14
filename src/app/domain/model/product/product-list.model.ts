export class ProductDigitaViewModel {
  constructor(
    public productName: string,
    public price: number,
    public discountPrice: number,
    public validity: string,
    public totalQuota: string,
    public priceDisplay: string,
    public discountPriceDisplay: string,
    public proggresLevel: number
  ) {
  }

  getDiscoutPrice() {
    return new Intl.NumberFormat('id-ID').format(this.discountPrice)
  }

  getPrice() {
    return new Intl.NumberFormat('id-ID').format(this.price)
  }
}
