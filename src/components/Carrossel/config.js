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
  {foto: 'https://s1.kuantokusta.pt/img_upload/conf_slides/1743/CuidadoZdoZCabelo_63af19fa53ef1.png'},
  {foto: 'https://s1.kuantokusta.pt/img_upload/conf_slides/1742/SaldosZyZmodaZeZacessrios_63af18f2d5dcf.png'},
  {foto: 'https://s1.kuantokusta.pt/img_upload/conf_slides/1741/BlogZCuidarZdaZPeleZ_63af1863bc565.png'}
]