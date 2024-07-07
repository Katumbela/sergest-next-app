import { useEffect, useState } from "react";
import { Footer, NavBar } from "../components";
import { db } from "../../data/firebase";
import { FaArrowRight, FaSpinner } from "react-icons/fa6";

export interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageUrl: string;
    views?: number;
}

export function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);


    document.title = ' Blog Sergest | Software de Faturação'

    const [load, setLoad] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = await db.collection('posts').orderBy('createdAt', 'desc').get();
            setPosts(postsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post))); setLoad(false)
        };

        fetchPosts();
    }, []);

    return (
        <>

            <div className="container">
                <NavBar />
                <br />
                <div className="h grid items-center place-content-center rounded-lg bg-primary bg-sergest sm:h-[15rem] h-[10rem] w-full">
                    <h1 className="text-3xl font-bold tracking-widest text-white sm:text-6xl poppins-black">Sergest Blog</h1>
                </div>
                <h2 className="mt-8 text-2xl tracking-wider sm:text-4xl poppins-regular">Posts recentes</h2>
                <hr />

                <br />
                {
                    load &&
                    <div className="grid text-center items-center h-[70vh]">
                        <div>
                            <span className="gap-2 "><FaSpinner className="m-auto text-7xl text-primary animate-spin" />


                                <br />
                                <span className="mt-6 tracking-wider">
                                    <i> Carregando Artigos... </i></span></span>
                        </div>
                    </div>
                }
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <div className="relative h-[14rem] rounded-lg overflow-hidden">
                                <div className="absolute inset-0 transition-transform duration-500 transform bg-center bg-cover bg-primary hover:scale-110" style={{ backgroundImage: `url('${post.imageUrl}')` }} />
                            </div>
                            <h3 className="mt-4 font-bold text-primary ">{post.title}</h3>
                            <h4>{post.subtitle}</h4>

                            <a className="flex justify-between mt-3 text-blue-600" href={`/blogs/${post.id}`}>
                                <span className="my-auto hover:underline">
                                    Ver artigo</span>

                                <FaArrowRight className="my-auto text-sm" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <br />

            <Footer />

        </>

    );
}
