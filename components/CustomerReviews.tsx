import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Sarah M.",
        date: "2 months ago",
        content: "Absolutely the best lash experience I've ever had! The studio is so chic and relaxing. My lashes have never looked better – they look so natural yet full. Highly recommend!",
        rating: 5
    },
    {
        name: "Emily R.",
        date: "1 month ago",
        content: "I'm obsessed with my new lashes! The technician was incredibly gentle and professional. The atmosphere is pure luxury. I've already booked my refill!",
        rating: 5
    },
    {
        name: "Jessica T.",
        date: "3 weeks ago",
        content: "Finally found a place that understands exactly what I want. They took the time to consult with me and the results are perfect. Best beauty investment I've made.",
        rating: 5
    }
];

const CustomerReviews: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 md:px-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-pink-600 text-[12px] uppercase tracking-widest font-bold block mb-4">Client Love</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        What our clients <span className="text-pink-500 italic font-light">are saying</span>
                    </h2>
                    <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We pride ourselves on providing an exceptional experience. Here's what some of our lovely clients have to share.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] flex-grow-0">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ReviewCard = ({ review }: { review: any }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-100 h-full transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-pink-200 group">
        <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-pink-400 text-pink-400" />
            ))}
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed italic relative">
            <span className="text-4xl text-pink-200 absolute -top-4 -left-2 font-serif">"</span>
            {review.content}
        </p>
        <div className="flex items-center gap-3 mt-auto border-t border-pink-50 pt-4">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
                {review.name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                <p className="text-xs text-gray-400">{review.date}</p>
            </div>
            <div className="ml-auto">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4 opacity-50" />
            </div>
        </div>
    </div>
);

export default CustomerReviews;
