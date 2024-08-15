"use client";
import { useState, useEffect } from 'react';
import { supabase } from '~/supabaseClient';
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { ShineBorder } from '~/components/ui/shine-border';

export default function Page() {
   const [content, setContent] = useState<string>('');
   const [snippets, setSnippets] = useState<{ id: string, content: string, created_at: string }[]>([]);

   const fetchSnippets = async () => {
      const { data } = await supabase
         .from('snippets')
         .select('*')
         .order('created_at', { ascending: false });
      setSnippets(data || []);
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const { error } = await supabase
         .from('snippets')
         .insert([{ content }]);
      if (error) {
         console.error(error);
      } else {
         setContent('');
         fetchSnippets();
      }
   };

   useEffect(() => {
      fetchSnippets();
   }, []);

   return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
         <ShineBorder
            className="text-center text-4xl font-extrabold uppercase mb-10"
            color={['#ffffff', '#ffeb3b', '#ff5722']}
         >
            Coding Challenge
         </ShineBorder>
         
         <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-500">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Share Your Snippet</h2>
            <Textarea
               value={content}
               onChange={(e) => setContent(e.target.value)}
               placeholder="What's on your mind?"
               required
               className="mb-6 p-4 text-white-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition duration-300 ease-in-out"
            />
            <Button type="submit" className="w-full py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
               Submit
            </Button>
         </form>
         
         
         <ul className="mt-10 w-full max-w-lg bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Recent Snippets</h2>
            {snippets.length > 0 ? (
               snippets.map((snippet) => (
                  <li key={snippet.id} className="border-b py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100">
                     <p className="text-lg text-gray-900 mb-1 font-medium">{snippet.content}</p>
                     <span className="text-sm text-gray-500">{new Date(snippet.created_at).toLocaleString()}</span>
                  </li>
               ))
            ) : (
               <li className="text-center text-gray-500">No snippets available. Be the first to share!</li>
            )}
         </ul>
      </div>
   );
}