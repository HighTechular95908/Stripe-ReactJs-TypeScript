import { useState, useEffect } from "react";
import Header from "./Header";

const Buy = () => {
    const [selectedBlocks, setSelectedBlocks] = useState(0);
    const [availableBlocks, setAvailableBlocks] = useState(5775);
    const [reservedBlocks, setReservedBlocks] = useState(0);
    const [soldBlocks, setSoldBlocks] = useState(0);
    
    const blocks = [];

    for (let i = 0; i < 55 * 105; i++) { // Total blocks: 5775
        blocks.push(<div className="block" key={i + 1} />);
    }

    useEffect(() => {
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

    console.log('hi', selectedBlocks);

    return (
        <>
            <Header />

            <h2 style={{ fontSize: '45px', textAlign: 'center', margin: '0px 35px 10px', zIndex: '2', position: 'relative' }}>
                Select your blocks and help our cause!
            </h2>
            <div id="summary" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <span id="available">Available Blocks: {availableBlocks}</span>
                <span id="reserved">Reserved Blocks: {reservedBlocks}</span>
                <span id="sold">Sold Blocks: {soldBlocks}</span>
            </div>
            <br />
            {
                selectedBlocks > 0 &&
                    <button id="checkout-btn" onClick={() => updateSummary()}>Proceed to Checkout - £{selectedBlocks*2}</button>
            }
            
            <div style={{ overflowX: 'auto' }}>
                <div id="land">
                    <div id="land-grid">{blocks}</div>
                </div>
            </div>
        </>
    );
}

export default Buy;