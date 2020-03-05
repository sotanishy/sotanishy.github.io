$(function(){
    let baseUrl = window.location.origin;

    // load header
    $('#header').load(baseUrl + '/header.html', function () {

        // when loading is complete, set the language
        
        let storageSupported = (typeof(Storage) !== 'undefined');
        let key = 'sotanishy.github.io-lang';
        let lang = storageSupported ? (localStorage.getItem(key) || 'en') : 'en';

        if (lang == 'ja') {
            $('[lang="en"]').hide();
        } else {
            $('[lang="ja"]').hide();
        }

        $('#lang').click(function () {
            event.preventDefault();
            $('[lang="en"]').toggle();
            $('[lang="ja"]').toggle();

            if (lang == 'en') {
                lang = 'ja';
                if (storageSupported) localStorage.setItem(key, 'ja');
            } else {
                lang = 'en';
                if (storageSupported) localStorage.setItem(key, 'en');
            }
        });
    });

    // add favicon
    $('<link>', {
        'type' : 'image/png',
        'rel' : 'shortcut icon',
        'href' : baseUrl + '/favicon.png'
    }).appendTo('head');
});
