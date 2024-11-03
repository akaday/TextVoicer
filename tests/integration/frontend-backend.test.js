const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../backend'); // Adjust the path as needed

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Test: Frontend and Backend', () => {
  it('should generate voice and return audio URL', async () => {
    const res = await chai.request(app)
      .post('/api/generate-voice')
      .send({ text: 'Hello, world!', voice: 'default' });

    expect(res).to.have.status(200);
    expect(res.body).to.be.a('string');
    expect(res.body).to.include('http');
  });

  it('should handle errors from the TTS API', async () => {
    const res = await chai.request(app)
      .post('/api/generate-voice')
      .send({ text: '', voice: 'default' });

    expect(res).to.have.status(500);
    expect(res.body).to.have.property('error', 'Failed to generate voice');
  });
});
