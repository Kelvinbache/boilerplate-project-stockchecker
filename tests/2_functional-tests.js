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
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        
        // get the stock data
        expect(res.body.stockData).to.have.property("stock").that.is.a('string');
        done();
});
 
test('GET /api/stock-prices => stock data with likes', function(done) {
    chai.request(server)
      .get('/api/stock-prices?stock=GOOGL&like=true')
      .end(function(err, res) {
        expect(res).to.have.status(200);

        // likes the stock
        expect(res.body.stockData).to.have.property("likes").to.equal(1);
      done();
      });
    });

test('GET /api/stock-prices => stock data with likes and multiple stocks', function(done) {
        chai.request(server)
        .get('/api/stock-prices?stock=GOOGL&like=true')
        .end(function(err, res) {
          expect(res).to.have.status(200);

        // view the stock and likes
        expect(res.body.stockData).to.have.property("stock").that.is.a('string');
        expect(res.body.stockData).to.have.property("likes").to.equal(2);

        done();
        });
      });


      
test('GET /api/stock-prices => stock data with likes and multiple stocks', function(done) {
        chai.request(server)
        .get('/api/stock-prices?stock=GOOGL&like=true')
        .end(function(err, res) {
          expect(res).to.have.status(200);
        //  two stocks
        expect(res.body).to.have.property("stockData").that.is.an('array').with.lengthOf(2);
        done();

        });
      });



      
test('GET /api/stock-prices => stock data with likes and multiple stocks', function(done) {
        chai.request(server)
        .get('/api/stock-prices?stock=GOOGL&like=true')
        .end(function(err, res) {
          expect(res).to.have.status(200);

        
        // two stocks with likes
        res.body.stockData.forEach(stock => {
          expect(stock).to.have.property("stock").that.is.a('string');
          expect(stock).to.have.property("rel_likes").to.equal(2);
        });

         done();
        });
      });
  });
});  