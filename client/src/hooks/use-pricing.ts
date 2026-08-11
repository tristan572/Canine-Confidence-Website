import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Package, Service } from "@shared/schema";

const LOADING_PRICE = "…";

function parsePrice(price?: string | null): number | null {
  if (!price) return null;
  const value = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : null;
}

function formatPrice(value: number | null): string {
  if (value === null) return LOADING_PRICE;
  return `$${value.toLocaleString("en-AU", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

export function usePricing() {
  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ["/api/services"],
    queryFn: () => apiRequest("GET", "/api/services").then((response) => response.json()),
  });
  const { data: packages = [] } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
    queryFn: () => apiRequest("GET", "/api/packages").then((response) => response.json()),
  });

  const service = (name: string) => services.find((item) => item.name === name);
  const packageByName = (name: string) => packages.find((item) => item.name === name);

  return {
    servicePrice: (name: string) => service(name)?.price ?? LOADING_PRICE,
    packagePrice: (name: string) => packageByName(name)?.price ?? LOADING_PRICE,
    packageSessions: (name: string) => packageByName(name)?.sessions ?? null,
    packagePerSession: (name: string) => {
      const item = packageByName(name);
      const price = parsePrice(item?.price);
      return formatPrice(item && price !== null ? price / item.sessions : null);
    },
    packageSaving: (name: string) => {
      const item = packageByName(name);
      const price = parsePrice(item?.price);
      const originalPrice = parsePrice(item?.originalPrice);
      return formatPrice(price !== null && originalPrice !== null ? originalPrice - price : null);
    },
  };
}
