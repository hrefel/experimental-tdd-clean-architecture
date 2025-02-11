export class ProductDigitalData {
  constructor(
    public Filter: Filter,
    public List: List[],
    public MSISDN: number,
    public TotalPage: number
  ) {}
}

export class Filter {
  constructor(
    public CardService: CardService[],
    public Price: Price,
    public Quota: Quota[],
    public RoamingType: any,
    public Sort: Sort,
    public Subcategory: string[]
  ) {}
}

export class CardService {
  constructor(
    public name: string,
    public value: string
  ) {}
}

export class Price {
  constructor(
    public en: string[],
    public id: string[]
  ) {}
}

export class Quota {
  constructor(
    public name: string,
    public value: string
  ) {}
}

export class Sort {
  constructor(
    public en: MultiLang[],
    public id: MultiLang[]
  ) {}
}

export class MultiLang {
  constructor(
    public name: string,
    public value: string
  ) {}
}

export class List {
  constructor(
    public AutoRenewal: string,
    public Bonus: Bonus[],
    public BusinessPID: string,
    public Category: string,
    public Fee: number,
    public ID: string,
    public Longdesc: string,
    public Name: string,
    public OfferPriority: string,
    public OriginalPrice: number,
    public OtherBonus: string,
    public Price: number,
    public PurchasePercentage: number,
    public RibbonImage: any,
    public RibbonText: any,
    public Shortdesc: string,
    public Subcategory: string,
    public Terms: string,
    public TotalQuota: string,
    public TotalValidity: string,
    public TrxPackage: string,
    public UseStock: boolean,
    public Validity: string,
    public region: string
  ) {}
}

export class Bonus {
  constructor(
    public classStyle: string,
    public consumptiontime: string,
    public highlight: string,
    public longdesc: string,
    public name: string,
    public quota: string,
    public shortdesc: string,
    public subclass: string,
    public validity: string,
    public viral: string
  ) {}
}
