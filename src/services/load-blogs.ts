import * as fs from 'fs';
import { db } from '../data/firebase'; // Ajuste o caminho para o seu arquivo de configuração do Firebase
 
interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageUrl: string;
    views?: number;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
}

async function loadPosts(): Promise<void> {
    try {
        const postsCollection = await db.collection('posts').orderBy('createdAt', 'desc').get();
        const posts: Post[] = postsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Post[];

        fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
        console.log('Posts saved to posts.json');
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

loadPosts();
