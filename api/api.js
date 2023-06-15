const { readFileSync } = require('fs')

const { join } = require('path')

module.exports = async (req, res) => {

    // Vercel provides query params in the query instead of the params object.
    req.params = req.params || req.query
   
    // Get club details from firestore.
    if (req.params.club) {

        console.log(req.params.club)

        return res.send(readFileSync(join(__dirname, '../public/scorecard.html')).toString('utf8'))

    }
  
   
    // Return landing page.
    res.send(readFileSync(join(__dirname, '../public/index.html')).toString('utf8'))
  }