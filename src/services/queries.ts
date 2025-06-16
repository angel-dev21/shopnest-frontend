import { AvailableSize } from "@/types/availableSize";
import { Product } from "@/types/product";
import useSWR from "swr";

export function useProducts() {
  return useSWR<Product[]>("/all");
}

export function useGetProductByCode(code: string) {
  return useSWR<Product>(() => (code ? `/products/code/${code}` : null));
}

export function useGetAvailableSizesByCode(code: string) {
  return useSWR<AvailableSize[]>(() => (code ? `/products/code/${code}/sizes` : null));
}

