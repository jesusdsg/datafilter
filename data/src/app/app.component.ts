import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [];
  title = 'data';

  constructor(private _serviceService: ServiceService) {
  }

  getServices() {
    this._serviceService.getServices().subscribe(data => {
      this.items = [];
      data.forEach((element:any) => {
        this.items.push({
          id: element.payload.doc.id,
          canal: element.payload.doc.data()['CANAL'],
          cardcode: element.payload.doc.data()['CardCode'],
          cardname: element.payload.doc.data()['CardName'],
          categoriacode: element.payload.doc.data()['CategoriaCode'],
          categorianame: element.payload.doc.data()['CategoriaName'],
          docentry: element.payload.doc.data()['DocEntry'],
          docnum: element.payload.doc.data()['DocNum'],
          firmcode: element.payload.doc.data()['FirmCode'],
          firmname: element.payload.doc.data()['FirmName'],
          groupcode: element.payload.doc.data()['GroupCode'],
          groupname: element.payload.doc.data()['GroupName'],
          itemcode: element.payload.doc.data()['ItemCode'],
          itemname: element.payload.doc.data()['ItemName'],
          linetotal: element.payload.doc.data()['LineTotal'],
          open: element.payload.doc.data()['OpenQty'],
          quantity: element.payload.doc.data()['Quantity'],
          slpcode: element.payload.doc.data()['SlpCode'],
          slpname: element.payload.doc.data()['SlpName'],
        });
      });
      console.log('Items',this.items)
    })
  }


  setMarca()
  {
    this.items.sort
  }

  ngOnInit(): void{
    this.getServices();
  }
}
