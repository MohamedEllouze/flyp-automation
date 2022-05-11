import React from 'react';
import {Row,Col} from 'antd';
import img from "../../../assests/img.png";
import logo from "../../../assests/logo.png";





function Sider(props){

    return(
            <Row   gutter={[0,24]} className={"Card"} >

                <Col span={24}>
                    <Row justify={"space-between"}>
                        <Col span={4} className="logo-container">
                            <img className="logo" src={img} alt={""}/>
                        </Col>
                    </Row>
                </Col>

                <Col span={24}>
                    <Row>
                        <Col span={7} className="logo-container">
                            <img className="logo" src={logo} alt={""}/>
                        </Col>
                        <Col span={14} className="empty_div">
                            {props.children}
                        </Col>
                    </Row>
                </Col>

            </Row>

    )

}
export default Sider