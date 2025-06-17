export interface Product {
    id: number;
    productName: string;
    productCode: string;
    productDescription: string;
    productPrice: number;
    discount: number;
    stockQuantity: number;
    category: {
        id: number;
        name: string;
    };
    images: string[];
    createdAt: string;
    updatedAt: string;
}