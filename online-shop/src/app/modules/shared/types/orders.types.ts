import { ProductAndQuantities } from "./products-id-and-quantities.types";

export interface Order {
    customerId: string,
    products: ProductAndQuantities[]
}