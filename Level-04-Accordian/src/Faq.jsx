// import React, { useState } from "react";

// const faqs = [
//     {
//         question: "How do we use your images?",
//         answer:
//             "Your photos will be used solely to generate professional profile pictures and not for any other purpose.",
//     },
//     {
//         question: "What happens to my photos after processing?",
//         answer:
//             "After your application photos have been generated, your original photos will be deleted from our servers to ensure your privacy.",
//     },
//     {
//         question: "What type of photos should I upload?",
//         answer:
//             "For best results, please upload clear selfies with good lighting and a visible face. Avoid blurry or overly dark images.",
//     },
//     {
//         question: "Which photo formats are supported?",
//         answer: "We support the most common formats such as JPG, PNG and GIF.",
//     },
//     {
//         question: "Can I use my generated profile pictures everywhere?",
//         answer:
//             "Yes, you can use the application photos we create for personal and business purposes as long as you follow our terms of use.",
//     },
//     {
//         question: "How long does the process take?",
//         answer:
//             "Our goal is to provide you with a professional profile picture within 90 minutes of uploading.",
//     },
//     {
//         question: "What is your refund policy?",
//         answer:
//             "If you are not satisfied with your generated profile picture, please contact our customer service to discuss refund options.",
//     },
//     {
//         question:
//             "I'm interested in a partnership for my company. What do you offer for corporate clients?",
//         answer:
//             "Our goal is to develop a comprehensive dashboard specifically for corporate clients. This dashboard allows companies to add employees and generate professional business photos in large quantities. If you are already interested in working with us, please contact us directly via email at info@meinprofilbild.de.",
//     },
// ];

// const Faq = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toogleFaq = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="  bg-blue-950 h-[100vh] text-white">
//             <div className="w-[85%] mx-auto p-1.5">
//                 <h1 className="text-center mb-5 text-4xl font-semibold">Accordian </h1>

//                 <div>
//                     {faqs.map((question, index) => (
//                         <div key={index} className=" bg-blue-900 mb-3 p-2.5 ">
//                             <button
//                                 onClick={() => toogleFaq(index)}
//                                 className=" w-full px-4 py-2 text-start cursor-pointer hover:bg-blue-300 hover:text-black transition-all duration-300 ease-in-out"
//                             >
//                                 {question.question}
//                             </button>
//                             {openIndex === index && (
//                                 <div className=" p-3 text-center bg-blue-300 text-black  ">
//                                     <p>{question.answer}</p>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Faq;
