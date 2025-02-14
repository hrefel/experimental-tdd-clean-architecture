import { UserEntity } from '../../domain/model/user/user.entity';
import { UserMock } from '../mocks/user.mock';
import { UserAdapter } from './user.adapter';
describe('test UserAdapter', () => {
  const adapter = new UserAdapter();

  it('should transform data API to Bussiness Model Domain', () => {
    // Arrange
    const mock = UserMock;
    const expectedResult = [
      new UserEntity(
        'Emily Johnson',
        'female',
        'emilys',
        'Engineering',
        'Sales Manager',
        'admin',
        '1996-5-30',
        'emily.johnson@x.dummyjson.com',
      )
    ]
    // Action
    const mapper = adapter.mapTo(mock);

    // Assert
    expect(mapper).toEqual(expectedResult);
  });
});
