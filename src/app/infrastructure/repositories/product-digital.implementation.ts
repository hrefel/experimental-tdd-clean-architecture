import { map, Observable, of } from 'rxjs';
import { RequestProductDigital } from '../../domain/model/product/product-digital.dto';
import { ProductRepository } from '../../data/repositories/product.repositories';
import { HttpService } from '../http.service';
import { ProductDigitalData } from '../../data/models/product-digital.model';
import { ProductDigitalDto } from '../../data/models/product-digital.dto';
import { BaseResponse } from '../../api/model/base-response.model';
import { ProductListAdapter } from '../adapters/product-list.adapter';
import { Injectable } from '@angular/core';
import { ProductDigitalDomainEntity } from '../../domain/model/product/product-digital.entity';

@Injectable({
  providedIn: 'root',
})
export class ProductListImplementation implements ProductRepository {
  productListAdapter: ProductListAdapter = new ProductListAdapter();
  constructor(private http: HttpService) {}
  GetProductDigital(
    payload: RequestProductDigital
  ): Observable<Array<ProductDigitalDomainEntity>> {
    const payloadMapped = this.productListAdapter.mapTo(payload);

    // return of({
    //   meta: {
    //     message: ' string;',
    //     status: ' string;',
    //     code: ' string;',
    //   },
    //   data: {
    //     Filter: {
    //       CardService: [
    //         { name: 'Service A', value: 'Value A' },
    //         { name: 'Service B', value: 'Value B' },
    //       ],
    //       Price: {
    //         en: ['10', '20'],
    //         id: ['10 Ribu', '20 Ribu'],
    //       },
    //       Quota: [
    //         { name: 'Quota 1', value: '10GB' },
    //         { name: 'Quota 2', value: '20GB' },
    //       ],
    //       RoamingType: null,
    //       Sort: {
    //         en: [{ name: 'Price', value: 'low-to-high' }],
    //         id: [{ name: 'Harga', value: 'rendah-ke-tinggi' }],
    //       },
    //       Subcategory: ['Internet', 'Streaming'],
    //     },
    //     List: [
    //       {
    //         AutoRenewal: 'Yes',
    //         Bonus: [
    //           {
    //             classStyle: 'bold',
    //             consumptiontime: '24 Hours',
    //             highlight: 'Unlimited',
    //             longdesc: 'Bonus data unlimited',
    //             name: 'Bonus Data',
    //             quota: '5GB',
    //             shortdesc: 'Bonus 5GB',
    //             subclass: 'Data',
    //             validity: '30 Days',
    //             viral: 'No',
    //           },
    //         ],
    //         BusinessPID: 'PID123',
    //         Category: 'Internet',
    //         Fee: 50000,
    //         ID: 'PRD001',
    //         Longdesc: 'Paket internet 50GB selama 30 hari',
    //         Name: 'Internet 50GB',
    //         OfferPriority: 'High',
    //         OriginalPrice: 60000,
    //         OtherBonus: 'Extra 2GB',
    //         Price: 50000,
    //         PurchasePercentage: 80,
    //         RibbonImage: null,
    //         RibbonText: null,
    //         Shortdesc: '50GB kuota utama',
    //         Subcategory: 'Internet',
    //         Terms: 'Berlaku untuk semua pelanggan',
    //         TotalQuota: '50GB',
    //         TotalValidity: '30 Days',
    //         TrxPackage: 'TX001',
    //         UseStock: true,
    //         Validity: '30 Days',
    //         region: 'Indonesia',
    //       },
    //     ],
    //     MSISDN: 628123456789,
    //     TotalPage: 1,
    //   },
    // }).pipe(map(this.productListAdapter.mapFrom));

    return this.http
      .post<BaseResponse<ProductDigitalData>, ProductDigitalDto>(
        'api/get-product-list',
        payloadMapped
      ).pipe(map(this.productListAdapter.mapFrom));
  }
}
