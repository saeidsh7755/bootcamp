import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'bootcamp';


  products: {
    image: string, title: string, rate: string, price: number,
    freeSend: boolean, exist: boolean, sendToday: boolean
  }[] = [
    {
      image: "https://",
      title: "iphone 13",
      rate: "4.5",
      price: 0,
      freeSend: true,
      exist: true,
      sendToday: true
    },
    {
      image: "https://",
      title: "iphone 14",
      rate: "5",
      price: 0,
      freeSend: true,
      exist: true,
      sendToday: true
    }
  ];

  product: {
    images: string[], category: string, title: string, subTitle: string,
    rate: string, sellLength: number, comment: number, qAndA: number,
    suggested: { Percent: string, length: number },
    colors: { name: string, hex: string }[],
    seller: {
      name: string, percent: string, warranty: string, price: number,
      freeSend: boolean, exist: boolean, sendToday: boolean, digiClubRate: string
    }[],
    insurance: {
      name: string, price: number, discountPrice: number,
      discountPercent: number
    }[],
    features: {
      key: string, value: string[]
    }[],
  } = {
    images: ["https://", "https://"],
    category: "اپل / گوشی موبایل اپل",
    title: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    subTitle: "Apple iPhone 13 CH Dual SIM 128GB And 4GB RAM Mobile Phone - Not Activate",
    rate: "4.5",
    sellLength: 3364,
    comment: 5998,
    qAndA: 1808,
    suggested: {
      Percent: "92%",
      length: 999
    },
    colors: [
      {name: "مشکی", hex: "#000000"},
      {name: "سفید", hex: "#ffffff"},
      {name: "آبی", hex: "#0e2efd"}
    ],
    seller: [
      {
        name: "دیجی‌کالا",
        percent: "88.6%",
        warranty: "گارانتی ۱۸ ماهه شرکتی",
        price: 36850000,
        freeSend: true,
        exist: true,
        sendToday: true,
        digiClubRate: "150"
      }
    ],
    insurance: [
      {
        name: "بیمه تجهیزات دیجیتال - بیمه پارسیان",
        price: 1205540,
        discountPrice: 602770,
        discountPercent: 50
      }
    ],
    features: [
      {
        key: "فناوری صفحه‌ نمایش",
        value: ["Super Retina XDR OLED"]
      },
      {
        key: "رزولوشن عکس",
        value: ["12 مگاپیکسل"]
      }
    ],
  }




  name:string="Saeid"
  name2:string="pouya"
  printname(){
    console.log(this.name)
  }
  printname2(){
    console.log(this.name2)
  }


  age:number=24;
  checkAge(){
    if(this.age >= 50){
      console.log("up to 50")
    }else if(this.age < 50 && this.age >= 30){
      console.log("the age is between 30 and 50")
    }else if(this.age >= 18 && this.age < 30){
      console.log("the age is between 18 and 30")
    }else {
      console.log("under 18")
    }
  }


  arr:string[] = ["saeid","pouya","pashmak"]



  ngOnInit() {
    this.printname();
    this.printname2();
    this.checkAge();

    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }

    for (let string of this.arr) {
      console.log(string);
    }

    for (let i = this.arr.length - 1; i >= 0; i--) {
      console.log(this.arr[i]);
    }

    this.arr.forEach((arr:string, index:any)=> {
      console.log(arr);
      console.log(index);
    });



  }



}
