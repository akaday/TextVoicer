const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const axios = require('axios');
const app = require('../../backend'); // Adjust the path as needed

chai.use(chaiHttp);
const { expect } = chai;

describe('POST /api/generate-voice', () => {
  let axiosPostStub;

  beforeEach(() => {
    axiosPostStub = sinon.stub(axios, 'post');
  });

  afterEach(() => {
    axiosPostStub.restore();
  });

  it('should return the correct audio URL on success', async () => {
    const audioUrl = 'http://example.com/audio.mp3';
    axiosPostStub.resolves({ data: { audioUrl } });

    const res = await chai.request(app)
      .post('/api/generate-voice')
      .send({ text: 'Hello, world!', voice: 'default' });

    expect(res).to.have.status(200);
    expect(res.body).to.equal(audioUrl);
  });

  it('should handle errors from the TTS API', async () => {
    axiosPostStub.rejects(new Error('TTS API error'));

    const res = await chai.request(app)
      .post('/api/generate-voice')
      .send({ text: 'Hello, world!', voice: 'default' });

    expect(res).to.have.status(500);
    expect(res.body).to.have.property('error', 'Failed to generate voice');
  });
});
