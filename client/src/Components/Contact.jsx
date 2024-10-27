import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center p-6">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-400 mb-8 text-center max-w-lg">
                I would love to hear from you! Feel free to reach out through any of the platforms below.
            </p>

            <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">Feel free to send me an email anytime!</p>
                    <a
                        href="mailto:thakareyash74@gmail.com"
                        className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block transition-colors duration-300"
                    >
                        thakareyash74@gmail.com
                    </a>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-2">Mobile</h3>
                    <p className="text-gray-400">You can reach me via phone.</p>
                    <a
                        href="tel:+919356978166"
                        className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block transition-colors duration-300"
                    >
                        +91 9356978166
                    </a>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                    <p className="text-gray-400">Check out my projects on GitHub.</p>
                    <a
                        href="https://github.com/yashthakare93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block transition-colors duration-300"
                    >
                        github.com/yashthakare93
                    </a>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-gray-400">Connect with me on LinkedIn.</p>
                    <a
                        href="https://www.linkedin.com/in/yash-thakare01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:text-indigo-400 mt-2 inline-block transition-colors duration-300"
                    >
                        linkedin.com/in/yash-thakare01
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Contact;
