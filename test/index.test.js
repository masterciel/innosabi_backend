const supertest = require('supertest');
const app = require('../index');

describe('GET /api/suggestion', () => {
  it('should return suggestions when valid query parameters are provided', async () => {
    const response = await supertest(app).get('/api/suggestion').query({
      filter: `[{"name":"any","modifiers":[{"name":"fields","params":["title","content"]},{"name":"contains","params":["innovation"]}]}]`,
    });

    expect(response.status).toBe(200);
    expect(response.body.filter).toEqual(
      `[{"name":"any","modifiers":[{"name":"fields","params":["title","content"]},{"name":"contains","params":["innovation"]}]}]`
    );
  });

  it('should return error when invalid query parameters are provided', async () => {
    const response = await supertest(app).get('/api/suggestion').query({
      filter: `invalidParameters`,
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('Invalid filter used');
  });

  it('should return error when HTTP method other than GET is used', async () => {
    const response = await supertest(app).post('/api/suggestion');

    expect(response.status).toBe(405);
    expect(response.body.message).toEqual('Method not allowed');
  });
});
