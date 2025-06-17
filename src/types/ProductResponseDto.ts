import { CategoryDto } from "./CategoryDto";

export interface ProductResponseDto {
  productName: string;
  productCode: string;
  productDescription: string;
  productPrice: number;
  discount: number;
  stockQuantity: number;
  category: CategoryDto;
  images: string[];
  createdAt: string;
  updatedAt: string;
}
