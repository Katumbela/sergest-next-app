
import { MongoClient } from "mongodb";


const uri = "mongodb+srv://ja3328173:<password>@crm-360.x1zuenu.mongodb.net/";

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const database = client.db('yourDatabaseName');
            const collection = database.collection('posts');

            const post = {
                title: req.body.title,
                subtitle: req.body.subtitle,
                content: req.body.content,
                imageUrl: req.body.imageUrl,
                createdAt: new Date(),
            };

            await collection.insertOne(post);
            res.status(200).json({ message: 'Post adicionado com sucesso!' });
        } catch (error) {
            console.error('Error adding document: ', error);
            res.status(500).json({ message: 'Erro ao adicionar o post!' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}

