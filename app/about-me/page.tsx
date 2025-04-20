import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react'; // Using a more suitable icon

interface AboutProps { }

const About: FC<AboutProps> = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl text-center space-y-6">
                <div className="w-16 h-16 mx-auto text-orange-500 mb-4 flex items-center justify-center">
                    {/* Rocket Icon from Lucide */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-rocket w-16 h-16"
                    >
                        <path d="M3.61 15.34a8 8 0 0 0 2.36 10.66A9 9 0 0 0 17.5 21.5a8 8 0 0 0 10.66-2.36A7 7 0 0 0 23 12a7 7 0 0 0-10.66-10.66A8 8 0 0 0 3.61 15.34z" />
                        <path d="M15 9v5" />
                        <path d="M9 15h5" />
                        <path d="M16.82 16.82a4 4 0 1 0-5.66-5.66" />
                    </svg>
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                    Coming Soon
                </h1>
                <p className="text-gray-400 text-lg sm:text-xl">
                    I am working hard to bring you an amazing About page.  Stay tuned for updates!
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
        </div>
    );
};

export default About;
