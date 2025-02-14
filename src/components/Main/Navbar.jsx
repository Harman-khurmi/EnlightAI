import React from "react";
import { useTheme } from "../SideBar/ThemeContext";
import { Link } from "react-router";
import { assets } from "../../assets/assets";
import "../../index.css";
// import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext";

const Navbar = () => {
    const { theme } = useTheme();
    // const {user, loginWithRedirect,isAuthenticated} = useAuth0();
    // console.log("user details", user);
    const { isAuthenticated, user, logout,loginWithRedirect } = useAuth();
    return (
        <>
            <nav
                className={`overflow-y-clip flex items-center justify-between p-8 ${theme === "dark" ? "dark" : "light"
                    } h-18 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300`}
            >
                {/* {console.log(user.picture)} */}
                {/* {console.log(picture)} */}
                <Link to="/">
                    <img
                        className="h-8"
                        src={`${theme === "dark" ? assets.logoLight : assets.logoDark}`}
                        alt=""
                    />
                </Link>

                <div className="flex gap-4 items-center">
                    {isAuthenticated ? (
                        <div className="flex gap-6 justify-center items-center">
                            <img
                                className="size-8 rounded-full"
                                src={user.picture}
                                alt=""
                            />
                            <h2>{user.name}</h2>
                            <Link to="/">
                                <button
                                    onClick={() =>
                                        logout({ logoutParams: { returnTo: window.location.origin } })
                                    }
                                    className={`flex items-center justify-center rounded-2xl px-6 ${theme === "dark" ? "dark" : "light"
                                        } h-11 cursor-pointer bg-[#4BA3D8] hover:bg-[#5DC1FD] dark:bg-[#1E4D7B] dark:hover:bg-[#2C66A0] text-zinc-50 font-medium dark:text-zinc-50`}
                                >
                                    Logout
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/">
                                <button
                                    onClick={() => loginWithRedirect()}
                                    className={`flex items-center justify-center rounded-2xl px-6 ${theme === "dark" ? "dark" : "light"
                                        } h-11 cursor-pointer bg-[#4BA3D8] hover:bg-[#5DC1FD] dark:bg-[#1E4D7B] dark:hover:bg-[#2C66A0] text-zinc-50 font-medium dark:text-zinc-50`}
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>


            </nav >
        </>
    );
};

export default Navbar;
