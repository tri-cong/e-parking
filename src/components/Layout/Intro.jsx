import styled from 'styled-components';
import intro from '../../images/intro2.jpg';
import {AiOutlineArrowDown} from 'react-icons/ai';

function Intro(props) {
    return (
        <IntroContainer>
            <div className="imgIntro">
                <img src={intro} alt=""/>
            </div>
            <div className="infoIntro">
                <h1 className="headingIntro">ỨNG DỤNG ĐẬU XE SỐ 1 VIỆT NAM</h1>
                <p className="overviewIntro">BÃI ĐẬU XE DÀNH CHO MỌI NGƯỜI</p>
                <button className="btnIntro">Chi tiết</button>
            </div>
        </IntroContainer>
    )
}
export default Intro;

const IntroContainer = styled.div`
    background-color: #FFFFFF;

    .imgIntro {
        top: 0;
        left: 0;
        padding-left: 40%;

        img {
            width: 80%;
        }
    }

    .infoIntro {
        position: absolute;
        top: 85px;
        left: 30px;
        padding-left: 50px;
        color: black;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 24px;
        }
        @media screen and (max-width: 500px) {
            top: 100px
            left: 15px;
        }

        .headingIntro {
            color: black;
            padding-top: 70px;
            font-size: 45px;
            transition: all 0.3s ease;
            text-align: left;
            width: 60%;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }

        .overviewIntro {
            color: black;
            max-width: 550px
            width: 100%;
            line-height: 1.3;
            font-size: 45px;
            transition: all 0.3s ease;
            text-align: left;
            width: 70%;

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }

        .btnIntro {
            font-size: 30px;
            border-radius: 27px;
            border-style: solid;
            border-color: #08C5C4;
            box-shadow: 0 4px 24px 0 rgba(9,55,105,0.08);
            cursor: pointer;
            background-color: white;
            color: #08C5C4;
            align-items: left;
            display: flex;
            justify-content: left;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 30px;

            &:hover {
                transform: scale(1.1);
                color: white;
                background-color: #08C5C4;
            }

            @media screen and (max-width: 800px) {
                left: 40px;
            }
            @media screen and (max-width: 500px) {
                left: 24px;
            }
        }
    }
`