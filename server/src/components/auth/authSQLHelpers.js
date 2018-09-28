export const signUp = ({ username, email }, uuid) => {
  return `
    INSERT INTO users (username, uuid, email)
    VALUES ('${username}', '${uuid}', '${email}')
    RETURNING uuid
  `
};