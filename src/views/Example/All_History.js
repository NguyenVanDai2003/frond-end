import React, { useState, useEffect } from 'react';
import '../../assets/css/lottery.scss';
import axios from "axios";
import {
    Link, NavLink
} from 'react-router-dom';

function All_History (){
    const [prize, setPrize] = useState([])

    useEffect(() => {
        const instance = axios.create({ baseURL: "http://localhost:2002/" });
        // let arr_pri = []
        for (let index = 1; index <= 6; index++) {
            instance.get(`history/${index}`)
                .then(res => {
                    let temp_prize = prize;
                    const number_tk = res.data;
                    // console.log("count", res.data)
                    // arr_pri.push(number_tk)
                    temp_prize.push(number_tk.count_tt);
                    setPrize(temp_prize);
                    console.log("addd", number_tk.count_tt)
                })

                .catch(error => console.log(error));
        }
        var myVar = setInterval(refen, 30000);
        function refen() {
            return window.location.reload()
        }

    }, [])
    const [result1, setResult1] = useState([])

    useEffect(() => {
        const instance = axios.create({ baseURL: "http://localhost:2002/" });
        instance.get(`numbergen`)
            .then(res => {
                let temp_number = []
                temp_number = result1;
                
                    temp_number.push(res.data.length)

                setResult1(temp_number)
                // tách kết quả để in
                // let arr_nb = []
                // const number_tk = res.data[21].number;
                // arr_nb.push(number_tk)
                // let arr_number = arr_nb.join('')
                // const a = arr_number.split('')
                // setResult(a);
                console.log("lodd",res.data)
                console.log("temp_number",temp_number)
                console.log("leng",result1[0])
            })
            .catch(error => console.log(error));

        var myVar = setInterval(refen, 30000);
        function refen() {
            return window.location.reload()
        }

    }, [])
        return (
            <>
                <div className=" main">
                    <header>
                        <div className="banner">
                            <div className="row">
                                <div className="col-md-4 w-100 img-l">
                                    <img className='starsmall' src={require('../../assets/images/star-small.png')} />
                                    <img className='starbig' src={require('../../assets/images/star-big.png')} />
                                    <img className='tkl' src={require('../../assets/images/ticket-l.png')} />
                                </div>
                                <div className="col-md-4 w-100 text">
                                    <p>The PancakeSwap Lottery</p>
                                    <p className="prize">$105,846</p>
                                    <p>in prizes!</p>
                                    <div className="butt">
                                        <NavLink to="/buyticket">Buy Ticket</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4 w-100 img-r">
                                    <img className='threest' src={require('../../assets/images/three-stars.png')} />
                                    <img className='tkr' src={require('../../assets/images/ticket-r.png')} />
                                </div>
                            </div>

                        </div>
                    </header>
                    <div className="container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Wining Number</th>
                                    <th>Match first 1</th>
                                    <th>Match first 2</th>
                                    <th>Match first 3</th>
                                    <th>Match first 4</th>
                                    <th>Match first 5</th>
                                    <th>Match first 6</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    
                </div>
            </>
        )
    }

export default All_History;
