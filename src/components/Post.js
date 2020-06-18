// import React, { Component } from 'react';
// import {Table, NavLink} from 'react-bootstrap';

// export class Post extends Component {
//     constructor(props){
//         super(props);
//         this.state = {deps:[]}
//     }

//     refreshList(){
//         this.setState({
//             deps:[{"MANV": 1, "HO": "LE", "TEN": "DUNG", "DIACHI": "NA", "GIOITINH": true, "NGAYSINH":2, "NGAYVAOLAM":2, "MACV": "cv01", "MAPB": "pb01" }]
//         })
//     }
//     render(){
//         const {deps} = this.state;
//         return(
//             <Table className="mt-4" striped bordered hover size="sm">
//                 <thead>
//                     <tr>
//                         <th>Mã Nhân Viên</th>
//                         <th>Họ</th>
//                         <th>Tên</th>
//                         <th>Địa Chỉ</th>
//                         <th>Giới Tính</th>
//                         <th>Ngày Sinh</th>
//                         <th>Ngày Vào Làm</th>
//                         <th>Mã Chức Vụ</th>
//                         <th>Mã Phòng Ban</th>
//                     </tr>
//                     <tbody>
//                         {deps.map(dep=>
//                            <tr>key = {dep.MANV}
//                            <td>{dep.MANV}</td>
//                            <td>{dep.HO}</td>
//                            <td>{dep.TEN}</td>
//                            <td>{dep.DIACHI}</td>
//                            <td>{dep.GIOITINH}</td>
//                            <td>{dep.NGAYSINH}</td>
//                            <td>{dep.NGAYVAOLAM}</td>
//                            <td>{dep.MACV}</td>
//                            <td>{dep.MAPB}</td>
//                            </tr> 
//                             )}
//                     </tbody>
//                 </thead>
//             </Table>
//         )
//     }
// }
