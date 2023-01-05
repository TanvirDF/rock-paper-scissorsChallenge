import express from 'express';
import { router as home } from './router/home.js'
import { router as selection } from './router/selection.js'
import { router as selection2 } from './router/selection2.js'
import { router as result } from './router/result.js'


const app = express();
const port = 4000
const host = 'localhost'

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))


app.use('/', home)
app.use('/selection', selection)
app.use('/selection2', selection2)
app.use('/result', result)

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
})

export default server