// Single source of truth for the review counts and ratings shown across the
// site and in the LocalBusiness JSON-LD. Update these when the totals change,
// rather than editing the numbers page by page.

export const GOOGLE_REVIEW_COUNT = 31;

// 30 x 5-star + 1 x 4-star = 154 / 31 = 4.97. Stated as 4.9 rather than
// rounded up to 5.0, so the claim stays defensible against the public profile.
export const GOOGLE_RATING = "4.9";

// Displayed as "90+" — a floor, not an exact total.
export const MAD_PAWS_REVIEW_FLOOR = 90;
