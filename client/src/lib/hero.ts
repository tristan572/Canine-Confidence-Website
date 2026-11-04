// Hero photos on desktop: as tall as the screen allows below the navbar, so
// the photo, heading and buttons all fit in the first view. Phones keep each
// page's own sizing, since the copy stacks above the photo there anyway.
export const HERO_PHOTO = "lg:h-[clamp(24rem,calc(100svh_-_14rem),42rem)] lg:aspect-auto lg:max-h-none object-cover";

// Hero section padding to match: less space above and below on desktop.
export const HERO_SECTION = "py-14 lg:py-12";
