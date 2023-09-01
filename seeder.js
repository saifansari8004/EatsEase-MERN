const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const itemModels = require('./models/itemModels')
const items = require('./utils/data')
require('colors')

dotenv.config();
connectDb();

const importData = async () =>
{
    try 
    {
        await itemModels.deleteMany();
        const itemData  = await itemModels.insertMany(items);
        console.log("Data imported successfullly" .bgGreen);
        process.exit();
    } 
    catch (error) 
    {
        console.log(`Error : ${error}` .bgRed.inverse);
        process.exit(1);
        
    }
}

importData();


