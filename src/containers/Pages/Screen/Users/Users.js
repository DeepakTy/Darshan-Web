import React from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import firebase from 'firebase';
import { Tabs, Icon } from 'antd';
import "./Users.scss";
import moment from "moment";

const { TabPane } = Tabs;

export default function () {
    const { rowStyle, colStyle } = basicStyle;
    const [userId, setUserId] = React.useState([]);
    const [userList, setUserList] = React.useState([]);

    React.useEffect(() => {
        const wordRef = firebase.database().ref("devotee");
        wordRef.on("value", (snapshot) => {

            const words = snapshot.val();
            const array = [];
            for (let key in words) {
                array.push(key);
                userList.push(snapshot.val()[key]);
            }
            setUserId(array);
        })
    }, []);

    return (
        <LayoutWrapper>

            <Row style={{ width: "100%", margin: "0  20px 20px 0px" }}>

                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                    <p>Name</p>
                </Col>
                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                    <p>PhoneNumber</p>
                </Col>
                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                    <p>Place</p>
                </Col>
                <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                    <p>Date Of Joining</p>
                </Col>

            </Row>
    
            {userList.length > 0 && userList.map((k) =>
                <Row style={{ background: "white", padding: "20px 0 20px 0", width: "100%", margin: "0 20px 20px 0" }}>

                    <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                        <p>{k.name}</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                        <p>{k.phone_number}</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                        <p>{k.place}</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                        <p>{moment(k.date_of_joining).format("YYYY-MM-DD")}</p>
                    </Col>

                </Row>
            )}
        </LayoutWrapper>
    );
}
