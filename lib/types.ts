export interface IReactChildren {
    children: React.ReactNode;
}


export interface IBillboard {
    id: string;
    name: string;
    imageURL: string;
}


export interface ICategory {
    id: string;
    name: string;
    billboard: IBillboard;
}