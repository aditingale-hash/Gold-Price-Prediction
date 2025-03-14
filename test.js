const chai = require("chai");
const chaiHttp = require('chai-http');
const { describe, it } = require("mocha");
const app = require("./app")
chai.use(chaiHttp);


describe("Finding trend", function (){

    describe("Testing for News Api", ()=>{
        it("it should be down", ()=>{
            chai.request(app)
            .post("/api/nlp/news")
            .query({keyword: "Gold Prize"})
            .timeout(20000)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Down');
                
            });
        })
    })

    describe("Testing for SocialMedia Api", ()=>{
        it("it should be Up", ()=>{
            chai.request(app)
            .post("/api/nlp/socialMedia?keyword=Gold%20Prize")
            .end((err, res) => {
                // console.log(res.body);
                res.should.have.status(200);
                res.should.be.a('Up');
                done();
            });
        })
    })
})