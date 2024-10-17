import { ASSETS_URL } from './config';

export function getImageUrl(image) {
  return ASSETS_URL ? `${ASSETS_URL}/${image}` : image;
}
