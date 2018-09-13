# Miscord RESTful Server Developer Docs

## Getting Started

````bash
cd rest-server
npm i 
npm run dev
````
---
## Database

### PostgreSQL
  * Depending on the node NODE_ENV value, the API will use either the AWS RDS instance or local instance.
  * Once promisified, all queries are made through `db.queryAsync(queryString)`.

---
### API
* The API takes the following structure:

```plaintext
Start
|
SQLHelpers
|
Queries
|
Controllers
|
Router
|
End
```


#### Endpoints
* Under Construction

---
###Testing

Backend testing is done with Jest. To add new tests, each test needs to open a new port that is not in use.

```bash
npm run test
```


