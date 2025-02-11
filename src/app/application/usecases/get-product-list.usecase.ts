import { map, Observable } from 'rxjs';
import { RequestProductDigital } from '../../domain/model/product-digital.dto';
import { ProductDigitaViewModel } from '../model/product-list.model';
import { ProductRepository } from '../../domain/repositories/product.repositories';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductListUsecase {
  constructor(public productRepository: ProductRepository) {}
  execute(
    payload: RequestProductDigital
  ): Observable<Array<ProductDigitaViewModel>> {
    return this.productRepository.GetProductDigital(payload).pipe(
      map((response) => {
        return response.map((r) => {
          const result = new ProductDigitaViewModel(
            r.productName,
            r.price,
            r.discountPrice,
            r.validity,
            r.totalQuota,
            new Intl.NumberFormat('id-ID').format(r.price),
            new Intl.NumberFormat('id-ID').format(r.discountPrice),
          );
          return result;
        });
      })
    );
  }
}
