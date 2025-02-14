import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetProductListUsecase } from './domain/usecases/get-product-list.usecase';
import { RequestProductDigital } from './domain/model/product/product-digital.dto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'experimental-tdd-clean-archi';

  constructor(getProductListUsecase: GetProductListUsecase) {
    const payload: RequestProductDigital = new RequestProductDigital(6281239834834, 'Semua')
    getProductListUsecase.execute(payload).subscribe(response => {
      console.log(response)
    })
  }
}
