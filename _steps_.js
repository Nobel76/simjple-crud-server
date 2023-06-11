/***
 * MONGODB connection
 * --------------------------
 * 1.create account
 * 2.create an user with password
 * 3.whitelist IP address
 * 4.database > connect > driver > Node > view full  code
 * 5.change the password the uri
 * 1.CREATE ----POST
 * 2.app.post('/users'/async (req, res) => {})
 * 3.Make the function async to use await inside it
 * 4.make sure you use the express.json() middleware
 * 5.access data from the body : const user = req.body
 * const result = await userCollection.insertOne(user)
 * 7.res.send(result)
 * 
 * 
 * 
 * client side--------------
 * 1.create fetch 
 * 2.add second parameter as an object
 * 3.provider method: 'POST',
 * 4.add headers: {'content-type': 'application/json'}
 * 5.add body:JSON.stringify
 * 
 * 
 * 
 * 
 * READ-----------
 * --------------------
 * 1.create a cursor = userCollection.find()
 * 2.const result = await cursor.toArray()
 * 
 * 
 * -------------------------
 * DELETE
 * --------------------------
 * 1.create app.delete('/users/:id', async(req, res) =>{})
 * 2.specify unique ObjectId to delete the right user
 * 3.const query = {_id: new ObjectId(id)}
 * 
 * 
 * client 
 * 1.create dynamic url with id
 * mention the DELETE method
*/