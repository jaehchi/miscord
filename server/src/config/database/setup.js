import { 
  createDatabase,
  dropDatabase,  
  createUserTable, 
  dropUserTable,
  createCredentialTable,
  dropCredentialTable
} from '../../lib/SQL';

const setup = async (err) => {
  await dropDatabase();
  await dropCredentialTable();
  await dropUserTable();

  await createDatabase();
  await createUserTable();
  await createCredentialTable();
  
  if (err) {
    throw err;
  }
  process.exit();
}

setup();