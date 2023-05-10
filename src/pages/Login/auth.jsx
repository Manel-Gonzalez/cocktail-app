import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Link, Route } from 'wouter'


export default function Authentication() {
    /*     const [email, setEmail] = useState('')
    
        const handleLogin = async (event) => {
            event.preventDefault()
    
            const { error } = await supabase.auth.signInWithOAuth({ email })
    
            if (error) {
                alert(error.error_description || error.message)
            } else {
                alert('Check your email for the login link!')
            }
        } */

    return (
        <div >
            <div >
                <h1 className="header">Loginada</h1>

                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: ThemeSupa,
                        style: {
                            input:
                            {
                                height: '3em',
                                width: '24em',
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
        </div>
    )

}