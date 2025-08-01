const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');


chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('GET /api/stock-prices => stock data object', function(done) {
    chai.request(server)
      .get('/api/stock-prices?stock=GOOGL')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'stockData');
        assert.isArray(res.body.stockData);
        done();
      });
  });
});
