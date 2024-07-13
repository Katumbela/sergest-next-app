
import { MongoClient } from 'mongodb';

export const env = {
    mongoPass: 'wuYByLyVuYaUkP1w'
} as const;



export const client = new MongoClient('mongodb+srv://ja3328173:@crm-360.x1zuenu.mongodb.net/');
