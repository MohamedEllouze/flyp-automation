import React  from 'react';
import {useEffect} from 'react'
import {Row,Col,Input,Button , Select,Form} from 'antd'
import '../signUp.scss'
import {EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons';



const { Option } = Select;


export const SignUpForm =()=>{


    return(

        <Row gutter={[0, 40]} className={'col-signUp'}>
            <Col className={"spn1"} span={17}>
                <span>Sign Up</span>
            </Col>
            <Col span={24}>
                <Row gutter={[0, 30]}>
                    <Col span={24}>
                        <Row gutter={[0, 10]} justify={"end"}>
                            <Col span={24}>
                                <Form.Item name="firstName" className={"form-item-style"}
                                           label={'Name'}
                                >
                                    <Input className={"spn2"}
                                           name="firstName" placeholder={'firstName'}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="lastName" className={"form-item-style"} label={'lastName'}
                                >
                                    <Input className={"spn2"}
                                           name="lastName" placeholder={"lastName"}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    className={"form-item-style"}
                                    name="email"
                                    label={<div><span style={{color:"rgba(0, 0, 0, 0.85)"}} >Email</span></div>}
                                >
                                    <Input  className={"spn2"}
                                            name="Email" placeholder={"Email"}></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            className={"form-item-style"}
                            name="password"
                            label={<div><span style={{color:"rgba(0, 0, 0, 0.85)"}} >{"Password"}</span></div>}
                        >
                            <Input.Password
                                className={"spn2"}
                                name="password"
                                placeholder={'password'}
                                iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[0, 10]}>
                            <Col span={24}>
                                <Form.Item name="SelectGender" className={"form-item-style"}
                                           label={'Select gender'}
                                >
                                    <Select
                                        className={"spn2 slect-nbr-empl"}
                                        name="SelectGender"
                                        defaultValue= {1}
                                        showSearch
                                        style={{width: "100%"}}
                                        placeholder={"Select gender"}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option name="numberPerson" key={1} value="1">1</Option>
                                        <Option name="numberPerson" key={2} value="2">2 <span style={{fontSize:"16px"}}>to</span> 5</Option>
                                        <Option name="numberPerson" key={3} value="3">6 <span style={{fontSize:"16px"}}>to</span> 10</Option>
                                        <Option name="numberPerson" key={4} value="4">11 <span style={{fontSize:"16px"}}>to</span> 25</Option>
                                        <Option name="numberPerson" key={5} value="5">26 <span style={{fontSize:"16px"}}>to</span> 50</Option>
                                        <Option name="numberPerson" key={6} value="6">51 <span style={{fontSize:"16px"}}>to</span> 200</Option>
                                        <Option name="numberPerson" key={7} value="7">201 <span style={{fontSize:"16px"}}>to</span> 1,000</Option>
                                        <Option name="numberPerson" key={8} value="8">1,001 <span style={{fontSize:"16px"}}>to</span> 10,000</Option>
                                        <Option name="numberPerson" key={9} value="9">10,0001 <span style={{fontSize:"16px"}}>or more</span></Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="Pays" className={"form-item-style"}
                                           label={'Pays'}
                                >
                                    <Select
                                        className={"spn2 slect-nbr-empl"}
                                        name="Pays"
                                        defaultValue= {1}
                                        showSearch
                                        style={{width: "100%"}}
                                        placeholder={"Pays"}
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option name="numberPerson" key={1} value="1">1</Option>
                                        <Option name="numberPerson" key={2} value="2">2 <span style={{fontSize:"16px"}}>to</span> 5</Option>
                                        <Option name="numberPerson" key={3} value="3">6 <span style={{fontSize:"16px"}}>to</span> 10</Option>
                                        <Option name="numberPerson" key={4} value="4">11 <span style={{fontSize:"16px"}}>to</span> 25</Option>
                                        <Option name="numberPerson" key={5} value="5">26 <span style={{fontSize:"16px"}}>to</span> 50</Option>
                                        <Option name="numberPerson" key={6} value="6">51 <span style={{fontSize:"16px"}}>to</span> 200</Option>
                                        <Option name="numberPerson" key={7} value="7">201 <span style={{fontSize:"16px"}}>to</span> 1,000</Option>
                                        <Option name="numberPerson" key={8} value="8">1,001 <span style={{fontSize:"16px"}}>to</span> 10,000</Option>
                                        <Option name="numberPerson" key={9} value="9">10,0001 <span style={{fontSize:"16px"}}>or more</span></Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row className={"text-form"} gutter={[10,0]}>
                            <Col>
                                <Button onClick={()=>{}}>Cancel</Button>
                            </Col>
                            <Col>
                                <Button  type="primary" htmlType="submit">Sign Up</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
