export interface IReactChildren {
    children: React.ReactNode;
}


export interface IBillboard {
    id: string;
    label: string;
    imageURL: string;
}


export interface ICategory {
    id: string;
    name: string;
    billboard: IBillboard;
}


export interface IProduct {
    id: string;
    category: ICategory;
    name: string;
    price: string;
    isFeatured: boolean;
    size: ISize;
    color: IColor;
    images: IImage[];
}


export interface IImage {
    id: string;
    URL: string;
}


export interface ISize {
    id: string;
    name: string;
    value: string;
}


export interface IColor {
    id: string;
    name: string;
    value: string;
}