import sql from 'mssql'

export default defineEventHandler(async (event) => {
    const connection = await sql.connect(useRuntimeConfig(event).db)


    const data = await sql.query('SELECT * FROM Course;')
    await connection.close()
    return {
        hello: 'from tbl! =)',
        data: data.recordset
    }
})