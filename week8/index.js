
// this code runs synchronously
function showRandomFact() {
    // lots of code
    console.log("showData function finished")
}

// this code runs asynchronously
async function getRandomFact() {
    const response = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    console.log(data.text, "\n")
    console.log("getData finished")
}

async function getTodaysFact() {
    const response = fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
    // console.log(response)
    const data = await response.json()
    console.log(data.text, "\n")
    console.log("getData finished")
}

// getRandomFact()
getTodaysFact()

// getData()
// showData()