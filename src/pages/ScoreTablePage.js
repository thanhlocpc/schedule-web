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
                // this.fetchData()
            }
        }
    }

    fetchData = async () => {
        const data = await api.get("/score-table/")
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
            await api.get("/score-table/export-score-table", { params: { year: 2021, semester: 1 }, responseType: 'blob' })
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
                                    <Card.Title as="h5">B???ng ??i???m</Card.Title>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover size='sm'>
                                    <thead>
                                        <tr style={{color:"black"}}>
                                            <th>#</th>
                                            <th>M?? MH</th>
                                            <th>T??n MH</th>
                                            <th>S??? TC</th>
                                            <th>??i???m thi h??? 10</th>
                                            <th>??i???m h??? 4</th>
                                            <th>??i???m ch???</th>
                                            <th>K???t qu???</th>
                                        </tr>
                                    </thead>


                                    {this.state.markData?.semesterTranscripts?.map((e, index) => {
                                        return (
                                            <>

                                                <tbody key={index}>
                                                    <tr style={{ backgroundColor: '#80DEEA', color: 'black' }}>
                                                        <td colSpan={8} scope="row">H???c k?? {e.semester.semesterName} n??m {e.semester.academyYear} </td>
                                                    </tr>
                                                    {e.subjects.map((item, index2) => {
                                                        return (
                                                            <tr key={index2} style={{color:"black"}}>
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
                                                <p style={{color:"black"}}>T??n ch??? t??ch l??y: <b>{this.state.markData.totalCredit}</b></p>
                                            </Row>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                                <p style={{color:"black"}}>??i???m trung b??nh h??? 10: <b>{this.state.markData.avgScoreTen}</b></p>
                                            </Row>
                                            <Row style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                                <p style={{color:"black"}}>??i???m trung b??nh h??? 4: <b>{this.state.markData.avgScoreFour}</b></p>
                                            </Row>
                                        </div>
                                        <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button size='sm' style={{ marginTop: 5 }} onClick={this.onDownload}>  {this.state.loadingDownload ? <i className="feather icon-loader" /> : <i className="feather icon-download" />}T???i xu???ng b???ng ??i???m</Button>
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