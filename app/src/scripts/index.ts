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


function widgetInit(){
    var options = {
        whatsapp: "+79041475454", // WhatsApp number
        telegram: "pottystkr", // Telegram bot username
        viber: "dixti", // Viber group
        call: "+79041475454", // Call phone number
        call_to_action: "Задайте вопрос!", // Call to action
        button_color: "#FF6550", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "whatsapp,telegram", // Order of buttons
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
}

widgetInit()
support_format_webp()