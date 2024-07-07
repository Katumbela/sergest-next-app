
'use client'
import React, { useState } from "react";
import { TextEditor } from "../components/text-editor/text-editor";
import { db, storage } from "../../data/firebase";
import firebase from "firebase/compat/app";
import { NavBar } from "../components"; 
import { FaSpinner } from "react-icons/fa6";



export const EDIT_LINK = '/33c06d2a-cb1d-4100-8dee-ba46d075f9a2'


export default function AddBlog() {
    const [title, setTitle] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [editorContent, setEditorContent] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [load, setLoad] = useState(false)


    document.title = ' Admin Panel Blog | Sergest - Software de Faturação'


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setLoad(true)
        let imageUrl = '';
        if (image) {
            const storageRef = storage.ref();
            const imageRef = storageRef.child(`images/${image.name}`);
            await imageRef.put(image);
            imageUrl = await imageRef.getDownloadURL();
        }

        await db.collection('posts').add({
            title,
            subtitle,
            content: editorContent,
            imageUrl,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setLoad(false)

        setTitle('');
        setSubtitle('');
        setEditorContent('');
        setImage(null);
        alert('Post adicionado com sucesso !!!')
    };

    return (
        <div className="container">

            <NavBar />
            <br />
            <br />

            <div className="flex justify-between">

                <h2 className="text-3xl font-semibold md:text-4xl text-primary poppins-black">Adicionar post no blog</h2>

                <a href={EDIT_LINK} className="underline"> Ver todos posts</a>
            </div>
            <br />
            <hr />
            <br />

            <div className="flex items-center justify-center bg-gray-100 dark:bg-white/50">
                <div className="w-full p-6 bg-white rounded-lg shadow-lg dark:bg-white/70">
                    <h2 className="mb-4 text-2xl font-semibold">Criar um novo post</h2>
                    <hr />
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="image" className="block mt-4 mb-2 text-xl font-bold text-gray-700">Imagem de Capa</label>
                            <input
                                type="file"
                                id="image"
                                className="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm outline-none dark:border-2 dark:border-white dark:bg-white/20 focus:ring-indigo-500 focus:border-primary sm:text-sm"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="title" className="block mt-4 mb-2 text-xl font-bold text-gray-700">Título</label>
                            <input
                                type="text"
                                id="title"
                                className="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm outline-none dark:border-2 dark:border-white dark:bg-white/20 focus:ring-indigo-500 focus:border-primary sm:text-sm"
                                value={title}
                                maxLength={80}
                                placeholder="Máx 80 carateres"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subtitle" className="block mt-4 mb-2 text-xl font-bold text-gray-700">Subtítulo</label>
                            <input
                                type="text"
                                id="subtitle"
                                className="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm outline-none dark:border-2 dark:border-white dark:bg-white/20 focus:ring-indigo-500 focus:border-primary sm:text-sm"
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block mt-4 mb-2 text-xl font-bold text-gray-700">Conteúdo</label>
                            <TextEditor editorContent={editorContent} setEditorContent={setEditorContent} />
                        </div>

                        <div className="flex justify-between">
                            {
                                load && <span className="flex gap-2"><FaSpinner className="my-auto animate-spin" /> <span className="my-auto">
                                    Adicionado post ... </span></span>
                            }
                            <button
                                type="submit"
                                className="px-4 py-2 font-bold text-white rounded-full ms-auto bg-primary hover:bg-sky-600"
                            >
                                Publicar artigo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}
