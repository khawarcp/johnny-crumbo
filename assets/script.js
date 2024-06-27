// let reviewsSlider = new Swiper('.collection-slider', {
// 	slidesPerView: 1,
// 	spaceBetween: 24,
// 	centeredSlides: false,
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// 	speed: 3000,
// 	// autoplay: {
// 	// 	delay: 4000,
// 	// },
// 	loop: true,
// 	// slidesPerView:'6',
// 	allowTouchMove: true,
// 	disableOnInteraction: true,
// 	breakpoints: {
// 		600: {
// 			slidesPerView: 1,
// 			spaceBetween: 24,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 24,
// 		},
// 		1024: {
// 			slidesPerView: 3,
// 			spaceBetween: 24,
// 		},
// 		1200: {
// 			slidesPerView: 4.1,
// 			spaceBetween: 24,
// 		},
// 	},
// });




document.addEventListener('DOMContentLoaded', function() {
    var swiperSections = document.querySelectorAll('.feature-collection-section');

    function initializeSwipers() {
        swiperSections.forEach(function(section, index) {
            var swiperContainer = section.querySelector('.swiper-container');
            var swiperPagination = section.querySelector('.swiper-pagination');
            var swiperButtonNext = section.querySelector('.swiper-button-next');
            var swiperButtonPrev = section.querySelector('.swiper-button-prev');

            if (window.matchMedia('(min-width: 601px)').matches) {
                // Add swiper classes for initialization
                swiperContainer.classList.add('swiper-container-' + index);
                swiperPagination.classList.add('swiper-pagination-' + index);
                swiperButtonNext.classList.add('swiper-button-next-' + index);
                swiperButtonPrev.classList.add('swiper-button-prev-' + index);

                // Initialize Swiper
                new Swiper('.swiper-container-' + index, {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    centeredSlides: false,
                    pagination: {
                        el: '.swiper-pagination-' + index,
                        type: 'fraction',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next-' + index,
                        prevEl: '.swiper-button-prev-' + index,
                    },
                    speed: 3000,
                    loop: true,
                    allowTouchMove: true,
                    disableOnInteraction: true,
                    breakpoints: {
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 4.1,
                            spaceBetween: 24,
                        },
                    },
                });
            } else {
                // Apply grid layout
                section.classList.add('flex-layout');
                swiperContainer.classList.remove('swiper-container');
            }
        });
    }

    // Initialize on page load
    initializeSwipers();

    // Reinitialize on window resize
    window.addEventListener('resize', function() {
        swiperSections.forEach(function(section, index) {
            var swiperContainer = section.querySelector('.swiper-container-' + index);
            if (swiperContainer && window.matchMedia('(max-width: 600px)').matches) {
                // Destroy Swiper instance and apply grid layout
                swiperContainer.swiper.destroy(true, true);
                swiperContainer.classList.remove('swiper-container-' + index);
                section.classList.add('grid-layout');
            } else if (!swiperContainer && window.matchMedia('(min-width: 601px)').matches) {
                // Reinitialize Swiper
                section.classList.remove('grid-layout');
                initializeSwipers();
            }
        });
    });
});


$(document).ready(function() {
    function setPadding() {
        var divLeftGap = $('.container').offset().left;
        var containerPaddingLeft = parseInt($('.container').css('padding-left'), 10);
        $('.collection-slider').css('padding-left', divLeftGap + containerPaddingLeft);
    }

    // Set padding on page load
    setPadding();

    // Update padding on window resize
    $(window).resize(function() {
        setPadding();
    });
});



$(document).ready(function() {
    var container = $('.collection-grid-flex');
    var childrenCount = container.children().length;
  
    if (childrenCount % 2 === 0) {
        container.addClass('even-children-class');
    } else {
        container.addClass('odd-children-class');
    }
});

$(document).ready(function() {
    // Array of classes for different colors
    var colors = ['new-red', 'sky', 'white'];

    $('.collection-grid-product-info h2, .collection-banner-content h2, .coll-banner-content h1, .about-banner-content h1').each(function() {
        var $this = $(this);
        var words = $this.text().split(' ');

        // Function to determine the color class based on the word index
        function getColorClass(index) {
            if (index === 0) {
                return colors[0]; // First word is red
            } else if (index === 1) {
                return colors[1]; // Second word is blue
            } else {
                return colors[2]; // Rest of the words are white
            }
        }

        var coloredWords = words.map(function(word, index) {
            var colorClass = getColorClass(index);
            return '<span class="' + colorClass + '">' + word + '</span>';
        });

        $this.html(coloredWords.join(' '));
    });
});


