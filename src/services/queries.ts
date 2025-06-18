import { AvailableSize } from "@/types/availableSize";
import { Product } from "@/types/product";
import { ProductResponseDto } from "@/types/ProductResponseDto";
import useSWR from "swr";

export function useProducts(productPage: number) {
  return useSWR<ProductResponseDto[]>(`/products?page=${productPage}&size=3`);
}

export function useGetProductByCode(code: string) {
  return useSWR<Product>(() => (code ? `/products/code/${code}` : null));
}

export function useGetAvailableSizesByCode(code: string) {
  return useSWR<AvailableSize[]>(() =>
    code ? `/products/code/${code}/sizes` : null
  );
}
