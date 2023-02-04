import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Container, Figure } from 'react-bootstrap';
import anouncement from "../assets/images/anouncement.jpg"
import Aux from "../hoc/_Aux";


class HomePage extends React.Component {
    render() {

        return (
            <Aux>
                <Card>
                    <Card.Header>
                        <Row>
                            <Card.Title as="h5">Thông báo</Card.Title>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row xs={12} md={12} lg={12}>
                            {/* \Thông báo các học phần bị hủy do không đủ số lượng mở lớp trong học kỳ II năm học 2022 - 2023 */}
                            <Col xs={12} xl={6}>
                                <Figure>
                                    <Figure.Image
                                        width={400}
                                        height={180}
                                        alt="171x180"
                                        src={anouncement}
                                    />
                                    <Figure.Caption>
                                        <a className='stretched-link' style={{ color: '#17a2b8' }} href='#'><i className="feather icon-bell" /> Thông báo về việc khảo sát lấy ý kiến sinh viên về hoạt động giảng dạy của giảng viên học kỳ I năm học 2022 - 2023</a>
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col xs={12} xl={6}>
                                <p>
                                    <a href='#' style={{ color: '#04a9f5' }}>
                                        <i className="feather icon-chevrons-right" /> Thông báo các học phần bị hủy do không đủ số lượng mở lớp trong học kỳ II năm học 2022 - 2023
                                    </a>
                                </p>
                                <p>
                                    <a href='#' style={{ color: '#04a9f5' }}>
                                        <i className="feather icon-chevrons-right" /> Thông báo về việc đăng ký môn học vào học kỳ II năm học 2022 - 2023
                                    </a>
                                </p>
                                <p>
                                    <a href='#' style={{ color: '#04a9f5' }}>
                                        <i className="feather icon-chevrons-right" /> Thông báo về thời gian đóng học phí 
                                    </a>
                                </p>
                                <p>
                                    <a href='#' style={{ color: '#04a9f5' }}>
                                        <i className="feather icon-chevrons-right" /> Hướng dẫn cấp lại mật khẩu đăng nhập cho sinh viên
                                    </a>
                                </p>
                                <p>
                                    <a href='#' style={{ color: '#04a9f5' }}>
                                        <i className="feather icon-chevrons-right" /> Hướng dẫn sinh viên thực hiện khảo sát trên hệ thống Edusoft.NET
                                    </a>
                                </p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default HomePage;