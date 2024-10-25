import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col justify-center items-center p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
                I would love to hear from you! Please reach out through any of the platforms below.
            </p>
            <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">Feel free to send me an email anytime!</p>
                    <a href="mailto:thakareyash74@gmail.com" className="text-indigo-600 hover:underline">
                        thakareyash74@gmail.com
                    </a>
                </div>
                <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile</h3>
                    <p className="text-gray-600">You can reach me via phone.</p>
                    <a href="tel:+919356978166" className="text-indigo-600 hover:underline">
                        +91 9356978166
                    </a>
                </div>
                <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
                    <p className="text-gray-600">Check out my projects on GitHub.</p>
                    <a
                        href="https://github.com/yasthakare93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        github.com/yasthakare93
                    </a>
                </div>
                <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h3>
                    <p className="text-gray-600">Connect with me on LinkedIn.</p>
                    <a
                        href="https://linkedin.com/in/yash-thakare"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        linkedin.com/in/yash-thakare
                    </a>
                </div>
                <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Twitter</h3>
                    <p className="text-gray-600">Follow me for updates.</p>
                    <a
                        href="https://twitter.com/yashthakare93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                    >
                        twitter.com/yashthakare93
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
