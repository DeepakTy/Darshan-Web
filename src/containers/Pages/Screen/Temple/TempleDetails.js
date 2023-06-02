import React from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import firebase from 'firebase';
import { Tabs, Icon } from 'antd';
import "./TempleDetails.scss";
import moment from "moment";

const { TabPane } = Tabs;

export default function () {
    const params = useParams();
    const { rowStyle, colStyle } = basicStyle;
    const [userId, setUserId] = React.useState([]);
    const [userAbhishek, setUserAbhishek] = React.useState([]);
    const [userArchana, setUserArchana] = React.useState([]);
    const [userThali, setUserThali] = React.useState([]);
    const [userPooja, setUserPooja] = React.useState([]);
    console.log(params.id);
    React.useEffect(() => {
        const wordRef = firebase.database().ref("paymentInfo");
        wordRef.on("value", (snapshot) => {

            const words = snapshot.val();
            const array = [];
            for (let key in words) {
                array.push(key);
                if (key === params.id) {
                    for (let k in snapshot.val()[key]) {

                        if (k === "abhishek") {
                            for (let j in snapshot.val()[key][k]) {
                                userAbhishek.push(snapshot.val()[key][k][j])
                            }
                        } else if (k === "archana") {
                            for (let j in snapshot.val()[key][k]) {
                                userArchana.push(snapshot.val()[key][k][j])
                            }
                        } else if (k === "thali") {
                            for (let j in snapshot.val()[key][k]) {
                                userThali.push(snapshot.val()[key][k][j])
                            }
                        } else if (k === "pooja") {
                            for (let j in snapshot.val()[key][k]) {
                                userPooja.push(snapshot.val()[key][k][j])
                            }
                        }

                    }
                }
            }
            setUserId(array);
        })
    }, []);

    return (
        <LayoutWrapper>

            <Row style={{ width: "100%", margin: "0 0 20px 40px" }}>
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={
                            <span>
                                <Icon type="abhishek" />
                                Abhishek
                            </span>
                        }
                        key="1"
                    >

                        <Row style={{ padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }} gutter={0} justify="center">
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Name</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Date</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Amount</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>TransactionId</p>
                            </Col>
                        </Row>

                        {userAbhishek.length > 0 && userAbhishek.map((k, i) => (
                            <Row style={{ background: "white", padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }}>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.name}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.mobile_number}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.place_of_birth}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.time_of_birth}</p>
                                </Col>
                            </Row>
                        ))
                        }

                    </TabPane>

                    <TabPane
                        tab={
                            <span>
                                <Icon type="archana" />
                                Archana
                            </span>
                        }
                        key="2"
                    >
                        <Row style={{ padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }} gutter={0} justify="center">
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Name</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Date</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Amount</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>TransactionId</p>
                            </Col>
                        </Row>

                        {userArchana.length > 0 && userArchana.map((k, i) => (
                            <Row style={{ background: "white", padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }}>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.name}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.mobile_number}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.place_of_birth}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.time_of_birth}</p>
                                </Col>
                            </Row>
                        ))
                        }

                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="thali" />
                                Thali
                            </span>
                        }
                        key="3"
                    >

                        <Row style={{ padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }} gutter={0} justify="center">
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Name</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Date</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Amount</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>TransactionId</p>
                            </Col>
                        </Row>

                        {userThali.length > 0 && userThali.map((k, i) => (
                            <Row style={{ background: "white", padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }}>
                                 <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.devoteeName}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{moment(k.date).format("YYYY-MM-DD")}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.amount}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.transactionId}</p>
                                </Col>
                            </Row>
                        ))
                        }

                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="pooja" />
                                Pooja
                            </span>
                        }
                        key="4"
                    >

                        <Row style={{ padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }} gutter={0} justify="center">
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Name</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Date</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>Amount</p>
                            </Col>
                            <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                <p>TransactionId</p>
                            </Col>
                        </Row>

                        {userPooja.length > 0 && userPooja.map((k, i) => (
                            <Row style={{ background: "white", padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0" }}>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.name}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.date}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.amount}</p>
                                </Col>
                                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                                    <p>{k.transactionId}</p>
                                </Col>
                            </Row>
                        ))
                        }

                    </TabPane>
                </Tabs>
            </Row>

        </LayoutWrapper>
    );
}
