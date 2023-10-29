const items = document.querySelectorAll(".item");
items[0].querySelector(".product").style.padding="2%"
items[0].querySelector(".price").style.padding="2%"

function getDeviceWidth() {
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        return window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        return document.documentElement.clientWidth;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        return document.body.clientWidth;
    }
    return 0;
}


items.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        removeFocus();
        item.classList.add("selected");
        item.querySelector(".product").style.padding="2%"
        item.querySelector(".price").style.padding="2%"
    })
   
    item.addEventListener("click", function() {
        item.classList.add("selected");
    })
})

removeFocus = function() {
    items.forEach(function(item) {
        item.classList.remove("selected");
        item.querySelector(".product").style.padding="0"
        item.querySelector(".price").style.padding="0"
    })
}


if (getDeviceWidth() <= 820){
    items.forEach(function(item){
        item.click()
        item.querySelector(".product").style.padding="2%"
        item.querySelector(".price").style.padding="2%"
    }

    )
}