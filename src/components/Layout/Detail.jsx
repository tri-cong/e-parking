import styled from 'styled-components';

function Detail(props) {
    return (
        <DetailContainer>
            <div className="infoDetail">
                <h1 className="headingDetail">Bãi đậu xe trong ngày | Bãi đậu xe định kỳ hàng tháng | bãi đậu xe chung</h1>
                <p className="overviewDetail">Tất cả thông tin bãi đậu xe bãi đậu xe của mọi người</p>
            </div>
        </DetailContainer>
    )
}
export default Detail;

const DetailContainer = styled.div`
    color: white;

    .infoDetail {
        top: 140px;
        left: 30px;
        color: black;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 24px;
        }
        @media screen and (max-width: 500px) {
            top: 100px
            left: 15px;
        }

        .headingDetail {
            color: #08C5C4;
            padding-top: 100px;
            font-size: 30px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }

        .overviewDetail {
            color: black;
            max-width: 550px
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            padding-bottom: 100px;
            font-size: 30px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }
    }
`