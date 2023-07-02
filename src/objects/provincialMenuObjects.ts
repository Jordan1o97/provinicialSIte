class MenuItemClass {
    public title: string;
    public price: number;
    public price2?: number;
    public price3?: number;
    public description?: string;
  
    constructor(title: string, price: number, price2?: number, price3?: number, description?: string) {
      this.title = title;
      this.price = price;
      this.price2 = price2;
      this.price3 = price3;
      this.description = description;
    }
  }
  
  export default MenuItemClass
  //const myObject = new MyClass("John", 25);
  