// Single source of truth for the review counts and ratings shown across the
// site and in the LocalBusiness JSON-LD. Update these when the totals change,
// rather than editing the numbers page by page.

export const GOOGLE_REVIEW_COUNT = 33;

// Mirrors the figure shown on the public Google Business Profile, which is the
// source a visitor can check. 32 x 5-star + 1 x 4-star = 164 / 33 = 4.97,
// which Google rounds to 5.0 for display.
//
// Note the threshold: this rounds to 5.0 only while the average stays at or
// above 4.95. One more 4-star review (168 / 34 = 4.94) tips GBP to 4.9, so
// re-check the profile when the count changes and update this with it.
//
// State this as an average only. One review is 4-star, so wording like
// "all 5-star" or "every review is 5 stars" is not accurate.
export const GOOGLE_RATING = "5.0";

// Displayed as "90+" — a floor, not an exact total.
export const MAD_PAWS_REVIEW_FLOOR = 90;
