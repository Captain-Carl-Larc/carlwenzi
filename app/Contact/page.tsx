'use client'
import React, { FC } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface ContactProps { }

const Contact: FC<ContactProps> = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl text-center space-y-6">
                <div className="w-16 h-16 mx-auto text-orange-500 mb-4 flex items-center justify-center">
                    {/* Mail Icon */}
                    <Mail className="w-16 h-16" />
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                    Get in Touch
                </h1>
                <p className="text-gray-400 text-lg sm:text-xl">
                    I'd love to hear from you!  Please check back soon for ways to contact me.
                </p>
                <a
                    href="https://github.com/Captain-Carl-Larc/carlwenzi"
                    className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 hover:text-orange-300 border-orange-500/50
                                transition-colors duration-300 px-8 py-3 rounded-full font-semibold shadow-lg focus:ring-2 focus:ring-orange-500 inline-flex items-center"
                >
                    collaborate
                    <ArrowRight className="ml-2 w-5 h-5" />
                </a>
            </div>
            {/* <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style> */}
        </div>
    );
};

export default Contact;
