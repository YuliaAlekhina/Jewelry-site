"use strict";

/*--Бургер--*/
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
/*---Карусель------*/

$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    //dots:false,
    // startPosition: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
/*----Корзина----*/

$(function () {
  $('.smart-basket__wrapper').smbasket({
    productElement: 'catalog__item',
    buttonAddToBasket: 'card__button',
    productPrice: 'card__price-number',
    productSize: 'product__size-element',
    productQuantityWrapper: 'product__quantity',
    smartBasketMinArea: 'cart-min',
    countryCode: '+7',
    smartBasketCurrency: '₽',
    smartBasketMinIconPath: '../img/basket.svg',
    agreement: {
      isRequired: true,
      isChecked: true,
      isLink: 'https://artstranger.ru/privacy.html'
    },
    nameIsRequired: false
  });
});
/*----Аккордион------*/

$(document).ready(function () {
  $('.block-question__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});