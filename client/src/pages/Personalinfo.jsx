import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userSVG from '../assets/user.svg'; // Import your SVG image
import cardPosSVG from '../assets/card-pos.svg';
import notificationSVG from '../assets/notification.svg';
import exportSVG from '../assets/export.svg';
import { UserContext } from "../../context/userContext";
import axios from "axios";



function Personalinfo() {
      const navigate = useNavigate();
      const {user, setUser} = useContext(UserContext);
  const deleteAccount = () => {
    axios.delete('/delete').then (() => {
               setUser (null)
            }
    )
    navigate("/register")
    
        }


  return (
    <div>
    <div className="w-[1440px] h-[1354px]  bg-white">
    <div className="left-[485px] top-[155px] absolute text-zinc-800 text-5xl font-semibold font-['Akshar'] capitalize tracking-[2.88px]">Personal Information</div>
    <div className="w-[880px] h-[97px] left-[485px] top-[244px] absolute border-b border-zinc-300" />
    <div className="left-[504px] top-[260px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">User Name </div>
    <div className="w-11 left-[1289px] top-[260px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Edit</div>

    <div className="left-[504px] top-[295px] absolute text-justify text-slate-500 text-xl font-light font-['Akshar'] leading-[30px]">{user?.userName}</div>
    <div className="w-[880px] h-[97px] left-[485px] top-[341px] absolute border-b border-zinc-300" />
    <div className="left-[504px] top-[357px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Email Address</div>
    <div className="w-11 left-[1289px] top-[357px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Edit</div>
    <div className="left-[504px] top-[392px] absolute text-justify text-slate-500 text-xl font-light font-['Akshar'] leading-[30px]">{user?.email}</div>
    <div className="w-[880px] h-[97px] left-[485px] top-[438px] absolute border-b border-zinc-300" /></div>
        <div className="w-[362px] h-[523px] left-[75px] top-[131px] absolute ">
    {/* <div className="left-[504px] top-[454px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Phone Number</div>
    <div className="w-11 left-[1289px] top-[454px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Edit</div>
    <div className="left-[504px] top-[489px] absolute text-justify text-slate-500 text-xl font-light font-['Akshar'] leading-[30px]">Not Provided</div>
    <div className="w-[880px] h-[97px] left-[485px] top-[535px] absolute border-b border-zinc-300" /> */}
    {/* <div className="left-[504px] top-[551px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Date Of Birth</div>
    <div className="w-11 left-[1289px] top-[551px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Edit</div>
    <div className="left-[504px] top-[586px] absolute text-justify text-slate-500 text-xl font-light font-['Akshar'] leading-[30px]">Not Provided</div>
    <div className="w-[880px] h-[97px] left-[485px] top-[632px] absolute border-b border-zinc-300" /> */}
    {/* <div className="left-[504px] top-[648px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Home Town</div>
    <div className="w-11 left-[1289px] top-[648px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Edit</div>
    <div className="left-[504px] top-[683px] absolute text-justify text-slate-500 text-xl font-light font-['Akshar'] leading-[30px]">Not Provided</div>
    <div className="w-[880px] h-[97px] left-[485px] top-[729px] absolute border-b border-zinc-300" /> */}
    {/* <div className="left-[504px] top-[745px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Address</div>
    <div className="w-11 left-[1289px] top-[745px] absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Edit</div>
    <div className="left-[504px] top-[780px] absolute text-justify text-slate-500 text-xl font-light font-['Akshar'] leading-[30px]">Not Provided</div> */}

        <div className="w-[362px] h-[523px] left-0 top-0 absolute bg-white rounded-md shadow" />
        <div className="w-[100px] h-[100px] left-[131px] top-[43px] absolute bg-[#C7C900] rounded-full flex justify-center items-center">
    <div className="text-center text-white text-[32px] font-medium font-['Akshar'] tracking-widest" style={{ lineHeight: '100px', margin: '0' }}>User</div>
        </div>
        <div className="w-[276px] h-[75px] left-[43px] top-[187px] absolute">
    <div className="w-[276px] h-[75px] left-0 top-0 absolute border-b border-zinc-300" />
    <div className="w-6 h-6 left-[6px] top-[26px] absolute justify-center items-center inline-flex">
        
            <img src={userSVG} alt="User" className="w-6 h-6 absolute justify-center inline-flex" style={{ marginLeft: '-5px !important' }} />
        
    </div>
    
    <button className="w-[206px] h-[75px] left-[48px] top-0 absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Personal Information</button>
    
    </div>
        <form>
        <div className="w-[276px] h-[75px] left-[43px] top-[262px] absolute">
            <div className="w-[276px] h-[75px] left-0 top-0 absolute border-b border-zinc-300" />
            <div className="w-6 h-6 left-[6px] top-[26px] absolute justify-center items-center inline-flex">
            
            <img src={cardPosSVG} alt="Card Pos" className="w-6 h-6 absolute justify-center inline-flex" style={{ marginLeft: '-5px !important' }} />
            </div>

            <button className="w-[206px] h-[75px] left-[48px] top-0 absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Reset Password</button>
            <div className="w-6 h-6 left-[6px] top-[26px] absolute justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
        </div>
        <div className="w-[276px] h-[75px] left-[43px] top-[337px] absolute">
            <div className="w-[276px] h-[75px] left-0 top-0 absolute border-b border-zinc-300" />
            <div className="w-6 h-6 left-[6px] top-[26px] absolute justify-center items-center inline-flex">

            <img src={notificationSVG} alt="Notification" className="w-6 h-6 absolute justify-center inline-flex" style={{ marginLeft: '-5px !important' }} />
            </div>

            <button onClick={deleteAccount}className="w-52 h-[75px] left-[48px] top-0 absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Delete my account</button>
            <div className="w-6 h-6 left-[6px] top-[26px] absolute justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
            </div>
        <div className="w-[250px] h-[81px] left-[49px] top-[412px] absolute">
        <div className="w-6 h-6 left-0 top-[29px] absolute justify-center items-center inline-flex">

        <img src={exportSVG} alt="Export" className="w-6 h-6 absolute justify-center inline-flex" style={{ marginLeft: '-5px !important' }} />
        </div>

            <button className="w-52 h-[81px] left-[42px] top-0 absolute text-justify text-zinc-800 text-xl font-light font-['Akshar'] leading-[30px]">Log Out</button>
            
        </div>
        </form>
    </div>
</div>
  );
}

export default Personalinfo;