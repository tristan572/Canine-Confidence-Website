export interface LocationArea {
  name: string;
  slug: string;
  isLive: boolean;
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
    isLive: false
  },
  {
    name: "Northgate",
    slug: "/dog-training-northgate",
    isLive: true
  },
  {
    name: "Ascot",
    slug: "/dog-training-ascot",
    isLive: false
  },
  {
    name: "Aspley",
    slug: "/dog-training-aspley",
    isLive: false
  },
  {
    name: "Chermside",
    slug: "/dog-training-chermside",
    isLive: false
  }
];
