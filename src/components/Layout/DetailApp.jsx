import styled from 'styled-components';
import App from '../../images/App.jpg'


function DetailApp(props) {
    return (
        <DetailContainer>
            <div className="infoDetailApp">
                <p className="headingDetailApp">Thông tin bãi đậu xe trong nháy mắt!</p>
                <h1 className="overviewDetailApp">Vị trí, phí sử dụng, giờ hoạt động, v.v. Bạn có thể kiểm tra thông tin trước.</h1>
                <p className="overviewSpecifically">Di động với mức chiết khấu trung bình hơn 60% so với giá tại chỗ Mua một vé đậu xe và sử dụng bãi đậu xe thuận tiện.</p>
            </div>
            <div className="imgIntro">
                <img src={App} alt=""/>
            </div>
        </DetailContainer>
    )
}
export default DetailApp;

const DetailContainer = styled.div`
    display: flex;

    .infoDetailApp {
        padding-top: 50px;
        padding-left: 100px;
        top: 140px;
        left: 30px;
        color: black;
        width: 50%;
        text-align: left;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 24px;
        }
        @media screen and (max-width: 500px) {
            top: 100px
            left: 15px;
        }

        .headingDetailApp {
            color: #08C5C4;
            font-size: 30px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }

        .overviewDetailApp {
            color: black;
            max-width: 550px
            width: 100%;
            line-height: 1.3;
            font-size: 30px;
            transition: all 0.3s ease;
            width: 80%;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }

        .overviewSpecifically {
            color: black;
            max-width: 550px
            width: 100%;
            line-height: 1.3;
            font-size: 15px;
            transition: all 0.3s ease;
            width: 65%;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }
    }

    .imgIntro {
        display: flex;
        top: 0;
        left: 0;
        padding-bottom: 50px;

        img {
            width: 80%;
        }
    }
`