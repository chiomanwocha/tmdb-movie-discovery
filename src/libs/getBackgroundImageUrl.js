export const backgroundImageUrl = (data, type) => {
  if ((data?.backdrop_path || data?.poster_path) !== null) {
    return `https://image.tmdb.org/t/p/original${
         type === 'card' ? data?.poster_path : data?.backdrop_path
      }`
  } else {
    return 'https://static.wixstatic.com/media/fc7570_ae9913d461894a7ebb7fc420d828ab83~mv2.png/v1/crop/x_420,y_0,w_1080,h_1080/fill/w_784,h_784,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.png'
  }
}
