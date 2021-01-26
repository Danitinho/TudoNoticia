import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className = 'footer-container'>
            <section className = 'footer-subscription'>
                <p className = 'footer-subscription-heading'>
                    Portal Tudo Noticias, ative as notificações para receber noticias em tempo real
                </p>
                <p className = 'footer-subscription-text'>
                    voce pode desativar a qualquer momento
                </p>
                <div className = 'input-areas'>
                    <form>
                        <input
                            type='email'
                            name= 'email'
                            placeholder= 'your email'
                            className = 'footer-input'
                        />
                        <Button
                            buttonStyle = 'btn--outline'>
                                Inscrever-se
                            </Button>
                    </form>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
