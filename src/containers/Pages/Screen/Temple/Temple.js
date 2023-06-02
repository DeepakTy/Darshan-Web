import React from 'react';
import { Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import firebase from 'firebase';

export default function () {
    const history = useHistory();
    const { rowStyle, colStyle } = basicStyle;
    const [templeList, setTempleList] = React.useState([]);
    const [templeId, setTempleId] = React.useState([]);

    React.useEffect(() => {
        const wordRef = firebase.database().ref("TempleList");
        wordRef.on("value", (snapshot) => {

            const words = snapshot.val();
            const array = [];
            for (let key in words) {
                array.push(key);
                templeList.push(snapshot.val()[key])
            }
            setTempleId(array);
        })
    }, []);

    const handleClick = (event, value) => {
        console.log(value)
        history.push(`/dashboard/temple-details/${value.templeId}`);
    }

    return (
        <LayoutWrapper>

            <Row style={rowStyle} gutter={0} justify="center">
                <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                    <p>Name</p>
                </Col>
                <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                    <p>PhoneNumber</p>
                </Col>
                <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                    <p>Address</p>
                </Col>
                <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                    <p>Time</p>
                </Col>
                <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                    <p>UpiId</p>
                </Col>
                <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                    <p>VisitCost</p>
                </Col>
            </Row>

            {templeList.length > 0 && templeList.map((k, i) => (
                <Row style={{ background: "white", padding: "20px 0 20px 0", width: "100%", margin: "20px 0 20px 0", cursor: "pointer" }} onClick={(e) => handleClick(e, k)}>
                    <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={k.imageUrl} alt='image' style={{ height: "50px", width: "50px", borderRadius: "50%", marginRight: "10px" }} />
                        <p>{k.templeName}</p>
                    </Col>
                    <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p>{k.preistMobileno}</p>
                    </Col>
                    <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p>{k.templeAddress}</p>
                    </Col>
                    <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p>{k.timing}</p>
                    </Col>
                    <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p>{k.upiId}</p>
                    </Col>
                    <Col md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p>{k.templeVisitCost}</p>
                    </Col>
                </Row>
            ))
            }

        </LayoutWrapper>
    );
}
