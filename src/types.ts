export type OfferType = {
  id: string,
  city: string,
  previewImage: string,
  images: string,
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: string,
  description: string,
  location: number[]
};
