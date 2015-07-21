'use strict';
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit=0,
    lastHold=prices[0];
    return function(){
        for(var i=1;i<prices.length;i++){
            profit+=Math.max(prices[i]-lastHold,0);
            lastHold=prices[i];
        }
        return profit;
    }();
};

var prices = [1,2,4];

console.log(maxProfit(prices));

// 2 trades max profit
var findProfit = function(prices) {
    var len = prices.length,
    maxLeft = [0];

    var min = prices[0];
    for(var i = 1; i < len; i++) {
        min = Math.min(prices[i], min);
        maxLeft[i] = Math.max(maxLeft[i-1], prices[i] - min);
    }
    var profit = 0;
    var currMax = prices[len-1];
    var firstProfit = 0;
    for(i = len-1; i >= 0; i--) {
        firstProfit = currMax - prices[i];
        currMax = Math.max(prices[i], currMax);
        profit = Math.max(profit, maxLeft[i] + firstProfit);
    }
    return profit;
};

prices=[1,2];
console.log(findProfit(prices));