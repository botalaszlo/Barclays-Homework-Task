import { Component, OnInit } from '@angular/core';
import { Vat } from 'src/app/shared/models/vat.model';
import { VatService } from 'src/app/core/services/vat.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent implements OnInit {
  vat: Vat = {
    details: '',
    version: null,
    rates: []
  };

  constructor(private vatService: VatService) { }

  ngOnInit() {
    this.getVat();
  }

  getVat(): void {
    this.vatService.getVat()
      .subscribe(
        vat => this.vat = vat,
        err => console.error(err));
  }
}
