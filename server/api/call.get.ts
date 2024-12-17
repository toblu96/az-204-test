export default defineEventHandler(async (event) => {

    return await $fetch('https://appfunction-bggna2hxc5e6awac.westeurope-01.azurewebsites.net/api/sqltrigger?')

})