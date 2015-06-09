angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('exchange', {
            sizex: 2,
            sizey: 2,
            color: '#2a6c62',
            template: 'Dashboard-widget-exchange/exchange.html',
            editTemplate: 'Dashboard-widget-exchange/exchangeEdit.html',
            dataBind: {
                type: 'external',
                source: 'https://openexchangerates.org/api/latest.json?app_id=22f05c3478bf4097bd66a171272341e0',
                interval: 600000,
                baseCurrency: 'PLN',
                currencies: ['PLN', 'NOK', 'EUR', 'CHF', 'USD']
            }
        });
    });