import styled from 'styled-components';
import AppStore from '../../images/appstore.png'
import GooglePlay from '../../images/googleplay.png'

function BtnDow(props) {
    return (
        <BtnDowContainer>
            <div className="dow">
                <h3 className="txtDow">Tải ứng dụng</h3>
                <div className="imgDow">
                    <img src={AppStore} alt=""/>
                    <img src={GooglePlay} alt=""/>
                </div>
            </div>
            <div className="signup">
                <div className="txtSignup">Đăng ký để trở thành người đầu tiên nhận thông tin về tin tức, ưu đãi và khuyến mãi</div>
                <input className="ipsignup" type="text" placeholder="E-mail address"></input>
                <button className="btnsignup">Sign up</button>
            </div>
        </BtnDowContainer>
    )
}
export default BtnDow;

const BtnDowContainer = styled.div`

    padding-top: 50px;
    padding-bottom: 100px;
    display: flex;
    background-color: #f2f6fd;

    .dow {
        width: 40%;

        .txtDow {
            font-size: 1.75rem;
            color: black;
            text-align: left;
            padding-left: 208px;
        }
    
        .imgDow {
            display: flex;
            top: 0;
            left: 0;
            padding-bottom: 50px;
            padding-left: 200px;
    
            img {
                width: 40%;
                cursor: pointer;
            }
        }
    }

    .signup {
        padding-top: 15px;

        .txtSignup {
            font-weight: 600;
            color: #08C5C4;
            font-size: 18px;
            line-height: 1.56;
            width: 63%;
            text-align: left;
            padding-bottom: 30px;
            padding-left: 150px;
        }

        .ipsignup {
            box-shadow: 0 4px 24px 0 rgba(9,55,105,0.08);
            border-radius: 27px 0px 0px 27px;
            background-color: #FFFFFF;
            border: 1px solid transparent;
            border-color: #08C5C4;
            width: 300px;
            height: 50px;
            font-size: 20px;
            padding-left: 50px;
            font: inherit;
            font-weight: 600;

            input {
                letter-spacing: normal;
                word-spacing: normal;
                text-transform: none;
                text-indent: 0px;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                cursor: text;
            }
        }

        .btnsignup {
            box-shadow: 0 4px 24px 0 rgba(9,55,105,0.08);
            border-radius: 0px 27px 27px 0px;
            background-color: #08C5C4;
            color: #FFFFFF;
            border: 1px solid transparent;
            width: 150px;
            height: 54px;
            font-size: 20px;
            font: inherit;
            font-weight: 600;
            cursor: pointer;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`