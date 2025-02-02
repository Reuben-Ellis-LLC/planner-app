import { initializeDB, db } from './your-module-path';
import createPrismaMock from 'prisma-mock';
import { Prisma } from '@prisma/client';

jest.mock('prisma-mock'); // Mock the `prisma-mock` module

describe('Prisma Mock Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previously mocked calls
  });

  test('createPrismaClientMock should create a mocked Prisma client', () => {
    const mockData = {
      user: [{ id: 1, name: 'John Doe' }],
    };

    const mockPrismaClient = createPrismaMock(mockData);
    expect(mockPrismaClient).toBeDefined();

    // Verify spy names for the mocked methods
    expect(mockPrismaClient.user.findMany.mockName).toBe('db.user.findMany');
  });

  test('initializeDB should reinitialize db and mock PrismaClientKnownRequestError', () => {
    const mockData = {
      post: [{ id: 1, title: 'Hello World' }],
    };

    initializeDB(mockData);

    // Verify `db` is reinitialized with mock data
    expect(db.post.findMany).toBeDefined();
    expect(db.post.findMany.mockName).toBe('db.post.findMany');

    // Verify PrismaClientKnownRequestError is mocked
    expect(
      new Prisma.PrismaClientKnownRequestError('Error message')
    ).toBeInstanceOf(Error);
  });
});
