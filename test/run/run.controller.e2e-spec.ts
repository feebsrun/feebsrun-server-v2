import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { RunModule } from '../../src/run/run.module';

describe('RunController (e2e)', () => {
  let runApp;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RunModule]
    }).compile();

    runApp = moduleFixture.createNestApplication();
    await runApp.init();
  });

  it('/ (GET)', () => {
    
  })
})