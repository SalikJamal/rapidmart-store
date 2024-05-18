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