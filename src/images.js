document.getElementById('image').setAttribute("src", "./images/photo.jpg")
document.getElementById('behance').setAttribute("src", "./images/behance.svg")
document.getElementById('instagram').setAttribute("src", "./images/instagram.svg")
document.getElementById('facebook').setAttribute("src", "./images/facebook.svg")
// document.getElementById('malt').setAttribute("src", "./images/malt.svg")
document.getElementById('linkedin').setAttribute("src", "./images/linkedin.svg")
document.getElementById('vimeo').setAttribute("src", "./images/vimeo.svg")
document.getElementById('mail').setAttribute("src", "./images/mail.svg")
document.getElementById('bgImage').setAttribute("src", "./images/background.jpg")

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './images/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);