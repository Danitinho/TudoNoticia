import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className = 'cards'>
            <h1> Hoje</h1>
            <div className = 'cards__container'>
                <div className = 'cards__wrapper'>
                    <ul className = 'cards__items'>
                        <CardItem 
                        src = 'https://www.cartacapital.com.br/wp-content/uploads/2019/03/mulheres-2.jpg'
                        text = "Premiê italiano renuncia, presidente iniciará consultas ROMA (Reuters) - O primeiro-ministro da Itália, Giuseppe Conte, entregou sua renúncia ao presidente do país..."
                        label = 'Futebol'
                        path = '/esportes'
                        />
                        <CardItem 
                        src = 'https://observatorio3setor.org.br/wp-content/uploads/2020/06/Lewis-Hamiltonn-780x470-1.jpg'
                        text = "Premiê italiano renuncia, presidente iniciará consultas ROMA (Reuters) - O primeiro-ministro da Itália, Giuseppe Conte, entregou sua renúncia ao presidente do país..."
                        label = 'Futebol'
                        path = '/esportes'
                        />
                    </ul>
                    <ul className = 'cards__items'>
                        <CardItem 
                        src = 'https://www.cartacapital.com.br/wp-content/uploads/2019/03/mulheres-2.jpg'
                        text = "Premiê italiano renuncia, presidente iniciará consultas ROMA (Reuters) - O primeiro-ministro da Itália, Giuseppe Conte, entregou sua renúncia ao presidente do país..."
                        label = 'Futebol'
                        path = '/esportes'
                        />
                        <CardItem 
                        src = 'https://observatorio3setor.org.br/wp-content/uploads/2020/06/Lewis-Hamiltonn-780x470-1.jpg'
                        text = "Premiê italiano renuncia, presidente iniciará consultas ROMA (Reuters) - O primeiro-ministro da Itália, Giuseppe Conte, entregou sua renúncia ao presidente do país..."
                        label = 'Futebol'
                        path = '/esportes'
                        />
                        <CardItem 
                        src = 'https://observatorio3setor.org.br/wp-content/uploads/2020/06/Lewis-Hamiltonn-780x470-1.jpg'
                        text = "Premiê italiano renuncia, presidente iniciará consultas ROMA (Reuters) - O primeiro-ministro da Itália, Giuseppe Conte, entregou sua renúncia ao presidente do país..."
                        label = 'Futebol'
                        path = '/esportes'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