$(document).ready(function() {
    var swiper2 = new Swiper(".about-marquee-slider", {
        speed: 3000,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        allowTouchMove: true,
        speed: 8000,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        breakpoints: {
            600: {
                spaceBetween: 20,
            },
        },
        slidesPerView: "auto",
        on: {
            init: function() {
                console.log("Swiper initialized", this);
            },
            resize: function() {
                console.log("Swiper resized", this);
            },
            slideChange: function() {
                console.log("Slide changed", this);
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Main Image Slider
    var mainImageSlider = new Swiper('.customer-testimonials-images-slider', {
        loop: false,
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Thumbnails Slider
    var thumbnailsSlider = new Swiper('.testimonials-thumbnails-slider', {
        loop: true,
        spaceBetween: 33,
        slidesPerView: 2,
        centeredSlides: false,
        slideToClickedSlide: true,
        breakpoints: {
            600: {
                slidesPerView: 1,
                spaceBetween: 12,
            },
            768: {
                spaceBetween: 12,
            },
        }
    });

    // Content Slider
    var contentSlider = new Swiper('.testimonial-content-slider', {
        loop: false,
        spaceBetween: 24,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Syncing the main image slider with the thumbnails and content sliders
    function syncSliders(swiper) {
        let realIndex = swiper.realIndex;

        mainImageSlider.slideToLoop(realIndex);
        thumbnailsSlider.slideToLoop(realIndex);
        contentSlider.slideToLoop(realIndex);
    }

    // Attach events for syncing
    mainImageSlider.on('slideChangeTransitionEnd', function() {
        syncSliders(mainImageSlider);
    });

    thumbnailsSlider.on('click', function(swiper) {
        let clickedIndex = swiper.clickedIndex;
        if (clickedIndex !== undefined) {
            mainImageSlider.slideToLoop(clickedIndex);
            contentSlider.slideToLoop(clickedIndex);
        }
    });

    contentSlider.on('slideChangeTransitionEnd', function() {
        syncSliders(contentSlider);
    });

    // Initial synchronization
    syncSliders(mainImageSlider);
});




let productSlider = new Swiper('.product-images-slider', {
	slidesPerView: 1,
	spaceBetween: 24,
	centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
	speed: 1000,
	// autoplay: {
	// 	delay: 4000,
	// },
	loop: true,
	// slidesPerView:'6',
	allowTouchMove: false,
	disableOnInteraction: true,
	breakpoints: {
		600: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		1200: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
	},
});

$(".quantity-container button").on("click", function(ev) {
    var currentQty = $('input[name="quantity"]').val();
    var qtyDirection = $(this).data("direction");
    var newQty = 0;
    
    if (qtyDirection == "1") {
      newQty = parseInt(currentQty) + 1;
    }
    else if (qtyDirection == "-1") {
      newQty = parseInt(currentQty) - 1;
    }
  
    // make decrement disabled at 1
    if (newQty == 1) {
      $(".decrement-quantity").attr("disabled", "disabled");
    }
    
    // remove disabled attribute on subtract
    if (newQty > 1) {
      $(".decrement-quantity").removeAttr("disabled");
    }
    
    if (newQty > 0) {
      newQty = newQty.toString();
      $('input[name="quantity"]').val(newQty);
    }
    else {
      $('input[name="quantity"]').val("1");
    }
});


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.product-tab').hide();
$('.product-tab:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.product-tab').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});





function playVideo() {
    var video = document.getElementById("about-video");
    var videoParent = document.querySelector(".about-video-container");

    if (video.paused) {
        video.play();
        videoParent.classList.add("playing");
    } else {
        video.pause();
        videoParent.classList.remove("playing");
    }
}


$('.header-hamburger button').click(function () {
    $('header').addClass('menu-active');
    $('body').addClass('menu-active');
    $('html').addClass('menu-active');
})

$('.header-mobile-close').click(function () {
    $('header').removeClass('menu-active');
    $('body').removeClass('menu-active');
    $('html').removeClass('menu-active');
})