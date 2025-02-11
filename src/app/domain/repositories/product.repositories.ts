import { Observable } from "rxjs";
import { ProductDigitalDomainEntity } from "../model/product-digital.entity";
import { RequestProductDigital } from "../model/product-digital.dto";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class ProductRepository {
  abstract GetProductDigital(payload: RequestProductDigital): Observable<Array<ProductDigitalDomainEntity>>;
}
