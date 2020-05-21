new Swiper ('.slider', { //Класс контейнера
  navigation: { //Классы кнопок
    prevEl: '.slider__btn_prev',
    nextEl: '.slider__btn_next',
  },
  slideClass: '_sS', //НЕ ТРОГАТЬ
  wrapperClass: '_sW', //НЕ ТРОГАТЬ
  loop: true, //по кругу
  //spaceBetween: 50, //расстояние между слайдами В ПИКСЕЛЯХ
  //slidesPerView: 2, //кол-во отображаемых слайдов
  //grabCursor: true, //заменить курсор на захват
  centeredSlides: true, //активный слайд в центре
  //speed: 300,
  //autoHeight: true,
  //slidesPerGroup: 1,
  //direction: 'vertical',
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 40,
    }, 
  },
})