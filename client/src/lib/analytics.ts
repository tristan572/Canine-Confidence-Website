type AnalyticsValue = string | number | boolean | undefined;

type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    ...params,
    page_path: window.location.pathname,
    page_location: window.location.href,
  });
}

export function trackLead(leadType: "contact_form" | "free_consultation", service?: string) {
  trackEvent("generate_lead", {
    lead_type: leadType,
    service: service || undefined,
  });
}

export function openBookingUrl(
  url: string,
  bookingType: "service" | "package" | "general",
  itemName?: string,
) {
  trackEvent("booking_click", {
    booking_type: bookingType,
    item_name: itemName || undefined,
    booking_url: url,
  });

  window.open(url, "_blank");
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent("phone_click", {
    phone_number: phoneNumber,
  });
}
