import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Link, Route } from 'wouter'
import "./auth.css"

export default function Authentication() {

    return (
        <div className="test">
            <h1>Loginada</h1>

            <Auth
                supabaseClient={supabase}
                appearance={{
                    theme: ThemeSupa,
                    style: {
                        input:
                        {
                            height: '3em',
                            borderRadius: '10px',
                            color: '221e1e',
                            background: 'whitesmoke',
                            fontSize: '16px',
                            boxShadow: ' 2px 2px 10px 3px rgba(97, 94, 94, 0.301)',
                            border: '2px solid #d49e8d'
                        }
                    }
                }}
                theme="default"
                providers={["google"]}
            />
        </div>
    )

}