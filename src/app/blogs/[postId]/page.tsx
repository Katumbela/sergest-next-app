
"use client"

import { useEffect, useState } from 'react';
import { FaArrowRight, FaEye, FaSpinner } from 'react-icons/fa6';
import Image from 'next/image';
import { db } from '@/data/firebase';
import { ColoredText, Footer, NavBar } from '@/app/components';
import { logos } from '@/utils';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageUrl: string;
    views?: number;
    createdAt: firebase.firestore.Timestamp;
}


interface PostParams {
    params: {
        postId: string;

    }
    ;

}


export default function Blogs({ params }: PostParams) {
    const [post, setPost] = useState<Post | null>(null);
    const [load, setLoad] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = await db.collection('posts').doc(params.postId).get();
            if (postDoc.exists) {
                const postData = postDoc.data() as Omit<Post, 'id'>;
                // Incrementar a contagem de visualizações
                await db.collection('posts').doc(params.postId).update({
                    views: (postData.views || 0) + 1,
                });
                setPost({ id: postDoc.id, ...postData });
                setLoad(false);
            }
        };

        fetchPost();
    }, [params.postId]);

    const calculateReadingTime = (text: string) => {
        const wordsPerMinute = 200;
        const words = text.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    };

    const formatDate = (timestamp: firebase.firestore.Timestamp) => {
        const dateObject = timestamp.toDate();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateObject.toLocaleDateString('pt-BR', options);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = await db.collection('posts').orderBy('createdAt', 'desc').get();
            setPosts(postsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post)));
        };

        fetchPosts();
    }, []);

    // document.title = post ? post.title + ' | Sergest Software' : 'Blogs | Sergest Software '

    return (
        <>
            <Head>
                {/* Meta tags para SEO */}
                <title>{post ? post.title + ' | Sergest Software' : 'Blogs | Sergest Software'}</title>
                <meta name="description" content={post ? post.subtitle : 'O melhor software de faturação'} />

                {/* Meta tags para compartilhamento social */}
                <meta property="og:title" content={post ? post.title : 'Sergest Software'} />
                <meta property="og:description" content={post ? post.subtitle : 'O melhor software de faturação'} />
                <meta property="og:image" content={post ? post.imageUrl : '/default-image.jpg'} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://example.com/blogs/${params.postId}`} />

                {/* Meta tags para Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post ? post.title : 'Sergest Software'} />
                <meta name="twitter:description" content={post ? post.subtitle : 'O melhor software de faturação'} />
                <meta name="twitter:image" content={post ? post.imageUrl : '/default-image.jpg'} />
            </Head> 

            
            <NextSeo

                title={post ? post.title : 'Sergest Software '}
                description={post ? post.subtitle : 'O melhor software de faturação'}
            />


            <body>
                <div className="container">
                    <NavBar />
                    <br />
                    {load && (
                        <div className="grid text-center items-center h-[70vh]">
                            <div>
                                <span className="gap-2 ">
                                    <FaSpinner className="m-auto text-7xl text-primary animate-spin" />
                                    <br />
                                    <span className="mt-6 tracking-wider">
                                        <i>Carregando Artigo...</i>
                                    </span>
                                </span>
                            </div>
                        </div>
                    )}
                    {post && (
                        <div>
                            <div className="md:h-[37rem] rounded-lg h-[30rem]" style={{ background: `url('${post.imageUrl}') center center`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
                            <h1 className="mt-4 mb-2 text-3xl font-semibold poppins-regular md:text-5xl">{post.title}</h1>
                            <p className="mb-2 text-sm italic text-gray-400">Publicado em: {formatDate(post.createdAt)}</p>
                            <div className="gap-4 my-auto sm:flex">
                                <h2 className="my-auto text-2xl">{post.subtitle}</h2>
                                <span className="hidden my-auto text-4xl sm:block"> &middot;</span>
                                <p className="flex gap-2 my-auto">
                                    <div className="flex gap-2 my-auto text-sm">
                                        <FaEye className="my-auto" /> Visualizações:
                                    </div>
                                    {post.views}
                                </p>
                            </div>
                            <p className="mb-6 tracking-widest border-b">Tempo estimado de leitura: {calculateReadingTime(post.content)} min</p>
                            <div className="gap-6 md:flex">
                                <div className="w-full md:w-9/12" dangerouslySetInnerHTML={{ __html: post.content }} />
                                <div className="w-full mt-14 md:w-3/12 md:mt-0 md:border-l-2 md:ps-10">
                                    <Image src={logos.logo} className="mx-auto mt-4 w-100" alt="" />
                                    <br />
                                    <p className="relative whitespace-break-spaces text-center text-primary mt-[1rem] sm:text-xl mx-auto">
                                        <ColoredText className="text-8xl comma font-bold -mt-3 absolute ms-[-2rem]">
                                            <span>&quot;</span>
                                        </ColoredText>
                                        <span className="text-xl">A Sergest é um software de gestão e faturação especializado em oferecer soluções abrangentes e intuitivas para a otimização de processos empresariais, trabalhamos no mercado nacional desde 2016, atuamos no ramo das Tics, Marca Sergest é propriedade da empresa Sermar.</span>
                                        <ColoredText className="text-8xl comma font-bold -mt-3 absolute me-[-2rem]">
                                            <span>&quot;</span>
                                        </ColoredText>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <h2 className="text-2xl font-semibold sm:text-3xl">Outros Artigos da Sergest</h2>
                            <br />
                            <br />
                            <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                                {posts.map((post) => (
                                    <div key={post.id} className="post">
                                        <div className="relative h-[14rem] rounded-lg bg-primary overflow-hidden">
                                            <div className="absolute inset-0 transition-transform duration-500 transform bg-center bg-cover hover:scale-110" style={{ backgroundImage: `url('${post.imageUrl}')` }} />
                                        </div>
                                        <h3 className="mt-4 font-bold text-primary">{post.title}</h3>
                                        <h4>{post.subtitle}</h4>
                                        <a className="flex justify-between mt-3 text-blue-600" href={`/blogs/${post.id}`}>
                                            <span className="my-auto hover:underline">Ver artigo</span>
                                            <FaArrowRight className="my-auto text-sm" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </body>
        </>
    );
}
