// // models\book.model.js
const { pgTable, uuid, varchar, text, index, } = require("drizzle-orm/pg-core");
const {sql} =require("drizzle-orm")
const authorTable = require('./author.model')

const bookTable = pgTable("bookLibrary", {
     id: uuid().primaryKey().defaultRandom(),
     title: varchar({length: 255}).notNull(),
     description: text().notNull(),
     authorId: uuid().references(()=> authorTable.id).notNull()
     
},(table)=>([
    index('title_search_index').using('gin', sql`to_tsvector('english', ${table.title})`),
  ]))
//----ya duniya ko dakhna ha
module.exports = bookTable