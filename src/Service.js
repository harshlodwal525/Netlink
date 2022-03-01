import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Sdata from "./Sdata";
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';

const { Meta } = Card;


const Service = () => {

    const [showArray, setShowArray] = useState(new Array(Sdata.length).fill(true));

    const handelClickShow = (arr, index) =>{

        const newArr = [...arr]

        newArr[index] = true;
        return newArr;

    }

    const handelClickHide = (arr, index) =>{

        const newArr = [...arr]

        newArr[index] = false;
        return newArr;

    }

    // const arr= new Array(Sdata.length).fill(true)
    // console.log(arr);
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>

            <Row gutter={[16, 16]}>
                {Sdata.map((data, index) => {


                    return <Col span={8}>
                        <Link to={`/detail-${index}`}>
                            {
                                showArray[index] ? <Card
                                         
                                    key={data.key}
                                    hoverable
                                    cover={<img className="Cardimg" alt="" src={data.imgsrc} />}>
                                    <Meta title={data.title} style={{ textAlign: "center" }} />
                                </Card> : null
                            }
                        </Link>
                        <div className="ser">

                            <Button onClick={() => setShowArray(handelClickShow(showArray,index))}>Show</Button>
                            <Button onClick={() => setShowArray(handelClickHide(showArray,index))}>Hide</Button>
                           
                        </div>

                    </Col>
                })}
            </Row>

            <footer className="w-100 bg-light text-center my-auto">
                <p> © 2021 Netlink. All Rights Reserved | Terms and Conditions</p>
            </footer>

        </>
    );

}

export default Service;