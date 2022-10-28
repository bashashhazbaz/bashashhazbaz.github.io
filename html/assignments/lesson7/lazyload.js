//get all imgs with data-src attribute
//const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
//const imgOptions = {
//    threshold: 0,
//    rootMargin: "0px 0px 20px 0px"
//};

//const loadImages = (image) => {
//    image.setAttribute('src', image.getAttribute('data-src'));
//    image.onload = () => {image.removeAttribute('data-src');};
//};

//first check to see if Intersection Observer is supported
//if('IntersectionObserver' in window) {
//    const imgObserver = new IntersectionObserver((items, observer) => {
//        items.forEach((item) => {    
//        });
//    }, imgOptions);

//loop through each img to check status and load if necessary
//imagesToLoad.forEach((img) => {
//    imgObserver.observe(img);
//});
///}
//else{ //just load all images if not supported
//    imagesToLoad.forEach((img) => {
//        loadImages(img);
//    });
//}

//document.addEventListener("DOMContentLoaded", function() {
   // var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));;
  
   // if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
   //   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
   //     entries.forEach(function(entry) {
   //       if (entry.isIntersecting) {
    //        let lazyImage = entry.target;
   //         lazyImage.src = lazyImage.dataset.src;
   //         lazyImage.srcset = lazyImage.dataset.srcset;
   //         lazyImage.classList.remove("lazy");
   //         lazyImageObserver.unobserve(lazyImage);
    //      }
    //    });
    //  });
  
    //  lazyImages.forEach(function(lazyImage) {
    //    lazyImageObserver.observe(lazyImage);
    //  });
  //  }
 // });

 document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });