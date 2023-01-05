import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';



chai.use(chaiHttp)

describe('/GET Home Page', () => {
    it('should render the home page view', async () => {
        const res = await chai.request(server).get('/').send();
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Welcome to Rock Paper Scissor Game');
    })
})

describe(' selection page', () => {
    it('/POST it should create the game object and redirect to the selection page', async () => {
        const res = await chai.request(server).post('/selection').send({
            gameMode: 'singlePlayer',
            player1: 'testName1',
            player2: 'testName2'
        })

        expect(res).to.have.status(200)
    })

    it('/GET should render the selection page', async () => {

        const res = await chai.request(server).get('/selection').send({ name: 'test' });
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Choose your weapon:');
        expect(res.text).to.include('Rock');
        expect(res.text).to.include('Paper');
        expect(res.text).to.include('Scissor');

    })

})
