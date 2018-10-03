import { GraphQLObjectType, GraphQLInt  } from "graphql";

import user from '../../types/user';
import db from '../../../../database';

export default {
  type: user,
  args : {
    id : {
      type: GraphQLInt
    }
  },
  async resolve (_ , arg ) {
    const { rows } = await db.query(`SELECT * FROM users WHERE id = ${arg.id}`)
    console.log(rows[0]);
    return rows[0];
  }
};