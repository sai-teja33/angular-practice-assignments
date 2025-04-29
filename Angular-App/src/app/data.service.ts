import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 productsList:any=[
  {
    "id": 1,
    "name": "Samsung Galaxy S23",
    "image": "https://th.bing.com/th/id/OIP.5QMkXIlusvZfEUm50okfbAHaHa?rs=1&pid=ImgDetMain",
    "price": "$799",
    "buyLink": "https://buy.samsung.com/galaxy-s23",
    "category": "Mobiles"
  },
  {
    "id": 2,
    "name": "iPhone 14",
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505109_sd.jpg",
    "price": "$999",
    "buyLink": "https://buy.apple.com/iphone-14",
    "category": "Mobiles"
  },
  {
    "id": 3,
    "name": "OnePlus 11",
    "image": "https://th.bing.com/th/id/OIP.EmIWR9UD0xYyng1TaXN1RwHaNK?rs=1&pid=ImgDetMain",
    "price": "$749",
    "buyLink": "https://buy.oneplus.com/oneplus-11",
    "category": "Mobiles"
  },
  {
    "id": 4,
    "name": "Google Pixel 7 Pro",
    "image": "https://www.91-cdn.com/hub/wp-content/uploads/2022/10/Pixel-7-Pro-review-0005.jpg",
    "price": "$899",
    "buyLink": "https://buy.google.com/pixel-7-pro",
    "category": "Mobiles"
  },
  {
    "id": 5,
    "name": "Xiaomi Mi 13",
    "image": "https://th.bing.com/th/id/OIP.lZ7nn0Vcatsp7ox5MElAlgHaHa?rs=1&pid=ImgDetMain",
    "price": "$699",
    "buyLink": "https://buy.mi.com/mi-13",
    "category": "Mobiles"
  },
  {
    "id": 6,
    "name": "Sony Xperia 1 IV",
    "image": "https://th.bing.com/th/id/OIP.ilKXThWznunSCWsTeaD0mwHaHa?rs=1&pid=ImgDetMain",
    "price": "$1099",
    "buyLink": "https://buy.sony.com/xperia-1-iv",
    "category": "Mobiles"
  },
  {
    "id": 7,
    "name": "Motorola Edge 30",
    "image": "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-30-1.jpg",
    "price": "$649",
    "buyLink": "https://buy.motorola.com/edge-30",
    "category": "Mobiles"
  },
  {
    "id": 8,
    "name": "MacBook Pro 14",
    "image": "https://th.bing.com/th/id/OIP.FMSfdWx7p8EZAEfILSPhNAHaEK?rs=1&pid=ImgDetMain",
    "price": "$1999",
    "buyLink": "https://buy.apple.com/macbook-pro-14",
    "category": "Laptops"
  },
  {
    "id": 9,
    "name": "Dell XPS 13",
    "image": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2016/12/dell-xps-13-hero.jpg?itok=jb5S1VbE",
    "price": "$1499",
    "buyLink": "https://buy.dell.com/xps-13",
    "category": "Laptops"
  },
  {
    "id": 10,
    "name": "HP Spectre x360",
    "image": "https://i.pcmag.com/imagery/reviews/00uwiwERhM15aoADGVjjUUy-1.jpg",
    "price": "$1499",
    "buyLink": "https://buy.hp.com/spectre-x360",
    "category": "Laptops"
  },
  {
    "id": 11,
    "name": "Lenovo ThinkPad X1 Carbon",
    "image": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger_wm_blb/public/field/image/2017/04/thinkpad-x1-carbon-hero2.jpg?itok=f9d-zg94",
    "price": "$1799",
    "buyLink": "https://buy.lenovo.com/thinkpad-x1-carbon",
    "category": "Laptops"
  },
  {
    "id": 12,
    "name": "Asus ZenBook Flip 14",
    "image": "https://th.bing.com/th/id/OIP.I2IQu0i120GYKLDAUg-cAQHaHh?rs=1&pid=ImgDetMain",
    "price": "$1099",
    "buyLink": "https://buy.asus.com/zenbook-flip-14",
    "category": "Laptops"
  },
  {
    "id": 13,
    "name": "Microsoft Surface Laptop 5",
    "image": "https://sm.pcmag.com/t/pcmag_uk/review/m/microsoft-/microsoft-surface-laptop-5-15-inch_595b.1920.jpg",
    "price": "$1199",
    "buyLink": "https://buy.microsoft.com/surface-laptop-5",
    "category": "Laptops"
  },
  {
    "id": 14,
    "name": "Acer Predator Helios 300",
    "image": "https://images.idgesg.net/images/article/2018/03/acer-predator-helios-300-1-100753274-orig.jpg",
    "price": "$1299",
    "buyLink": "https://buy.acer.com/predator-helios-300",
    "category": "Laptops"
  },
  {
    "id": 15,
    "name": "LG OLED 65-inch",
    "image": "https://www.lg.com/us/images/tvs/md05913436/gallery/OLEDC8-Z3.jpg",
    "price": "$2499",
    "buyLink": "https://buy.lg.com/oled-65-inch",
    "category": "TVs"
  },
  {
    "id": 16,
    "name": "Samsung QLED 55-inch",
    "image": "https://www.lg.com/us/images/tvs/md05913436/gallery/OLEDC8-Z3.jpg",
    "price": "$1799",
    "buyLink": "https://buy.samsung.com/qled-55-inch",
    "category": "TVs"
  },
  {
    "id": 17,
    "name": "Sony Bravia XR 65-inch",
    "image": "https://images.samsung.com/is/image/samsung/p6pim/uk/qe55q75catxxu/gallery/uk-qled-q70c-qe55q75catxxu-536638584?$650_519_PNG$",
    "price": "$2299",
    "buyLink": "https://buy.sony.com/bravia-xr-65-inch",
    "category": "TVs"
  },
  {
    "id": 18,
    "name": "TCL 6-Series 55-inch",
    "image": "https://th.bing.com/th/id/OIP.gLeq5rPThl-6CJbAuxu7lQHaEM?rs=1&pid=ImgDetMain",
    "price": "$899",
    "buyLink": "https://buy.tcl.com/6-series-55-inch",
    "category": "TVs"
  },
  {
    "id": 19,
    "name": "Vizio 70-inch 4K",
    "image": "https://m.media-amazon.com/images/I/814Y+lzC5eS.jpg",
    "price": "$1199",
    "buyLink": "https://buy.vizio.com/70-inch-4k",
    "category": "TVs"
  },
  {
    "id": 20,
    "name": "Samsung The Frame 65-inch",
    "image": "https://estliving.com/wp-content/uploads/2022/09/Est-living-winnings-samsung-65-inch-the-frame-qled-4k-smart-tv-02.jpg",
    "price": "$1799",
    "buyLink": "https://buy.samsung.com/the-frame-65-inch",
    "category": "TVs"
  },
  
];
//for array of products
getProducts(){
  return  (this.productsList);
}
//for obseravbles
getProducts$(){
  return  of (this.productsList);
}
getProductsById(productId:number){
  for(let i=0;i<this.productsList.length;i++){
    if(this.productsList[i].id==productId){
      return this.productsList[i];
    }
  }
}
}
