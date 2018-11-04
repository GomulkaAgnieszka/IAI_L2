window.onscroll = function () {
        showTopButton()
    };

    let buttonUp = document.querySelector('.Button');

    buttonUp.addEventListener("click", goToTop);

    function showTopButton() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.querySelector(".Button").style.display = "block";
        } else {
            document.querySelector(".Button").style.display = "none";
        }
    }

    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }