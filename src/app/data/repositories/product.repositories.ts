import { Observable } from "rxjs";
import { RequestProductDigital } from "../../domain/model/product/product-digital.dto";
import { Injectable } from "@angular/core";
import { ProductDigitalDomainEntity } from "../../domain/model/product/product-digital.entity";

@Injectable({
  providedIn: 'root'
})
export abstract class ProductRepository {
  abstract GetProductDigital(payload: RequestProductDigital): Observable<Array<ProductDigitalDomainEntity>>;
}
