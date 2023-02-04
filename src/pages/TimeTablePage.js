import React, { Component } from 'react';
import { Row, Col, Card, Table, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Aux from "../hoc/_Aux";
import Breadcrumb from '../App/layout/AdminLayout/Breadcrumb';
import api from "../interceptors/axios"
import { dateToString } from '../utils/DateUtils';

class TimeTablePage extends Component {
    state = {
        timeTableData: [],
        semesterSelected: {
            year: 2021,
            semester: 1
        },
        semester: [
            // {
            //     year: 2021,
            //     semester: 2
            // },
            {
                year: 2021,
                semester: 1
            },
            // {
            //     year: 2020,
            //     semester: 2
            // }
        ],
        sortField: null
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const data = await api.get("/course-registration-result/student", { params: { year: 2021, semester: 1 } })
            .then(res => res.data)
            .catch(e => e)
        const res = []
        data?.data?.map((e) => {
            e.course?.courseTimes?.map((time, index2) => {
                res.push({
                    subjectId: e.course?.subject.id,
                    subjectName: e.course?.subject.name,
                    credit: e.course?.subject.credit,
                    class: e.course?.classEntity.name,
                    dayOfWeek: time.dayOfWeek,
                    timeStart: time.timeStart,
                    lessonTime: e.course?.subject.lessonTime,
                    classroom: time.classroom.name,
                    time: `${dateToString(new Date(time.dateStart))} - ${dateToString(new Date(time.dateEnd))}`
                })
            })
        })
        this.setState({
            timeTableData: res
        })
    }

    onDownload = async () => {

        await api.get("/course-registration-result/export-timetable", { params: { year: 2021, semester: 1 }, responseType: 'blob' })
            .then(res => {
                const link = document.createElement('a')
                link.href = window.URL.createObjectURL(res.data)
                link.download = 'thoi-khoa-bieu.xlsx'
                link.click()

                document.body.removeChild(link);
            })
            .catch(e => e)

    }

    sortData = (sortField) => {
        let data = this.state.timeTableData
        if (sortField == 'day') {
            data = data.sort((a, b) => {
                if (a.dayOfWeek == b.dayOfWeek) {
                    return a.timeStart - b.timeStart
                }
                return a.dayOfWeek - b.dayOfWeek
            })
        }
        if (sortField == 'subject') {
            data = data.sort((a, b) => {
                if (a.subjectId == b.subjectId) {
                    return a.timeStart - b.timeStart
                }
                return a.subjectId - b.subjectId
            })
        }
        this.setState({
            timeTableData: data
        })
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
                                    <Col>
                                        <Card.Title as="h5">Thời khóa biểu</Card.Title>
                                    </Col>
                                </Row>
                                <Row style={{ marginLeft: 5 }}>
                                    <DropdownButton
                                        size="sm"
                                        title={this.state.semesterSelected ? `Học kỳ ${this.state.semesterSelected.semester} năm ${this.state.semesterSelected.year}` : 'Học kỳ'}
                                    >
                                        {this.state.semester?.map((e, index) => {
                                            return (
                                                <Dropdown.Item onSelect={() => { this.setState({ semesterSelected: { year: e.year, semester: e.semester } }) }}>Học kỳ {e.semester} năm {e.year}</Dropdown.Item>
                                            )
                                        })}
                                    </DropdownButton>

                                    <DropdownButton
                                        size="sm"
                                        title="Sắp xếp"
                                    >
                                        <Dropdown.Item onSelect={() => { this.sortData('day') }}>Theo ngày</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => { this.sortData('subject') }}>Theo môn học</Dropdown.Item>
                                    </DropdownButton>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive  hover size="sm">
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

                                            // if (e.course?.courseTimes) {
                                            //     return (
                                            //         e.course?.courseTimes?.map((time, index2) => {
                                            //             return (
                                            //                 <tr key={Math.random()}>
                                            //                     <th scope="row">{index * (index2 + 1)}</th>
                                            //                     <td>{e.course?.subject.id}</td>
                                            //                     <td>{e.course?.subject.name}</td>
                                            //                     <td>{e.course?.subject.credit}</td>
                                            //                     <td>{e.course?.classEntity.name}</td>
                                            //                     <td>{time.dayOfWeek}</td>
                                            //                     <td>{time.timeStart}</td>
                                            //                     <td>{e.course?.subject.lessonTime}</td>
                                            //                     <td>{time.classroom.name}</td>
                                            //                     <td>Chua them</td>
                                            //                 </tr>
                                            //             )
                                            //         })
                                            //     )
                                            // } else {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{e.subjectId}</td>
                                                    <td>{e.subjectName}</td>
                                                    <td>{e.credit}</td>
                                                    <td>{e.class}</td>
                                                    <td>{e.dayOfWeek}</td>
                                                    <td>{e.timeStart}</td>
                                                    <td>{e.lessonTime}</td>
                                                    <td>{e.classroom}</td>
                                                    <td>{e.time}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                                {this.state.timeTableData && this.state.timeTableData.length > 0 &&
                                    <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Button size='sm' style={{ marginTop: 5 }} onClick={this.onDownload}>  <i className="feather icon-download" />Tải xuống thời khóa biểu</Button>
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