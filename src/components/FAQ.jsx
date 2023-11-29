// import React from 'react';
// import './FAQ.css';

// const FAQSection = () => {
  
//   return (
//     <section id="faq">
//       <div className="container">
//         <header className="section-header">
//           <h3>Frequently Asked Questions</h3>
//           <p>We foster a work environment where people can communicate openly and encourage feedback to help us learn and grow.</p>
//         </header>

//         <ul id="faq-list" className="wow fadeInUp">
//           <li>
//             <a data-toggle="collapse" className="collapsed" href="#faq1">What is AI automation, and how can it benefit my business? <i className="ion-android-remove"></i></a>
//             <div id="faq1" className="collapse" data-parent="#faq-list">
//               <p>
//                 AI automation employs advanced algorithms to streamline tasks, enhance efficiency, and provide data-driven insights, ultimately improving customer engagement and optimizing operations.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq2" class="collapsed">Which business processes can be automated using AI?
//               <i class="ion-android-remove"></i></a>
//             <div id="faq2" class="collapse" data-parent="#faq-list">
//               <p>

//                 AI can automate various tasks, including customer support, data analysis, lead generation, appointment
//                 scheduling, inventory management, and personalized marketing campaigns.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq3" class="collapsed">What kind of ROI can we expect from AI automation?
//               <i class="ion-android-remove"></i></a>
//             <div id="faq3" class="collapse" data-parent="#faq-list">
//               <p>

//                 ROI varies based on the specific implementation and goals, but AI automation typically leads to
//                 increased productivity, cost savings, revenue growth, and improved customer satisfaction.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq4" class="collapsed">What kind of ongoing support and maintenance do you
//               provide? <i class="ion-android-remove"></i></a>
//             <div id="faq4" class="collapse" data-parent="#faq-list">
//               <p>

//                 We offer continuous monitoring, updates, performance optimization, and responsive support to ensure your
//                 AI automation solution operates seamlessly and evolves with your business.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq5" class="collapsed">How does your agency ensure the AI solution aligns
//               with our business goals? <i class="ion-android-remove"></i></a>
//             <div id="faq5" class="collapse" data-parent="#faq-list">
//               <p>
//                 We collaborate closely with your team to understand your objectives and tailor the AI solution to meet
//                 your specific needs, ensuring alignment and measurable success.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq6" class="collapsed">How secure is AI automation in handling sensitive
//               business data? <i class="ion-android-remove"></i></a>
//             <div id="faq6" class="collapse" data-parent="#faq-list">
//               <p>
//                 Reputable AI automation agencies prioritize data security with encryption, access controls, and
//                 compliance measures to safeguard sensitive information.
//               </p>
//             </div>
//           </li>

          
//         </ul>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;
import React, { useState } from 'react';
import './FAQ.css';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is AI automation, and how can it benefit my business?',
      answer: 'AI automation employs advanced algorithms to streamline tasks, enhance efficiency, and provide data-driven insights, ultimately improving customer engagement and optimizing operations.'
    },
    {
      question: 'Which business processes can be automated using AI?',
      answer: 'AI can automate various tasks, including customer support, data analysis, lead generation, appointment scheduling, inventory management, and personalized marketing campaigns.'
    },
    {
      question: 'What kind of ROI can we expect from AI automation?',
      answer: 'ROI varies based on the specific implementation and goals, but AI automation typically leads to increased productivity, cost savings, revenue growth, and improved customer satisfaction.'
    },
    {
      question: 'What kind of ongoing support and maintenance do you provide?',
      answer: 'We offer continuous monitoring, updates, performance optimization, and responsive support to ensure your AI automation solution operates seamlessly and evolves with your business.'
    },
    {
      question: 'How does your agency ensure the AI solution aligns with our business goals?',
      answer: 'We collaborate closely with your team to understand your objectives and tailor the AI solution to meet your specific needs, ensuring alignment and measurable success.'
    },
    {
      question: 'How secure is AI automation in handling sensitive business data?',
      answer: 'Reputable AI automation agencies prioritize data security with encryption, access controls, and compliance measures to safeguard sensitive information.'
    }
  ];
  

  return (
    <section id="faq">
      <div className="container">
        <header className="section-header">
          <h3>Frequently Asked Questions</h3>
          <p>We foster a work environment where people can communicate openly and encourage feedback to help us learn and grow.</p>
        </header>

        <ul id="faq-list" className="wow fadeInUp">
          {faqData.map((faq, index) => (
            <li key={index}>
              <a
                onClick={() => toggleItem(index)}
                className={openItem === index ? 'active' : ''}
              >
                {faq.question} <i className={`ion-android-${openItem === index ? 'remove' : 'add'}`}></i>
              </a>
              {openItem === index && (
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;

