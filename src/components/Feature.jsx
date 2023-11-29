import React from 'react';
import './Feature.css';
import dialogflowImage from './img/dialogflow-actions.png';
import whatsappImage from './img/whatsapp.png';
import channelsImage from './img/Canales_botslovers.png';

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
            <img src={dialogflowImage} className="img-fluid" alt="From Support Board website" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>We connect Smart Chatbots Powered by Dialogflow.</h4>
            <p>Speed customer resolutions and automate conversations by engaging one of the most advanced forms of artificial intelligence in the world. This can be done easily in just a few minutes.01</p>
            <p>The bot is a virtual agent that replies autonomously to visitors' messages when it knows the right answer. When it can't access the correct response, a human agent will reply and take control of the conversation.</p>
          </div>
        </div>

        <div className="row feature-item mt-5 pt-5">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={whatsappImage} className="img-fluid" alt="From Support board website" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Sync WhatsApp Business with our AI Assistant.</h4>
            <p>Have your WhatsApp Business account and website communication in one place. Receive messages sent to WhatsApp and reply to them directly in Support Board.</p>
            <p>Instantly receive and respond to messages sent to your WhatsApp Business account in Support Board. The integration supports attachments, photos, videos, emojis, and more.</p>
            <p>Send WhatsApp Business message templates and text message notifications outside of the standard 24-hours service window. Never lose a WhatsApp Business customer again.</p>
          </div>
        </div>

        <div className="row feature-item pt-5 mt-5">
          <div className="col-lg-6 wow fadeInUp">
            <img src={channelsImage} className="img-fluid" alt="From Support Board website" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Automate sales, marketing, and customer support across all channels with a chatbot.</h4>
            <p>The bot is a virtual agent that replies autonomously to visitors' messages when it knows the right answer. When it can't access the correct response, a human agent will reply and take control of the conversation.</p>
            <p>Qualify Leads Without Forms No more static forms are needed to access the user's details. The bot will do all the heavy-lifting instead. With the help of Rich Messages, the bot can ask the user for their email and more in a human, conversational way.</p>
            <p>Sell more with a chatbot. Automate your placing order process, or sales funnel with a chatbot.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
