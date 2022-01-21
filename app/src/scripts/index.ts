const webpUser = document.querySelectorAll('.checkwebp');

function support_format_webp(){
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))){
        webpUser.forEach(element => {
            element.classList.add('webp')
        });
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    else{
        webpUser.forEach(element => {
            element.classList.add('nowebp')
        });
        return false;
    }
}

support_format_webp()
