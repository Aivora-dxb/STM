/**
 * Central company configuration.
 * Every contact detail, brand string, and canonical URL on the site is read
 * from this file. Change a value here and it updates everywhere: header,
 * footer, contact page, forms, structured data, metadata and email templates.
 *
 * Do not hard-code contact details anywhere else in the codebase.
 */

export const company = {
  legalName: "STM MACHINERY L.L.C.",
  shortName: "STM MACHINERY",

  // Contact
  phone: {
    // E.164 for tel: links and structured data
    e164: "+971566013816",
    // Human-readable for display
    display: "+971 56 601 3816",
  },
  email: "info@stm-machinery.ae",

  // WhatsApp — international format, digits only, no "+" or spaces
  whatsapp: {
    number: "971566013816",
    prefilledMessage:
      "Hello STM MACHINERY, I would like to discuss a machinery or industrial equipment requirement.",
  },

  // Address — no postal code (not officially confirmed).
  address: {
    line1: "Warehouse G01, Turnkey Warehouse",
    line2: "Dubai Investment Park Second",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    // Approximate coordinates for map link (Dubai Investment Park Second).
    // Used only for a Google Maps link, not published as a precise claim.
    lat: 24.9733662,
    lng: 55.1972585,
  },

  // Canonical site URL
  url: "https://www.stm-machinery.ae",
  domain: "stm-machinery.ae",

  // Business hours (Gulf Standard Time)
  hours: {
    display: "Monday – Friday: 9:00 AM – 6:00 PM (GST)",
    short: "Mon–Fri, 9:00 AM – 6:00 PM GST",
  },

  // Locale
  locale: "en",
  region: "AE",
} as const;

/** WhatsApp click-to-chat URL (works on mobile and desktop). */
export const whatsappUrl = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
  company.whatsapp.prefilledMessage,
)}`;

/** tel: link target. */
export const telHref = `tel:${company.phone.e164}`;

/** mailto: link target. */
export const mailtoHref = `mailto:${company.email}`;

/** Google Maps link built from the verified location. */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.address.lat},${company.address.lng}`;

/** Full single-line address string. */
export const addressLine = [
  company.address.line1,
  company.address.line2,
  company.address.city,
  company.address.country,
].join(", ");
