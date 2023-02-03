import React, { Component } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import Aux from "../hoc/_Aux";
import Breadcrumb from '../App/layout/AdminLayout/Breadcrumb';
import api from "../interceptors/axios"

class ScoreTablePage extends Component {
    state = {
        markData: {
        //     "semesterTranscripts": [
        //         {
        //             "semester": {
        //                 "id": 1,
        //                 "semesterName": 1,
        //                 "academyYear": 2021
        //             },
        //             "subjects": [
        //                 {
        //                     "subject": {
        //                         "id": "214464",
        //                         "name": "AnToanBaoMat",
        //                         "examType": "ESSAY",
        //                         "examTime": 2,
        //                         "lessonTime": 3,
        //                         "credit": 3
        //                     },
        //                     "numberScoreFour": 4,
        //                     "numberScoreTen": 8.5,
        //                     "literalScore": "A",
        //                     "pass": true
        //                 },
        //                 {
        //                     "subject": {
        //                         "id": "214462",
        //                         "name": "Ltw",
        //                         "examType": "ORAL",
        //                         "examTime": 6,
        //                         "lessonTime": 3,
        //                         "credit": 4
        //                     },
        //                     "numberScoreFour": 3.5,
        //                     "numberScoreTen": 8,
        //                     "literalScore": "B+",
        //                     "pass": true
        //                 }
        //             ],
        //             "totalCredit": 7,
        //             "avgScoreTen": 8.21,
        //             "avgScoreFour": 3.28
        //         },

        //         {
        //             "semester": {
        //                 "id": 1,
        //                 "semesterName": 1,
        //                 "academyYear": 2021
        //             },
        //             "subjects": [
        //                 {
        //                     "subject": {
        //                         "id": "214464",
        //                         "name": "AnToanBaoMat",
        //                         "examType": "ESSAY",
        //                         "examTime": 2,
        //                         "lessonTime": 3,
        //                         "credit": 3
        //                     },
        //                     "numberScoreFour": 4,
        //                     "numberScoreTen": 8.5,
        //                     "literalScore": "A",
        //                     "pass": true
        //                 },
        //                 {
        //                     "subject": {
        //                         "id": "214462",
        //                         "name": "Ltw",
        //                         "examType": "ORAL",
        //                         "examTime": 6,
        //                         "lessonTime": 3,
        //                         "credit": 4
        //                     },
        //                     "numberScoreFour": 3.5,
        //                     "numberScoreTen": 8,
        //                     "literalScore": "B+",
        //                     "pass": true
        //                 }
        //             ],
        //             "totalCredit": 7,
        //             "avgScoreTen": 8.21,
        //             "avgScoreFour": 3.28
        //         },

        //         {
        //             "semester": {
        //                 "id": 1,
        //                 "semesterName": 1,
        //                 "academyYear": 2021
        //             },
        //             "subjects": [
        //                 {
        //                     "subject": {
        //                         "id": "214464",
        //                         "name": "AnToanBaoMat",
        //                         "examType": "ESSAY",
        //                         "examTime": 2,
        //                         "lessonTime": 3,
        //                         "credit": 3
        //                     },
        //                     "numberScoreFour": 4,
        //                     "numberScoreTen": 8.5,
        //                     "literalScore": "A",
        //                     "pass": true
        //                 },
        //                 {
        //                     "subject": {
        //                         "id": "214462",
        //                         "name": "Ltw",
        //                         "examType": "ORAL",
        //                         "examTime": 6,
        //                         "lessonTime": 3,
        //                         "credit": 4
        //                     },
        //                     "numberScoreFour": 3.5,
        //                     "numberScoreTen": 8,
        //                     "literalScore": "B+",
        //                     "pass": true
        //                 }
        //             ],
        //             "totalCredit": 7,
        //             "avgScoreTen": 8.21,
        //             "avgScoreFour": 3.28
        //         }
        //     ],
        //     "totalCredit": 7,
        //     "avgScoreTen": 8.21,
        //     "avgScoreFour": 3.28
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const data = await api.get("/course-registration-result/mark")
            .then(res => res.data)
            .catch(e => e)
        console.log(data);
        this.setState({
            markData: data.data
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
                                    <Card.Title as="h5">Bảng điểm</Card.Title>
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
                                            <th>Điểm thi hệ 10</th>
                                            <th>Điểm hệ 4</th>
                                            <th>Điểm chữ</th>
                                            <th>Kết quả</th>
                                        </tr>
                                    </thead>


                                    {this.state.markData?.semesterTranscripts?.map((e, index) => {
                                        return (
                                            <>

                                                <tbody key={index}>
                                                    <tr style={{ backgroundColor: '#80DEEA', color: 'black' }}>
                                                        <td colSpan={8} scope="row">Học kì {e.semester.semesterName} năm {e.semester.academyYear} </td>
                                                    </tr>
                                                    {e.subjects.map((item, index2) => {
                                                        return (
                                                            <tr key={index2}>
                                                                <th scope="row">{index++}</th>
                                                                <td>{item.subject.id}</td>
                                                                <td>{item.subject.name}</td>
                                                                <td>{item.subject.credit}</td>
                                                                <td>{item.numberScoreTen}</td>
                                                                <td>{item.numberScoreFour}</td>
                                                                <td>{item.literalScore}</td>
                                                                <td><i color='green' className="feather icon-check" /></td>
                                                            </tr>
                                                        )
                                                    })}
                                                    <tr>
                                                        <td colSpan={8} scope="row"></td>
                                                    </tr>
                                                </tbody>
                                            </>
                                        )
                                    })}
                                </Table>
                                {this.state.markData && this.state.markData?.semesterTranscripts?.length > 0 &&
                                    <>
                                        <div style={{paddingRight:12}}>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                                <p class="text-start">Tín chỉ tích lũy: <b>{this.state.markData.totalCredit}</b></p>
                                            </Row>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                                <p class="text-start">Điểm trung bình hệ 10: <b>{this.state.markData.avgScoreTen}</b></p>
                                            </Row>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                                <p class="text-start">Điểm trung bình hệ 4: <b>{this.state.markData.avgScoreFour}</b></p>
                                            </Row>
                                        </div>
                                        <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button size='sm' style={{ marginTop: 5 }} onClick={this.onDownload}>  <i className="feather icon-download" />Tải xuống bảng điểm</Button>
                                        </Row>
                                    </>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ScoreTablePage;