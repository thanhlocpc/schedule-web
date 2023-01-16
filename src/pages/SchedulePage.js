import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';


import Aux from "../hoc/_Aux";
// import Card from "../../App/components/MainCard";
import { registerLicense } from '@syncfusion/ej2-base';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import Breadcrumb from '../App/layout/AdminLayout/Breadcrumb';

class SchedulePage extends Component {

    render() {
        registerLicense('Mgo+DSMBaFt/QHRqVVhkX1pGaV5GQmFJfFBmTGlcfVRwfUU3HVdTRHRcQlxiTH9TdEdiWnZZdHM=;Mgo+DSMBPh8sVXJ0S0J+XE9AdVRAQmJNYVF2R2BJdlR1dl9GaUwgOX1dQl9gSX9Sc0RjW31fc31dT2c=;ORg4AjUWIQA/Gnt2VVhkQlFaclxJX3xIekx0RWFab1d6cVdMYFVBNQtUQF1hSn5Sd0BiWX1ccXBVRmVb;OTQzNjY2QDMyMzAyZTM0MmUzMGxjNUJWR3huYnZpcUt1eE5FNS9nWWlmd3hETGdJUXN1NWVna1ZRL3dHbEE9;OTQzNjY3QDMyMzAyZTM0MmUzMGdqaGpyN1Yxc0VpdFd6THhqVXdPdnZjVUJJT21iaG5zTzF6NXpQemNYMXc9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtBVmFWf1dpR2NbfE55flBEalxYVAciSV9jS31Td0RmWH9ccnVRRmdcVg==;OTQzNjY5QDMyMzAyZTM0MmUzMG1Qd2FRTGxOVVpXa0g1bTR1U08yTHN6NUNJaU5ncUFiMm5SSkVFbk1LRkU9;OTQzNjcwQDMyMzAyZTM0MmUzMEcvaW1jeFJGeWRtZERvUXhhTDZLMWh3bjd3bE85QzZ6UUFFb0o5RmdsT1E9;Mgo+DSMBMAY9C3t2VVhkQlFaclxJX3xIekx0RWFab1d6cVdMYFVBNQtUQF1hSn5Sd0BiWX1ccXBURWZb;OTQzNjcyQDMyMzAyZTM0MmUzMFZGY0k0Tyt2aVdwczhlZmV3T2t6VFdyZWdLL3hqb2M1VDQrRmV1S1EyVDQ9;OTQzNjczQDMyMzAyZTM0MmUzMFZNOUVaRmc0VjZ3WTcvSDBSeS9sUDdTQm9aRjdoVlNlWXNsN3hnVWpjbkk9;OTQzNjc0QDMyMzAyZTM0MmUzMG1Qd2FRTGxOVVpXa0g1bTR1U08yTHN6NUNJaU5ncUFiMm5SSkVFbk1LRkU9');

        const data = [
            {
                Id: 1,
                Subject: 'Meeting',
                StartTime: new Date(2023, 1, 15, 10, 0),
                EndTime: new Date(2023, 1, 15, 12, 30),
            },
        ];
        return (
            <Aux >
                <Breadcrumb />
                <Row>
                    <Col>
                        {/* <ScheduleComponent
                        selectedDate={new Date(2023, 1, 15)}
                        eventSettings={{
                            dataSource: data,
                            allowAdding:false,
                            allowEditing:false,
                            allowDeleting:false,
                        }}
                        allowKeyboardInteraction={false}
                        >
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent> */}

                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Lịch thi</Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Mã MH</th>
                                            <th>Tên MH</th>
                                            <th>Ngày thi</th>
                                            <th>Phòng thi</th>
                                            <th>Tiết bắt đầu</th>
                                            <th>Số tiết</th>
                                            <th>Hình thức thi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>214483</td>
                                            <td>Thương mại điện tử</td>
                                            <td>22/12/2022</td>
                                            <td>P3</td>
                                            <td>1</td>
                                            <td>6</td>
                                            <td>Vấn đáp</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>214483</td>
                                            <td>Thương mại điện tử</td>
                                            <td>22/12/2022</td>
                                            <td>P3</td>
                                            <td>1</td>
                                            <td>6</td>
                                            <td>Vấn đáp</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>214483</td>
                                            <td>Thương mại điện tử</td>
                                            <td>22/12/2022</td>
                                            <td>P3</td>
                                            <td>1</td>
                                            <td>6</td>
                                            <td>Vấn đáp</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SchedulePage;