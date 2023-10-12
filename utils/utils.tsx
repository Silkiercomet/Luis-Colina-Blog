import imageUrlBuilder from '@sanity/image-url'
import client from "../client"

const builder = imageUrlBuilder(client)

type AuthorImage = {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };

export function urlFor(source : AuthorImage) {
    return builder.image(source)
}