class PlaceCardAdapter {
  static parseOffer(offer) {
    return {
      id: offer.id,
      city: {
        name: offer.city.name,
        location: [offer.city.location.latitude, offer.city.location.longitude],
        zoom: offer.city.zoom,
      },
      previewImage: offer[`preview_image`],
      images: offer.images,
      title: offer.title,
      isFavorite: offer[`is_favorite`],
      isPremium: offer[`is_premium`],
      rating: offer.rating,
      type: offer.type,
      bedrooms: offer.bedrooms,
      maxAdults: offer[`max_adults`],
      price: offer.price,
      goods: offer.goods,
      host: {
        id: offer.host.id,
        name: offer.host.name,
        isPro: offer.host[`is_pro`],
        avatar: offer.host[`avatar_url`]
      },
      description: offer.description,
    };
  }

  static parseOffers(offers) {
    offers.map(PlaceCardAdapter.parseOffer);
  }
}

export default PlaceCardAdapter;
