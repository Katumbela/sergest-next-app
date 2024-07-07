'use client'

import { useEffect, useState } from 'react';
import { NavBar } from "../components";
import { db, storage } from "../../data/firebase";
import firebase from "firebase/compat/app";
import { FaSpinner } from 'react-icons/fa6';
import { Head } from 'next/document';

interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageUrl: string;
    createdAt: firebase.firestore.Timestamp;
    views: number;
}

export default function DeleteBlog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [load, setLoad] = useState(true)



    useEffect(() => {
        const fetchPosts = async () => {
            const postsSnapshot = await db.collection('posts').orderBy('createdAt', 'desc').get();
            const postsData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Post[];
            setPosts(postsData);
            setLoad(false)
        };

        fetchPosts();
    }, []);

    const handleDelete = async (postId: string, imageUrl: string) => {
        try {
            await db.collection('posts').doc(postId).delete();
            const imageRef = storage.refFromURL(imageUrl);
            await imageRef.delete();
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Erro ao excluir o post:', error);
        }
    };

    return (

        <>

            <Head>
                <title>Deletar artigos do blog | Sergest - Software de Faturação</title>
            </Head>

            <div className="container">
                <NavBar />
                <br />
                <div className="h grid items-center place-content-center rounded-lg bg-primary bg-sergest h-[15rem] w-full">
                    <h1 className="text-3xl font-bold tracking-widest text-white sm:text-6xl poppins-black ">Sergest Blog</h1>
                </div>
                <a href="/admin" className='mt-6 underline'>Voltar</a>
                <br />
                <br />
                <h2 className='text-4xl font-semibold'>Posts do Blog</h2>
                <hr />
                <br />
                {
                    load && <span className="flex gap-2"><FaSpinner className="my-auto animate-spin" /> <span className="my-auto">
                        Carregando post ... </span></span>
                }

                <div>
                    {posts.map(post => (
                        <div key={post.id} className="p-4 mb-4 bg-white rounded shadow">
                            <h3 className="text-2xl font-bold">{post.title}</h3>
                            <p className="text-gray-600">{post.subtitle}</p>
                            <button
                                onClick={() => handleDelete(post.id, post.imageUrl)}
                                className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                            >
                                Excluir
                            </button> <button
                                onClick={() => window.location.href = '/blogs/' + post.id}
                                className="px-4 py-2 mt-4 font-bold text-white rounded bg-primary hover:bg-sky-700"
                            >
                                Ver artigo
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
