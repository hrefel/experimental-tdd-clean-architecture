import { Injectable } from '@angular/core';
import { BaseResponse } from '../../api/model/base-response.model';
import { ProductDigitalDto } from '../../api/model/product-digital.dto';
import { ProductDigitalData } from '../../api/model/product-digital.model';
import { RequestProductDigital } from '../../domain/model/product-digital.dto';
import { ProductDigitalDomainEntity } from '../../domain/model/product-digital.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductListAdapter {
  mapFrom(
    response: BaseResponse<ProductDigitalData>
  ): Array<ProductDigitalDomainEntity> {
    const mappedResponse: Array<ProductDigitalDomainEntity> =
      response.data.List.map((r) => {
        return new ProductDigitalDomainEntity(
          r.Name,
          r.OriginalPrice,
          r.Price,
          r.Validity,
          r.TotalQuota
        );
      });
    return mappedResponse;
  }

  mapTo(payload: RequestProductDigital): ProductDigitalDto {
    return new ProductDigitalDto(payload.noTelp, payload.category);
  }
}
