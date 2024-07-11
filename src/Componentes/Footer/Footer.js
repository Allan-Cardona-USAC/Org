import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='#'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='#'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='#'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <div className=' logo '>
        <img src='/img/Logo.png' alt='org' />
        <h6>© Allan Cardona</h6>
        </div>
        <div className='redes'> 
        <strong>2024</strong>
        </div>
    </footer>
}

export default Footer