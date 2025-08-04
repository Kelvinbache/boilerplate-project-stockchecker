'use strict';

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      const stock = req.query.stock;
      
      // Simulate fetching stock data
      const stockData = {
        stock: stock,
        price: Math.random() * 1000, // Random price for demonstration
        likes: Math.floor(Math.random() * 100) // Random likes for demonstration
      };

      // Return the stock data
      if (Array.isArray(stock)) {
      
        // If multiple stocks are requested, return an array of stock data
        const stockDataArray = stock.map(s => ({
          stock: s,
          price: Math.random() * 1000,
          rel_likes: Math.floor(Math.random() * 100)
        }));
      
        res.json({ stockData: stockDataArray });
      
      } else {
        res.json({ stockData });
      }
      
    });
    
};
