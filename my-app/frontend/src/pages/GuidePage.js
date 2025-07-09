import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuidePage.css";

const BeginnersGuide = () => {
    const navigate = useNavigate();

    return (
        <div className="guide-container">
            <div className="guide-header">
                <span className="back" onClick={() => navigate(-1)}>&lt;</span>
                <span className="title">Beginner's Guide</span>
                <span className="placeholder" />
            </div>

            <div className="guide-steps">
                <ul>
                    <li>1. How to Register</li>
                    <li>- Fill Your Phone Number</li>
                    <li>- Set Your Own Password (8 letters)</li>
                    <li>- Confirm The Password</li>
                    <li>- Fill Your Recommendation Code</li>
                    <li>- Click I Have Read And Agree</li>
                    <li>- Click Register</li>
                </ul>
            </div>

            <div className="guide-image">
                <img src="/img/guidence.png" alt="Guide Steps" />
            </div>

            {/* Section 2 - How to Bet */}
            <div className="guide-steps">
                <ul>
                    <li>2. How To Betting WinGo</li>
                    <li>- Click start game then choose 1 minute, 3 minute, 5 minute or 10 minute.</li>
                    <li>- Green: if the result shows 1, 3, 7, 9</li>
                    <li>- Red: if the result shows 2, 4, 6, 8</li>
                    <li>- Violet: if the result shows 0 or 5</li>
                    <li>- Small: if the result shows 0, 1, 2, 3, 4</li>
                    <li>- Big: if the result shows 5, 6, 7, 8, 9</li>
                    <li>- This company is not allowed to place illegal betting</li>
                    <li>- Exp: Betting (Big and Small together) or (Red and Green together) at the same time.</li>
                </ul>
            </div>

            <div className="guide-image">
                <img src="/img/g-2.png" alt="How to Bet" />
            </div>

            <div className="guide-steps">
                <ul>
                    <li>3. How to recharge</li>
                    <li>- Click Wallet Icon</li>
                    <li>- Click The Recharge Button</li>
                    <li>
                        - We have five ways to make a recharge: <b>BANK TRANSFER</b>, <b>E-WALLET</b>, ...
                    </li>
                </ul>
            </div>

            <div className="guide-image">
                <img src="/img/g-3.png" alt="Recharge Guide" />

            </div>
            <div className="guide-image">
                <img src="/img/g-4.png" alt="Recharge Guide" />

            </div>
        
            <div className="guide-steps">
                <ul>
                    <li>4. How to Withdraw</li>
                    <li>- Click Wallet Icon, Click Withdraw Button.</li>
                    <li>- Enter withdraw amount</li>
                    <li>- Make Sure Your Total Bet Until Zero</li>
                    <li>- Select Your Bank Account Or Add Your Bank Account</li>
                    <li>- Input Amount You Want To Withdraw</li>
                    <li>- Input Your Login Password</li>
                </ul>
            </div>

            <div className="guide-image">
                <img src="/img/g-5.png" alt="Withdraw Guide" />
            </div>
            <div className="guide-image">
                <img src="/img/g-6.png" alt="Withdraw Guide" />
            </div>
           
            <div className="guide-steps">
                <ul>
                    <li>5. Orders</li>
                    <li>- When The Betting Complete You Can Click My Game</li>
                    <li>- See Your Bet Record</li>
                    <li>- You Can Check The Chart Trend</li>
                </ul>
            </div>

            <div className="guide-image">
                <img src="/img/g-7.png" alt="Orders Guide" />
            </div>
           
            <div className="guide-steps">
                <ul>
                    <li>6. Promotion</li>
                    <li>- If you have a downline or referral member use your own link to register and if they make a recharge you can claim a reward. The agent will get a minimum commission of 0.6 % (level 1) and 0.18% (level 2) from each transaction that is done by the referral (Added every day at 00:30 AM.) If the accumulated transactions of the Referral reach a certain target, the agent will get an additional bonus with the following rebates.
                    </li>
                    <li>- You Can Click The Sharing Invitation Poster To See The Barcode</li>
                </ul>
            </div>

            <div className="guide-image">
                <img src="/img/g-8.png" alt="Orders Guide" />
            </div>
             <div className="guide-image">
                <img src="/img/g-9.png" alt="Orders Guide" />
            </div>
 
            <div className="guide-steps">
                <ul>
                    <li>7. Account security</li>
                    <li> Go To My Icon, Click Setting Icon.
                    </li>
                  <li>- Click Login Password.</li>
                  <li>- Re-Enter Your Login Password.</li>
                  <li>- Enter Strongest New Password, and Confirm Your Password.</li>
                  <li>- Click Save Changes.</li>
                </ul>

            </div>

            <div className="guide-image">
                <img src="/img/g-10.png" alt="Orders Guide" />
            </div>
             <div className="guide-image">
                <img src="/img/g-11.png" alt="Orders Guide" />
            </div>
           
            <div className="guide-steps">
                <ul>
                    <li>8. Forgot Password</li>
                    <li>- If You Forget Your Login Password, Please Contact Customer Service Immediately. </li>
                </ul>

            </div>

            <div className="guide-image">
                <img src="/img/g-12.png" alt="Orders Guide" />
            </div>
               
            <div className="guide-steps">
                <ul>
                    <li>9. App Download</li>
                    <li>Click top right corner download icon, your can download the app and easy to use </li>
                </ul>

            </div>

            <div className="guide-image">
                <img src="/img/g-13.png" alt="Orders Guide" />
            </div>
              
            <div className="guide-steps">
                <ul>
                    <li>10. About</li>
                    <li>Click About for more details regarding Privacy Policy and Risk Disclosure Agreement. </li>
                </ul>

            </div>

            <div className="guide-image">
                <img src="/img/g-14.png" alt="Orders Guide" />
            </div>
             <div className="guide-image">
                <img src="/img/g-15.png" alt="Orders Guide" />
            </div>
           
            <div className="guide-steps">
                <ul>
                    <li>11. Gift</li>
                    <li>- Click Gift Exchange </li>
                    <li>- Input The Unique Code To Redemption Code The Money</li>
                    <li>- Click Receive</li>
                </ul>

            </div>

            <div className="guide-image">
                <img src="/img/g-16.png" alt="Orders Guide" />
            </div>
             <div className="guide-image">
                <img src="/img/g-17.png" alt="Orders Guide" />
            </div>
        </div>
    );
};

export default BeginnersGuide;
