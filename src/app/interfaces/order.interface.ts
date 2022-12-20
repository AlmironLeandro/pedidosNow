import hamburger from "./hamburger.interface";

export default interface order {
    id?: string;
    order: hamburger[];
    total:number;
}