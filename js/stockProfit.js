'use strict';
/**
 * dynamic programming to eval max value diff
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var current = prices[0],
        profit = 0;
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - current);
        current = Math.min(current, prices[i]);
    }
    return profit;

};

var prices = [20, 40, 52, 15, 30, 50, 10, 25];

console.log(maxProfit(prices));

var totalProfit=function(prices){
	var profit=0,
	lastHold=prices[0];
	for(let i=1;i<prices.length;i++){
		profit=Math.max(prices[i]-lastHold,0);
		lastHold=prices[i];
	}
	return profit;
}

console.log(totalProfit(prices));