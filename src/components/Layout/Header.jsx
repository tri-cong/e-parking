import styled from 'styled-components';
import Menu from '../Popper/Menu';

const MENU_ITEMS_INTRODUCE = [
    {
        title: 'Video giới thiệu dịch vụ',
    },
];
const MENU_ITEMS_INSTRUCT = [
    {
        title: 'Hướng dẫn cài đặt và đăng ký ứng dụng di động',
    },
    {
        title: 'Hướng dẫn sử dụng vé giữ xe di động',
    },
    {
        title: 'Hướng dẫn đăng ký hàng tháng',
    },
    {
        title: 'Cách sử dụng phiếu giảm giá',
    },
];
const MENU_ITEMS_INFORMATION = [
    {
        title: 'Sử dụng bãi đậu xe chung',
    },
    {
        title: 'Chia sẻ chỗ đậu xe ưu tiên cư dân (khu dân cư)',
    },
    {
        title: 'Bãi đậu xe chung trên tài sản tư nhân',
    },
    {
        title: 'Đăng ký và quản lý thời gian chia sẻ (android)',
    },
    {
        title: 'Đăng ký và quản lý thời gian dùng chung (ios)',
    },
    {
        title: 'Kiểm tra điểm chia sẻ',
    },
];
const MENU_ITEMS_SUPPORT = [
    {
        title: 'Điều khoản dịch vụ',
    },
];
function Header(props) {
    return (
        <Navigation>
            <div className="navContainer">
                <div className="logo">
                    <h1>E-Parking</h1>
                </div>
                <div className="menu-item-title">
                    <Menu items={MENU_ITEMS_INTRODUCE}>
                        <div className="item-title">Giới thiệu dịch vụ</div>
                    </Menu>
                    <Menu items={MENU_ITEMS_INSTRUCT}>
                        <div className="item-title">Hướng dẫn sử dụng ứng dụng di động</div>
                    </Menu>
                    <Menu items={MENU_ITEMS_INFORMATION}>
                        <div className="item-title">Thông tin chia sẻ bãi đậu xe</div>
                    </Menu>
                    <Menu>
                        <div className="item-title">Liên kết / Hợp tác</div>
                    </Menu>
                    <Menu items={MENU_ITEMS_SUPPORT}>
                        <div className="item-title">Hỗ trợ khách hàng</div>
                    </Menu>
                </div>
                
            </div>
        </Navigation>
    )
}
export default Header;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    top: 0;

    @media only srceen and (max-width: 600px) {
        height: 100px;
    }

    .navContainer {
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;

        @media only srceen and (max-width: 600px) {
            flex-direction: column;
        }

        .logo {
            width: 240px;
            cursor: poiter;
            padding-left: 3%;
            color: #08C5C4;
            font-size: 18px;
        }

        .menu-item-title {
            display: flex;
            width: 100%;
            padding-left: 10%;

            .item-title {
                padding-left: 4%;
            }
        }

    }
`