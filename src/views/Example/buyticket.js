import React from "react";

import '../../assets/css/lottery.scss';

class Buyticket extends React.Component {
    render() {
        return (
            <>
                <div className="buyticket">
                    <div className="banner">
                        <h2>
                            <span className="t1">B</span>
                            <span className="t2">U</span>
                            <span className="t3">Y</span>
                        </h2>
                        <h2>
                            <span className="t4">T</span>
                            <span className="t5">I</span>
                            <span className="t6">C</span>
                            <span className="t7">K</span>
                            <span className="t8">E</span>
                            <span className="t9">T</span>
                        </h2>

                    </div>
                    <div className="buytk0 py-5">
                        <div className=" buytk1">
                            <h5>Buy Tickets</h5>
                            <div className="row">

                                <div className="col-md-6 c-left">
                                    <p>Buy: </p>
                                    <p>Number: </p>
                                    <p>Total Price:</p>
                                </div>
                                <div className="col-md-6 c-right">
                                    <p>... Tickets</p>
                                    <p>...số..</p>
                                    <p>~..tiền.</p>
                                </div>
                            </div>

                            <div className="buytk2">
                                <button>BUY</button>
                                <p>"Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Buyticket;