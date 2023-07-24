import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app.jsx";
import Footer from './components/footer.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
const footer=ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <Footer />
);

function Item(title,location,date,contact){
  this.title=title;
  this.location=location;
  this.date=date;
  this.contact=contact;
};

export default Item;