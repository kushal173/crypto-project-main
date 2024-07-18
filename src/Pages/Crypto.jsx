import React from 'react'
import CryptoCurrency from '../comp/crytocurrency/CryptoCurrency'
import Footer from './Footer'
const Crypto = () => {

    return (
        <>
            <div style={{ backgroundColor: '#F7F7F8' }}>
                <CryptoCurrency />
            </div>
            <Footer />
        </>
    )
}

export default Crypto