import { signUpQuery } from "../authQueries";

const payload = {
  username: 'testuser2',
  password: 'password',
};

describe('Tests user sign up queries', () => {
  test('it should properly add user to database', () => {
    signUpQuery(payload)
      .then(result => {
        console.log(JSON.stringify(result))
        const { id, query } = result;
        expect(query.rowCount).toBe(1);
        expect(id).toBe(2);
      });
  });
});