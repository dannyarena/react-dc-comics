import Alert from './Alert';

function BlueBar () {
   
    return (
         <>
         <Alert></Alert>
        <section className="blue-bar">
            <div className="bar-item">
                <img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" />
                <span>DIGITAL COMICS</span>
            </div>
            <div className="bar-item">
                <img src="/img/buy-comics-merchandise.png" alt="DC Merchandise" />
                <span>DC MERCHANDISE</span>
            </div>
            <div className="bar-item">
                <img src="/img/buy-comics-shop-locator.png" alt="Subscription" />
                <span>SUBSCRIPTION</span>
            </div>
            <div className="bar-item">
                <img src="/img/buy-comics-subscriptions.png" alt="Comic Shop Locator" />
                <span>COMIC SHOP LOCATOR</span>
            </div>
            <div className="bar-item">
                <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
                <span>DC POWER VISA</span>
            </div>
        </section>
        </>
    );
    
}

export default BlueBar;