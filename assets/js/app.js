// =====================================
// Bizine V2
// Main JavaScript
// =====================================


// وقتی صفحه کامل بارگذاری شد
document.addEventListener(
    "DOMContentLoaded",
    function () {


        console.log(
            "Bizine V2 initialized"
        );


        initSmoothScroll();

        initButtonInteraction();


    }
);



// =====================================
// Smooth Scroll
// =====================================

function initSmoothScroll(){


    const links =
        document.querySelectorAll(
            "a[href^='#']"
        );


    links.forEach(
        link => {


            link.addEventListener(
                "click",
                function(e){


                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );


                    if(target){


                        e.preventDefault();


                        target.scrollIntoView({

                            behavior:"smooth"

                        });


                    }


                }
            );


        }
    );


}




// =====================================
// Hero Button
// =====================================


function initButtonInteraction(){


    const button =
        document.querySelector(
            ".hero-content button"
        );


    if(!button)
        return;



    button.addEventListener(
        "click",
        function(){


            alert(
                "به زودی Workspace بیزین فعال خواهد شد."
            );


        }
    );


}