angular.module('widget')
    .controller('exchangeCtrl', ['$scope', function($scope) {
        $scope.exchangeRates = {};

        // recalculate exchange when base currency is changed
        $scope.$watch('widget.options.dataBind.baseCurrency', calculateExchangeRates);

        // recalculate exchange when new data appears
        $scope.$watch('widget.data.timestamp', calculateExchangeRates);

        function calculateExchangeRates() {
            if ($scope.widget.data['rates']) {
                var baseRate = $scope.widget.data['rates'][$scope.widget.options.dataBind.baseCurrency];

                $scope.widget.options.dataBind.currencies.forEach(function(currency) {
                    var currencyRate = $scope.widget.data['rates'][currency];
                    $scope.exchangeRates[currency] = Math.round((baseRate*(1/currencyRate))*100)/100;
                });
            }
        }
    }])

    .controller('exchangeEditCtrl', ['$scope', function($scope) {
        $scope.currencies = $scope.widget.options.dataBind.currencies;
        $scope.baseCurrency = $scope.widget.options.dataBind.baseCurrency;

        $scope.save = function() {
            $scope.widget.options.dataBind.baseCurrency = $scope.baseCurrency;
            $scope.widget.flip();
        };
    }]);