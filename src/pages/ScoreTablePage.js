import React, { Component } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import Aux from "../hoc/_Aux";
import Breadcrumb from '../App/layout/AdminLayout/Breadcrumb';
import api from "../interceptors/axios"
import { connect } from 'react-redux';

class ScoreTablePage extends Component {
    state = {
        markData: {},
        loadingDownload: false
    }
    componentDidMount() {
        if (this.props.auth.user?.roles) {
            const roles = this.props.auth.user.roles.map((e, index) => e.id)
            if(!roles.includes("STUDENT")){
                window.location.href = "/"
            }else{
                this.fetchData()
            }
        }
       
    }
    componentDidUpdate() {
        if (this.props.auth.user?.roles) {
            const roles = this.props.auth.user.roles.map((e, index) => e.id)
            if(!roles.includes("STUDENT")){
                window.location.href = "/"
            }else{
                this.fetchData()
            }
        }
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
        try {
            this.setState({
                loadingDownload: true
            })
            await api.get("/course-registration-result/export-score-table", { params: { year: 2021, semester: 1 }, responseType: 'blob' })
                .then(res => {
                    const link = document.createElement('a')
                    link.href = window.URL.createObjectURL(res.data)
                    link.download = 'bang-diem.xlsx'
                    link.click()
                    document.body.removeChild(link);
                })
                .catch(e => e)
            this.setState({
                loadingDownload: false
            })
        } catch {
            this.setState({
                loadingDownload: false
            })
        }


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
                                <Table responsive hover size='sm'>
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
                                        <div style={{ paddingRight: 12 }}>
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
                                            <Button size='sm' style={{ marginTop: 5 }} onClick={this.onDownload}>  {this.state.loadingDownload ? <i className="feather icon-loader" /> : <i className="feather icon-download" />}Tải xuống bảng điểm</Button>
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

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(ScoreTablePage);