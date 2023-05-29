export default defineEventHandler(async (event) => {
    // throw new Error("Big error")
    return event.res(400)
})
