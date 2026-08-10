export interface LocationArea {
  name: string;
  slug: string;
  isLive: boolean;
  href?: string;
}

export const serviceAreas: LocationArea[] = [
  {
    name: "Sandgate & Shorncliffe",
    slug: "/dog-training-sandgate",
    isLive: true
  },
  {
    name: "Boondall",
    slug: "/dog-training-boondall",
    isLive: false,
    href: "/",
  },
  {
    name: "Northgate",
    slug: "/dog-training-northgate",
    isLive: true
  },
  {
    name: "Ascot",
    slug: "/dog-training-ascot",
    isLive: true
  },
  {
    name: "Aspley",
    slug: "/dog-training-aspley",
    isLive: true
  },
  {
    name: "Chermside",
    slug: "/dog-training-chermside",
    isLive: true
  }
];
