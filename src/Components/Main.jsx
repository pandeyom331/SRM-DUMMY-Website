import React from 'react'
import "./Main.css";
import UserImg from "./../IMG/user.png";
import Stu from "./../IMG/stu.jpg";
import Capture from "./../IMG/Capture.PNG";
import { HiOutlineDesktopComputer, HiChevronRight } from "react-icons/hi";


function Main() {
    return (
        <div className='Main'>
            <div className="Nav">
                <div className="head">Academia - Academic W...</div>
                <ul>
                    <li><HiOutlineDesktopComputer className='icon' />CIRCULAR<HiChevronRight className='icon1' /></li>
                    <li id="true"><HiOutlineDesktopComputer className='icon' /> WELCOME </li>
                    <li><HiOutlineDesktopComputer className='icon' />Student Profile</li>
                    <li><HiOutlineDesktopComputer className='icon' />Academic Reports <HiChevronRight className='icon1' /></li>
                    <li><HiOutlineDesktopComputer className='icon' />Student <HiChevronRight className='icon1' /></li>
                    <li><HiOutlineDesktopComputer className='icon' />Unified Time Table <HiChevronRight className='icon1' /></li>
                    <li><HiOutlineDesktopComputer className='icon' />Course Feedback</li>
                    <li><HiOutlineDesktopComputer className='icon' />My Time Table & Attendance <HiChevronRight className='icon1' /></li>
                    <li><HiOutlineDesktopComputer className='icon' />Student Service Requests (... <HiChevronRight className='icon1' /></li>
                </ul>
            </div>
            <div className="Header">
                <img src={UserImg} alt="User" />
                <span>op5051</span>
            </div>
            <div className='content1'>
                <span className='date'>
                    <strong>
                        <font color="yellow">
                            Date:27-Feb-22
                        </font>
                    </strong>

                    <strong>
                        <font color="yellow">
                            Day Order:No Day Order
                        </font>
                    </strong>
                </span>
                <p style={{ color: "red", padding: "5px 0px" }}>Early symptoms of Covid-19 - <font color="blue">Sore throat, dry cough, fever, cold, loss of smell, loss of taste etc. If any of the above symptoms are noticed contact emergency helpline.</font></p>
                <p style={{ color: "Blue", padding: "5px 0px" }}>Emergency Contact :- <font style={{ color: "white", backgroundColor: "DodgerBlue" }}><strong>044 - 2 7 4 5 2 7 2 7 </strong></font></p>
                <p style={{ color: "Blue", padding: "5px 0px" }}>Mobile: :- <font style={{ color: "white", backgroundColor: "DodgerBlue" }}><strong>9 7 8 9 8 8 8 4 5 3 / 9 9 4 0 0 9 6 0 1 2</strong></font></p>

                <img style={{ margin: "60px 250px", width: "25%" }} src={Stu} alt="Stu" />
                <p class="text">SRM Academia is the Official Student/Parent Portal of SRM's Faculty of Engineering and Technology which aims at providing a better experience to the students to access the academic web services. The portal is a gateway to your academic information such as attendance, internal marks, timetable, etc.</p>
                <img style={{ margin: "60px 250px", width: "25%" }} src={Capture} alt="Stu" />
            </div>
        </div>
    )
}

export default Main