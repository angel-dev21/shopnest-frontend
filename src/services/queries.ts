import { Product } from "@/types/product";
import useSWR from "swr";

export function useProducts() {
  return useSWR<Product[]>("/all");
}

export function useGetProductByCode(code: string) {
  return useSWR<Product>(() => (code ? `/products/code/${code}` : null));
}

// export function useGetCountriesByCode(codes: string[]) {
//   return useSWR<Country[]>(() =>
//     codes.length > 0 ? `/alpha?codes=${codes.join(",")}` : null
//   );
// }