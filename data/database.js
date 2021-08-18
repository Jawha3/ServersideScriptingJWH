// Config for connection to database 
var dbConfig = {
    driver: 'msnodesqlv8',  
    server: "(localdb)\\mssqllocaldb",
    database: "AnimalDB",
    user: "",
    password: "",
    options: {
      trustedConnection: true
  },
  debug: true,
  parseJSON: true
  }; 

  var sql = require('mssql/msnodesqlv8');

//   // INSERT INTO
// exports.INSERT = function(req, res) {
    
//     sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected');
//       const result = sql.query`INSERT INTO Animal([Name], Color) VALUES (${value}, ${value})`;
//     }
//   });  
// }

// exports.connect = async function(){
    
// }

  // SELECT ALL
 exports.SELECTALL = async function(){
    try{
        let result
        await sql.connect(dbConfig);

        console.log('Connected');
        result = await sql.query`SELECT * FROM Animal`;

        return result.recordset;
    }
    catch (err){
        console.log(err);
    }
 }

   // SELECT ALL BY ID
   exports.SELECTALLBYID = async function(id){
    try{
        let result
        await sql.connect(dbConfig);

        console.log('Connected');
        result = await sql.query`SELECT * FROM Animal WHERE ID =${id}`;

        return result.recordset;
    }
    catch (err){
        console.log(err);
    }
 }

   // INSERT
   exports.INSERT = async function(value1, value2){
    try{
        let result
        await sql.connect(dbConfig);

        console.log('Connected');
        result = await sql.query`INSERT INTO Animal([Name], Color) VALUES (${value1}, ${value2})`;

        return result.recordset;
    }
    catch (err){
        console.log(err);
    }
 }

    // DELETE
    exports.DELETE = async function(id){
        try{
            let result
            await sql.connect(dbConfig);
    
            console.log('Connected');
            result = await sql.query`DELETE FROM Animal WHERE ID =${id}`;
    
            return result.recordset;
        }
        catch (err){
            console.log(err);
        }
    }

     // PUT
     exports.PUT = async function(value1, value2, id){
        try{
            let result
            await sql.connect(dbConfig);
    
            console.log('Connected');
            result = await sql.query`UPDATE Animal SET [Name]=${value1}, Color=${value2} WHERE ID =${id}`;
    
            return result.recordset;
        }
        catch (err){
            console.log(err);
        }
    }


//     // SELECT BY ID
//     module.exports = sql.connect(dbConfig, function (err) {
//         if (err) { console.log(JSON.stringify(err)+'..............') }
//         else {
//           console.log('Connected');
//           const result = sql.query`SELECT * FROM Animal WHERE ID = ${value}`;
//         }
//       });

//   // DELETE BY ID
//   module.exports = sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected');
//       const result = sql.query`DELETE FROM Animal WHERE ID =${value}`;
      
//     }
//   });

//     // UPDATE BY ID
//     module.exports = sql.connect(dbConfig, function (err) {
//         if (err) { console.log(JSON.stringify(err)+'..............') }
//         else {
//           console.log('Connected');
//           const result = sql.query`UPDATE Animal SET [Name]=${value}, Color=${value} WHERE ID =${value}`;
          
//         }
//       });