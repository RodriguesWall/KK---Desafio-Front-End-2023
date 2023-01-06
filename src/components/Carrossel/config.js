export const settings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const banners = [
  {foto: 'https://eventozz.s3.us-west-1.amazonaws.com/1.png'},
  {foto: 'https://eventozz.s3.us-west-1.amazonaws.com/2.png'},
  {foto: 'https://eventozz.s3.us-west-1.amazonaws.com/3.png'}
]