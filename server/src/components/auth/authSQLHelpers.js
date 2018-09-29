export const signUp = ({ username, email, uuid }) => {
  return `
    INSERT INTO users (username, uuid, email)
    VALUES ('${username}', '${uuid}', '${email}')
    RETURNING uuid, username, email
  `
};

export const addPassword = ( id, hash ) => {
  return `
    INSERT INTO credentials (user_id, hash)
    VALUES ('${id}', '${hash}')
  `;
};

export const login = () => {
  return `
  
  `;
};