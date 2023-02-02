import React, { Component } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import Aux from "../hoc/_Aux";
import Breadcrumb from '../App/layout/AdminLayout/Breadcrumb';
import api from "../interceptors/axios"

class TimeTablePage extends Component {
    state = {
        timeTableData: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const data = await api.get("/course-registration-result/student", { params: { year: 2021, semester: 1 } })
            .then(res => res.data)
            .catch(e => e)
        console.log(data);
        this.setState({
            timeTableData: data.data
        })
    }

    onDownload = async () => {

        // await api.get("/subject-schedules/export-schedule", { params: { year: 2021, semester: 1 }, responseType: 'blob' })
        //     .then(res => {
        //         const link = document.createElement('a')
        //         link.href = window.URL.createObjectURL(res.data)
        //         link.download = 'lich-thi.xlsx'
        //         link.click()

        //         document.body.removeChild(link);
        //     })
        //     .catch(e => e)

    }

    render() {
        return (
            <Aux >
                <Breadcrumb />
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Card.Title as="h5">Thời khóa biểu</Card.Title>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Mã MH</th>
                                            <th>Tên MH</th>
                                            <th>Số TC</th>
                                            <th>Lớp</th>
                                            <th>Thứ</th>
                                            <th>Tiết bắt đầu</th>
                                            <th>Số tiết</th>
                                            <th>Phòng</th>
                                            <th>Thời gian học</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.timeTableData?.map((e, index) => {
                                           
                                            if (e.course?.courseTimes) {
                                                return(
                                                    e.course?.courseTimes?.map((time, index2) => {
                                                        return (
                                                            <tr key={index + "" + e.course?.subject.id}>
                                                                <th scope="row">{index * (index2 + 1)}</th>
                                                                <td>{e.course?.subject.id}</td>
                                                                    <td>{e.course?.subject.name}</td>
                                                                    <td>{e.course?.subject.credit}</td>
                                                                    <td>{e.course?.classEntity.name}</td>
                                                                    <td>{time.dayOfWeek}</td>
                                                                    <td>{time.timeStart}</td>
                                                                    <td>{e.course?.subject.lessonTime}</td>
                                                                    <td>{time.classroom.name}</td>
                                                                    <td>Chua them</td>
                                                            </tr>
                                                        )
                                                    })
                                                )
                                            } else {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index++}</th>
                                                        <td>{e.course?.subject.id}</td>
                                                        <td>{e.course?.subject.name}</td>
                                                        <td>{e.course?.subject.credit}</td>
                                                        <td>{e.course?.classEntity.name}</td>
                                                        <td>{e.classroomName}</td>
                                                        <td>{e.lessonStart}</td>
                                                        <td>{e.lessonEnd}</td>
                                                        <td>{e.examType}</td>
                                                    </tr>
                                                )
                                            }
                                        })}
                                    </tbody>
                                </Table>
                                {this.state.timeTableData && this.state.timeTableData.length > 0 &&
                                    <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Button size='sm' style={{ marginTop: 5 }} onClick={this.onDownload}>  <i className="feather icon-download" />Tải xuống thời khóa biể</Button>
                                    </Row>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default TimeTablePage;