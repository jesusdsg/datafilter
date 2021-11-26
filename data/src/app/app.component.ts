import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  localItems: any[] = [
   {"DocEntry":89280,"DocNum":30042028,"CardCode":"CN-1123088513","CardName":"BREIDY STIVEN COTRINA RIOS","GroupCode":145,"GroupName":"*TIENDAS POS","SlpCode":1135,"SlpName":"Servicio Al Cliente","ItemCode":"SOSWREPSWA2050-001","ItemName":"REPUES SWA2050 INTERRUPTOR DE POTENCIA","FirmCode":117,"FirmName":"SWEISS SOLDADURA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Mma","UEN":"SOLDADURA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":33529.410000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89357,"DocNum":30042083,"CardCode":"SD-800242106-13","CardName":"SODIMAC PALMIRA UNICENTRO","GroupCode":144,"GroupName":"ALMACEN CADENA","SlpCode":52,"SlpName":"Fernando Sierra HC - Dist","ItemCode":"SOELSI7160DV","ItemName":"SOLDADOR ARC160S 110/220V ELITE","FirmCode":182,"FirmName":"ELITE SOLDADURA","CategoriaCode":"38","CategoriaName":"Mma pro","Subgrupo":"na","UEN":"SOLDADURA","Quantity":8.000000,"OpenQty":8.000000,"LineTotal":3999528.000000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"ALMACEN CADENA"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-008-PG002","ItemName":"REPUES 2G65 BUJIA PART 008-PG002","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":10084.030000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-002-PG013","ItemName":"REPUES 2G65 ARRANQUE MANUAL (YOYO) COMPLETO PART 008-PG002","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":163865.540000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-003-PG17","ItemName":"REPUES 2G65 EMPAQUE DE FILTRO DE AIRE PART 003","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":3361.340000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MADUREPDG701-057","ItemName":"REPUES DG701 BATERIA PART 057","FirmCode":174,"FirmName":"DUCSON","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Maquinaria","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":211716.180000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-001-PG004","ItemName":"REPUS 2G65 SET DE ANILLOS DE PISTÓN","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"na","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":31932.770000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-018","ItemName":"REPUES 2G65 ABRAZADERA PARA MANGUERA DE COMBUSTIBLE I","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":3361.340000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-M034","ItemName":"REPUS 2G65 EMPAQUE DE CULATA","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":13109.240000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MADUREPDG701E-050","ItemName":"REPUES DG701 LINEA CONTROL SOLENOIDE","FirmCode":174,"FirmName":"DUCSON","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":50420.000000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89364,"DocNum":22001370,"CardCode":"CN-900883312","CardName":"PARQUES INFANTILES COLOMBIA SAS","GroupCode":160,"GroupName":"*TIENDAS-JURIDICO","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-001-PG04","ItemName":"REPUES 2G65 KIT DE ANILLOS DE PISTON PART 001","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":24369.750000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89376,"DocNum":30042095,"CardCode":"CN-900944793","CardName":"MAQUITEC DE COLOMBIA SAS","GroupCode":103,"GroupName":"DCP-FERRETERIA","SlpCode":1142,"SlpName":"Jose Luis Daza - Dist","ItemCode":"DISTHEELCA6205","ItemName":"COMPRESOR DE AIRE DIRECTO HORIZONTAL-20L-1048-2.0HP","FirmCode":181,"FirmName":"COMBOS","CategoriaCode":null,"CategoriaName":null,"Subgrupo":"NO APLICA","UEN":"OTROS","Quantity":2.000000,"OpenQty":2.000000,"LineTotal":0.000000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"DISTRIBUCION FERRETERA"},{"DocEntry":89376,"DocNum":30042095,"CardCode":"CN-900944793","CardName":"MAQUITEC DE COLOMBIA SAS","GroupCode":103,"GroupName":"DCP-FERRETERIA","SlpCode":1142,"SlpName":"Jose Luis Daza - Dist","ItemCode":"HEELCA6205","ItemName":"COMPRESOR DE AIRE DIRECTO HORIZONTAL-20L-1048-2.0HP","FirmCode":105,"FirmName":"ELITE HERRAMIENTAS","CategoriaCode":"14","CategoriaName":"Compresores","Subgrupo":"Directo","UEN":"HERRAMIENTAS ELECTRICAS","Quantity":2.000000,"OpenQty":2.000000,"LineTotal":672134.450000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"DISTRIBUCION FERRETERA"},{"DocEntry":89384,"DocNum":36000178,"CardCode":"CSA-900796096","CardName":"CENTRO ELECTROMECANICO DE ARMENIA","GroupCode":174,"GroupName":"CSA","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"MAELREP2G65-007-PG28","ItemName":"REPUES 2G65 TOMA CORRIENTE PART 007","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Gasolina","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":7899.160000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89384,"DocNum":36000178,"CardCode":"CSA-900796096","CardName":"CENTRO ELECTROMECANICO DE ARMENIA","GroupCode":174,"GroupName":"CSA","SlpCode":1106,"SlpName":"Alejandra Zamora - CSA","ItemCode":"SOFUREPFW161M-002","ItemName":"REPUES FW161M INTERRUPTOR DE ENTRADA AC","FirmCode":107,"FirmName":"FURIUS SOLDADURAS","CategoriaCode":"57","CategoriaName":"Repuestos","Subgrupo":"Mma","UEN":"SOLDADURA","Quantity":5.000000,"OpenQty":5.000000,"LineTotal":50420.150000,"WhsCode":"32CSCBOG","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"CENTROS DE SERVICIOS"},{"DocEntry":89385,"DocNum":30042101,"CardCode":"CN-890936222","CardName":"T H S.A.S","GroupCode":103,"GroupName":"DCP-FERRETERIA","SlpCode":1123,"SlpName":"Monica Muñoz - Dist","ItemCode":"SOSWC1-811","ItemName":"CARETA ELECTRONICA SWEISS SKYVIEW 810 DIGITAL","FirmCode":117,"FirmName":"SWEISS SOLDADURA","CategoriaCode":"11","CategoriaName":"Caretas","Subgrupo":"na","UEN":"SOLDADURA","Quantity":2.000000,"OpenQty":2.000000,"LineTotal":396945.370000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"DISTRIBUCION FERRETERA"},{"DocEntry":89386,"DocNum":30042102,"CardCode":"CN-860001584","CardName":"MECANELECTRO SAS","GroupCode":103,"GroupName":"DCP-FERRETERIA","SlpCode":9,"SlpName":"Ciro Arismendy Almeida - Dist","ItemCode":"HEELPW2275","ItemName":"HIDROLAVADORA ELECTRICA 2200W 2200PSI 7.5LPM 110V-60HZ","FirmCode":105,"FirmName":"ELITE HERRAMIENTAS","CategoriaCode":"30","CategoriaName":"Hidrolavadoras Electricas","Subgrupo":"Electricas","UEN":"HERRAMIENTAS ELECTRICAS","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":352882.360000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"DISTRIBUCION FERRETERA"},{"DocEntry":89386,"DocNum":30042102,"CardCode":"CN-860001584","CardName":"MECANELECTRO SAS","GroupCode":103,"GroupName":"DCP-FERRETERIA","SlpCode":9,"SlpName":"Ciro Arismendy Almeida - Dist","ItemCode":"MAEL2G65","ItemName":"GENERADOR PORTATIL GASOLINA 6.5KW 120 -240V 60Hz 1PH","FirmCode":188,"FirmName":"ELITE MAQUINARIA","CategoriaCode":"28","CategoriaName":"Generadores","Subgrupo":"NO APLICA","UEN":"MAQUINARIA","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":1882294.120000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"DISTRIBUCION FERRETERA"},{"DocEntry":89389,"DocNum":30042104,"CardCode":"CN-91221942","CardName":"ALBERTO RUEDA TOLOZA","GroupCode":103,"GroupName":"DCP-FERRETERIA","SlpCode":1129,"SlpName":"Fredy Martinez - Dist","ItemCode":"SOELKITSI7160DV","ItemName":"SOLDADOR ARC160 110/220V ELITE INCLUYE ANTORCHA TIG MAS CARETA AUTOMATICA","FirmCode":182,"FirmName":"ELITE SOLDADURA","CategoriaCode":"38","CategoriaName":"Mma pro","Subgrupo":"na","UEN":"SOLDADURA","Quantity":20.000000,"OpenQty":20.000000,"LineTotal":12771764.640000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"DISTRIBUCION FERRETERA"},{"DocEntry":89391,"DocNum":38000889,"CardCode":"CN-65501161","CardName":"MARTHA YANETH ROJAS GIRALDO","GroupCode":145,"GroupName":"*TIENDAS POS","SlpCode":1138,"SlpName":"Yeiner Berdugo","ItemCode":"COMBOHSM0821015","ItemName":"HEELAG1165 + HEELRM7024","FirmCode":181,"FirmName":"COMBOS","CategoriaCode":null,"CategoriaName":null,"Subgrupo":"NO APLICA","UEN":"OTROS","Quantity":1.000000,"OpenQty":1.000000,"LineTotal":0.000000,"WhsCode":"00CAYENA","PRODUCCION":0.000000,"TRANSITO":0.000000,"CANAL":"ONLINE"}]

  items: any[] = [];
  title = 'data';

  constructor(private _serviceService: ServiceService) {
  }

  //Loading Aux JSON from local
  getLocalServices() {
      this.items = [];
      this.localItems.forEach((element:any) => {
        this.items.push({
          canal: element['CANAL'],
          cardcode: element['CardCode'],
          cardname: element['CardName'],
          categoriacode: element['CategoriaCode'],
          categorianame: element['CategoriaName'],
          docentry: element['DocEntry'],
          docnum: element['DocNum'],
          firmcode: element['FirmCode'],
          firmname: element['FirmName'],
          groupcode: element['GroupCode'],
          groupname: element['GroupName'],
          itemcode: element['ItemCode'],
          itemname: element['ItemName'],
          linetotal: element['LineTotal'],
          open: element['OpenQty'],
          quantity: element['Quantity'],
          slpcode: element['SlpCode'],
          slpname: element['SlpName'],
        });
      });
      console.log('Items',this.items)
  }

  //Loading JSON from firebase
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

  filterServices(event: any):void {
    console.log(event.target.value);
    if (event.target.value) {
      this.items = this.items.filter(item => {
        return item.cardcode.toLowerCase().includes(event.target.value.toLowerCase()) || item.cardname.toLowerCase().includes(event.target.value.toLowerCase()) || item.firmname.toLowerCase().includes(event.target.value.toLowerCase()) || item.itemname.toLowerCase().includes(event.target.value.toLowerCase()) || item.slpname.toLowerCase().includes(event.target.value.toLowerCase());
      });
    }
    else{
      this.getLocalServices();
    }
  }

  setDocumento(){
    this.sortJSON(this.items, 'docnum', 'asc');
  }

  setVendedor(){
    this.sortJSON(this.items, 'slpname', 'asc');
  }

  setMarca()
  {
    this.sortJSON(this.items, 'firmname', 'desc');
  }

  setArticulo()
  {
    this.sortJSON(this.items, 'itemcode', 'desc');
  }

  setCategoria(){
    this.sortJSON(this.items, 'categoriacode', 'desc');
  }

  setCliente(){
    this.sortJSON(this.items, 'cardcode', 'desc');
  }

  sortJSON(data: any, key:any, orden: any): void {
    return data.sort(function (a: any, b: any) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
        return data;
    });
}

  ngOnInit(): void{
    this.getLocalServices();
  }
}
