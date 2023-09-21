import { useContext, useEffect, useState } from "react";
import "../style/Admin.css";
import { AuthContext } from "../components/HooksFile/AuthContextProvider";


const Admin = () => {
    const { user, createUserr, userLogin, logInOut } = useContext(AuthContext);
    console.log(user)



    const adminSubmitFun = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserr(email, password)
            .then(() => {
                e.target.reset()
            })
    };

    const loginFun = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(() => {
                e.target.reset()
            })

    };

    return (
        <div className="main-Admin-div relative">

            <div className="animation-div overflow-hidden">
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">

                <div className="flex items-center justify-center gap-10">
                    <div>
                        <form onSubmit={adminSubmitFun}>
                            <p className="text-white font-mono mb-2">If You Are In First Time Please Register...</p>
                            <input required name="email" type="email" placeholder="email" />
                            <input required name="password" type="password" placeholder="Password" />
                            <input className=" hover:cursor-pointer " type="submit" value="REGISTER" />
                        </form>
                    </div>

                    <div>
                        <form onSubmit={loginFun}>
                            <p className="text-white font-mono mb-2">If You Have In Account Please Login...</p>
                            <input required name="email" type="email" placeholder="email" />
                            <input required name="password" type="password" placeholder="Password" />
                            <input className=" hover:cursor-pointer" type="submit" value="LOGIN" />
                        </form>
                    </div>
                </div>

                <div>
                    {
                        user && <button onClick={() => logInOut()} className="mt-4">
                            L O G O U T
                            <div id="clip">
                                <div id="leftTop" class="corner"></div>
                                <div id="rightBottom" class="corner"></div>
                                <div id="rightTop" class="corner"></div>
                                <div id="leftBottom" class="corner"></div>
                            </div>
                            <span id="rightArrow" class="arrow"></span>
                            <span id="leftArrow" class="arrow"></span>
                        </button>

                        // user && <button className="logOutButton" onClick={() => logInOut()} >LogOut</button>
                    }
                </div>

            </div>






        </div>
    );
};

export default Admin;