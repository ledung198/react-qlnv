import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddDepModal } from './AddDepModal';
import { Edit } from './Edit';

export class Get extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false, editModalShow: false }
    }
    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch('http://quanlyapi.somee.com/api/NhanVien')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data })
            });
    }
    componentDidUpdate() {
        this.refreshList()
    }

    deleteDep(depmaNv) {
        if (window.confirm('Bạn có chắc xóa người này?')) {
            fetch('http://quanlyapi.somee.com/api/NhanVien?maNv=' + depmaNv, {
                method: 'DELETE',
                headers: {
                    'Accept': 'applicontion/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {

        const { deps, depmaNv, dephoTen, depdanToc, depgioiTinh, depdiaChi, depngaySinh, depsoDT, depmaCv, depmaPb, depbacLuong } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false })
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Mã Nhân Viên</th>
                            <th>Họ Tên</th>
                            <th>Dân Tộc</th>
                            <th>Giới Tính</th>
                            <th>Địa Chỉ</th>
                            <th>Ngày Sinh</th>
                            <th>Số Điện Thoại</th>
                            <th>Mã Chức Vụ</th>
                            <th>Tên Chức vụ</th>
                            <th>Mã Phòng Ban</th>
                            <th>Tên Phòng Ban</th>
                            <th>Bậc Luong</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr key={dep.MaNv}>
                                <td>{dep.MaNv}</td>
                                <td>{dep.HoTen}</td>
                                <td>{dep.DanToc}</td>
                                <td>{dep.GioiTinh}</td>
                                <td>{dep.DiaChi}</td>
                                <td>{dep.NgaySinh}</td>
                                <td>{dep.SoDT}</td>
                                <td>{dep.MaCV}</td>
                                <td>{dep.TenCV}</td>
                                <td>{dep.MaPB}</td>
                                <td>{dep.TenPhongBan}</td>
                                <td>{dep.BacLuong}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={() => this.setState({ editModalShow: true, depmaNv: dep.MaNv, dephoTen: dep.HoTen, depdanToc: dep.DanToc, depgioiTinh: dep.GioiTinh, depdiaChi: dep.DiaChi, depngaySinh: dep.NgaySinh, depsoDT: dep.SoDT, depmaCv: dep.MaCV, depmaPb: dep.MaPB, depbacLuong: dep.BacLuong })}>Sửa</Button>
                                        <Edit
                                            show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            depmaNv={depmaNv}
                                            dephoTen={dephoTen}
                                            depdanToc={depdanToc}
                                            depgioiTinh={depgioiTinh}
                                            depdiaChi={depdiaChi}
                                            depngaySinh={depngaySinh}
                                            depsoDT={depsoDT}
                                            depmaCv={depmaCv}
                                            depmaPb={depmaPb}
                                            depbacLuong={depbacLuong}
                                        />
                                        <Button className="mr-2"
                                        onClick={()=>this.deleteDep(dep.MaNv)} variant="danger"
                                        >Delete</Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({ addModalShow: true })}>
                        Thêm
                    </Button>
                    <AddDepModal show={this.state.addModalShow} onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}
