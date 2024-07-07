export const correctImgPath = (imgPath: string) => `https://image.tmdb.org/t/p/w600_and_h900_bestv2${imgPath}`
export const getBackdropURL = (backdropPath: string) => `https://image.tmdb.org/t/p/original${backdropPath}`
export const correctRating = (rating: number) => rating.toFixed(1)
export const correctReleaseDate = (releaseDate: string) => releaseDate.split('-').reverse().join('-')
