import React, { use } from "react";

export default function DashboardLayout({children, users, notifications, login}: {
    children: Readonly<React.ReactNode>, 
    users: React.ReactNode, 
    notifications: React.ReactNode, 
    login: React.ReactNode
}) {
    const isLoggedIn = true
    return isLoggedIn ? (
        <>
            <h1>We have 3 slots children, users and notifcation</h1>
            <div>{children}</div>
            <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                <div style={{backgroundColor:"yellow", padding:"40px"}}>{users}</div>
                <div style={{backgroundColor:"yellow", padding:"40px"}}>{notifications}</div>
            </div>
        </>
    ): (
        <div>{login}</div>
    )
}