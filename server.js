const Express = require('express');
const data = require('./data.json');
const app = Express();
var cors = require('cors')
app.use(cors())

const PORT = 25565;

app.get('/api/airport/met/:icao', (req, res) => {
  let airport_icao = req.params.icao;
    let airport_data = data[airport_icao];
    if (airport_data) {
        res.json(airport_data);
    } else {
        res.json({ error: 'Airport not found' });
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});