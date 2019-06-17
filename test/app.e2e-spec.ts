import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { doesNotReject, doesNotThrow } from 'assert';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      // .expect('success!');
      .then(response => {
        expect(response.body).toMatchObject(/hello/);
      })
  });

  it('/version (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .then(response => {
        //console.log(response.body)
        expect(response.body).toMatchObject(/version/);
        expect(response.body).toMatchObject(/success/);
      })
  });
});
