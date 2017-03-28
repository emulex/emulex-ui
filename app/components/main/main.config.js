'use strict';

angular.module('emulexApp')
    .config(['$translateProvider', 'en', 'zh', function ($translateProvider, en, zh) {

        var nEn = $.extend(true, angular.copy(zh), angular.copy(en));
        $translateProvider
            .translations('en', nEn)
            .translations('zh', angular.copy(zh));
        if ((navigator.browserLanguage || navigator.language).indexOf("zh") > -1) {
            $translateProvider.preferredLanguage('zh');
        } else {
            $translateProvider.preferredLanguage('zh');
        }
        $translateProvider.useSanitizeValueStrategy(null);
    }]);
