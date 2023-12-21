import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import * as XLSX from 'xlsx';
import Header from "./Header";

const stripePromise = loadStripe("pk_test_51Nmp0aDBoEL4nVgEnrD0xLQwFXk9aT9KGYs9OryMQ2xlzkH5iSn5TW0IQzvL6bfGw6yhnPZh6fHYI0t77wvt2jiy003GvCPNxm");

//Test Mode
// const stripePromise = loadStripe("pk_test_51NlUc8H8UpWaisRsvYmEJl6uyJWmzRFINvGclxMvZAF1lbfUqU4Vxp8VpDgIsLXcz4JbSZhA8ZdEj7z7Qv8nx2dR00U9CPna2e");

//Real Use
// const stripePromise = loadStripe("pk_live_51NlUc8H8UpWaisRstn5EhQBorzvy4vIqWC4OGdWGYki2Chv3uYERgc6Yogx4D7bcTzJaZqspjgpcu5xSYM5POFpF003miUCpzF");
const API_URL = "http://localhost:4242/";
// const API_URL = "http://talysis15.co.uk:4242/";

const blocks:any[] = [];
for (let i = 0; i < 55 * 105; i++) { // Total blocks: 5775
    blocks.push(<div className="block" id={String(i + 1)} />);
}

const Buy = () => {
    const [selectedBlocks, setSelectedBlocks] = useState(0);
    const [availableBlocks, setAvailableBlocks] = useState(5775);
    const [reservedBlocks, setReservedBlocks] = useState(0);
    const [soldBlocks, setSoldBlocks] = useState(0);
    const [checkSoldBlocks, setCheckSoldBlocks] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const [blockDivs, setBlockDivs] = useState();
    const [buySuccess, setBuySuccess] = useState('false');
    

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const success = urlParams.get('success');
        if(success !== null )
            setBuySuccess(success);

        const init = async() => {
            const response = await fetch(API_URL+"create-checkout-session", {
                method: "GET",
            })
            .then((res) => res.json())
            .then(data => {
                let soldBlockIDs:string[] = []
                for(let i = 0; i<data.length; i++){
                    soldBlockIDs =[...soldBlockIDs, ...data[i]?.blocks];
                }

                for(let i = 0; i<soldBlockIDs.length; i++){
                    const sblock = document.getElementById(soldBlockIDs[i]);
                    sblock?.classList.add('sold');
                }
                updateSummary();
                // console.log('data', soldBlockIDs);
                setHistoryData(data);
            })
            .catch((error) => {
                console.log('error', error);
            });
            // console.log('res', response);
        }
        init();

        const handleClick = (event:any) => {
            if (event.target.classList.contains('block')) {
                if (!event.target.classList.contains('sold')) {
                    event.target.classList.toggle('selected');
                    const selectedBlocks1 = document.querySelectorAll('.block.selected').length;
                    const totalCost = selectedBlocks1 * 2;
                    setSelectedBlocks(selectedBlocks1);
                    updateSummary();
                }
            }
        };
    
        const grid = document.getElementById('land-grid');
        grid?.addEventListener('click', handleClick);
    
        return () => {
            grid?.removeEventListener('click', handleClick);
        };
    }, []);

    const updateSummary = () => {
        const availableBlocks1 = document.querySelectorAll('.block:not(.selected):not(.sold)').length;
        const reservedBlocks1 = document.querySelectorAll('.block.selected').length;
        const soldBlocks1 = document.querySelectorAll('.block.sold').length;

        setAvailableBlocks(availableBlocks1);
        setReservedBlocks(reservedBlocks1);
        setSoldBlocks(soldBlocks1);
    }


    const handleCheckout = async () => {
        const blockIDs = []
        const selectedDivs = document.querySelectorAll('.block.selected');

        for (let i = 0; i < selectedDivs.length; i++) {
            const divId = selectedDivs[i].id;
            blockIDs.push(divId);
            // console.log(divId);
        }
        // Get Stripe.js instance
        const stripe = await stripePromise;
        // Call your backend to create the Checkout Session
        const response = await fetch(API_URL+"create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ blocks:blockIDs }),
        });

        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe?.redirectToCheckout({
            sessionId: session.id,
        }).then((res) => console.log('res', res))
        .then((error) => console.log('error', error));
        // if (result?.error) {
        //     // If `redirectToCheckout` fails due to a browser or network
        //     // error, display the localized error message to your customer
        //     // using `result.error.message`.
        // }
        // else{
        //     console.log('sessionId', session);
        // }
    };

    // const handleDownload = async () => {
    //     let persons = []
    //     let k = 0;
    //     for(let i = historyData?.length-1; i>=0; i--){
    //         let person = "";
    //         k++;
    //         const id = k;
    //         const blocks = historyData[i]['blocks'];
    //         const date = historyData[i]['date'];
    //         person = '{"id":"'+id+'", "blocks":"'+blocks+'", "date":"'+date+'"}';
    //         persons.push(JSON.parse(person));
    //     }
    //     const worksheet = XLSX.utils.json_to_sheet(JSON.parse(JSON.stringify(persons)));
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //     //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //     //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    //     XLSX.writeFile(workbook, "DataSheet.xlsx");
    // }

    // const selectedDivs = document.querySelectorAll('.selected');

    // for (let i = 0; i < selectedDivs.length; i++) {
    //     const divId = selectedDivs[i].id;
    //     console.log(divId);
    // }

    return (
        <>
            {
                buySuccess != "true" ?
                    <>
                        <header style={{ padding: 0, position: 'relative', backgroundColor: 'white', width: '100%' }}>
                            <img src="2.png" alt="back" style={{ width: '100%' }} />
                            <img alt="Talysis Logo" src="logo1.png" style={{ width: '20vw', position: 'absolute', top: '20px', left: '20px' }} />
                            <h1 className="" style={{ position: 'absolute', top: '6vw', color: 'white', right: '5vw', textShadow: '2px 2px 4px #000000', fontSize: '3.5vw' }}>Where there's <span style={{ color: '#A0522D' }}>Muck</span>, there's <span style={{ color: '#FFD700' }}>Money!</span></h1>
                            <h3 style={{ position: 'absolute', top: '12.5vw', right: '10vw', textShadow: '2px 2px 4px #000000', fontSize: '2.5vw', color: '#DAA520' }}>Talysis Fundraising Event - Win <span style={{ fontSize: '2.6vw', color: '#FFD700', textDecoration: 'underline' }}>£2,000</span></h3>
                        </header>

                        <h2 style={{ fontSize: '45px', textAlign: 'center', margin: '0px 35px 10px', zIndex: '2', position: 'relative' }}>
                            Select your blocks and help our cause!
                        </h2>
                        <div id="summary" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <span id="available">Available Blocks: {availableBlocks}</span>
                            <span id="reserved">Reserved Blocks: {reservedBlocks}</span>
                            {/* <span id="sold">Sold Blocks: {soldBlocks}</span> */}
                        </div>
                        <br />
                        <h2 style={{ fontSize: '30px', color:'brown', textAlign: 'center', margin: '0px 35px 10px', zIndex: '2', position: 'relative' }}>
                        The layout displays correctly on PCs and laptops but is not compatible with tablets or mobile devices.
                        </h2>
                        {
                            selectedBlocks > 0 &&
                                <button id="checkout-btn" onClick={() => handleCheckout()}>Proceed to Checkout - £{selectedBlocks*2}</button>
                        }

                        <div style={{ overflowX: 'auto' }}>
                            <div id="land">
                                <div id="land-grid">{blocks}</div>
                            </div>
                        </div>

                        {/* {
                            soldBlocks > 0 &&
                                <button id="download-btn" title="Export data related to sold blocks" onClick={() => handleDownload()}>
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="40px" height="40px" fill="currentColor" aria-hidden="true">
                                        <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z">
                                        </path>
                                    </svg>
                                </button>
                        }    */}
                    </>
                :
                    <div style={{paddingTop:'5%'}}>
                        <a style={{fontSize:'3rem', position: "fixed", top:'2%', left:'2%', textDecoration:'none', color:'#DAA520'}} href="/">❮ Back to Home</a>
                        <h1 style={{fontSize:'6rem', color:'#D9863E', textAlign:'center', margin: '20px auto'}}>THANK </h1>
                        <h1 style={{fontSize:'6rem', color:'#D9863E', textAlign:'center', margin: '20px auto'}}>YOU FOR</h1>
                        <h1 style={{fontSize:'6rem', color:'#1F2555', textAlign:'center', margin: '20px auto'}}>SUPPORTING</h1>
                        <h1 style={{fontSize:'6rem', color:'#1F2555', textAlign:'center', margin: '20px auto'}}>OUR CAUSE!</h1>
                        <div style={{display: 'flex'}}>
                            <a href="https://www.talysis.co.uk" target="_blank" style={{margin: '10px auto'}}><img src="logo3.png" width="200" height="200" alt="logo 2" /></a>
                        </div>
                        <h1 style={{fontSize:'2rem', color:'brown', textAlign:'center', margin: '10px auto'}}> Please note: You will receive an email within 24 hours of your purchase, confirming your block numbers.</h1>
                    </div>
            }
        </>
    );
}

export default Buy;