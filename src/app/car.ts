export class Car{
    private _image:string;
    private _brand:string;
    private _model:string;
    private _vehicleRegistrationDate: Date;
    private _onSaleFrom:Date;
    private _price:number;
    private _icon:string;
    private _state:string;

    constructor(image:string,branch:string,model:string,year:Date,onSaleFrom:Date,price:number,icon:string, state:string){
        this._image = image;
        this._brand = branch;
        this._model = model;
        this._vehicleRegistrationDate = year;
        this._onSaleFrom = onSaleFrom;
        this._price = price;
        this._icon = icon;
        this._state = state;
    }

    public get image(): string {
        return this._image;
    }

    public set image(image: string) {     
        this._image = image;
    }

    public get brand(): string {
        return this._brand;
    }

    public set brand(branch: string) {     
        this._brand = branch;
    }

    public get model(): string {
        return this._model;
    }

    public set model(model: string) {     
        this._model = model;
    }

    public get vehicleRegistrationDate(): Date {
        return this._vehicleRegistrationDate;
    }

    public set vehicleRegistrationDate(year: Date) {     
        this._vehicleRegistrationDate = year;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {     
        this._price = price;
    }

    public get onSaleFrom(): Date {
        return this._onSaleFrom;
    }

    public set onSaleFrom(onSaleFrom: Date) {     
        this._onSaleFrom = onSaleFrom;
    }
    
    public get icon(): string {
        return this._icon;
    }

    public set icon(icon: string) {     
        this._icon = icon;
    }

    public get state(): string {
        return this._state;
    }

    public set state(state: string) {     
        this._state = state;
    }
}