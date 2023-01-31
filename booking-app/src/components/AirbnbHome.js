import  './AirbnbHome.css';
import BookPage from './Book';
import { useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCNa-ggZ2_rErdJoEQGciZMBrgLCvyQnuI",

    authDomain: "lift-intl-fb2cd.firebaseapp.com",

    databaseURL: "https://lift-intl-fb2cd-default-rtdb.firebaseio.com",

    projectId: "lift-intl-fb2cd",

    storageBucket: "lift-intl-fb2cd.appspot.com",

    messagingSenderId: "996609355856",

    appId: "1:996609355856:web:ad55641b74bff24e69e155",

    measurementId: "G-Q2H3QS0SBY"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Home = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        
        const phone_number = document.getElementById('phone-number');
        const amount = document.getElementById('amount');


        if(!book_date.value || !book_time.value || !phone_number.value || !amount.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'data/'), {
            bookingdate: book_date.value,
            bookingtime: book_time.value,
            phone_number: phone_number.value,
            amount: amount.value,            
            });
        }
            alert('Your booking has been made');
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }
  return (
      <>
        <BookPage />
        <div className="container">
      <div className="content">
        <div className="text">Book Now</div>
        <div className="form2">
          <div className="txt">Date you would like to Take the Trip</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="txt">Whats your best time</div>

            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="txt">Phone Contact</div>
            <div className="inputData">
            <input type="tel" name="" id="phone-number" />
            <div className="txt">How Many</div>

            <div className="inputData">
            <input type="number" name="" id="amount" />
            </div>
            </div>

            <div className="txt">Let us know how you'd like to customize your experience!</div>

            <div className="inputData" >
            <div className="message-box" >
            <textarea className="message" placeholder="Message"></textarea>
            </div>
            </div>

            <div className="txt">You will receive email confirmation once booked</div>
            <div className="book">
                <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
  );
};
export default Home;