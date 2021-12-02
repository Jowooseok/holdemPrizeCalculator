import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import backImage1 from "./static/1.jpg";
import backImage2 from "./static/2.jpg";
import backImage3 from "./static/3.jpg";
import {
    Divider,
    Input,
    Typography,
    TextField,
    Box,
    InputAdornment,
    Paper,
    ButtonGroup,
    Button,
    Modal
} from "@mui/material";
import {Col, Row} from "antd";
import React, {useState} from "react";
import {styled} from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: "#000000"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#000000',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#000000',
        },
        '&:hover fieldset': {
            borderColor: '#000000',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#000000',
        },
    },
});
const kHundredPer = {width: "100%", height: "100%"};
const kBackgroundG = {width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)"};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    height: 320,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function App() {

    const [playerNumber, setPlayerNumber] = useState(2);
    const [firstPlayerChip, setFirstPlayerChip] = useState(0);
    const [secondPlayerChip, setSecondPlayerChip] = useState(0);
    const [thirdPlayerChip, setThirdPlayerChip] = useState(0);
    const [fourthPlayerChip, setFourthPlayerChip] = useState(0);
    const [fifthPlayerChip, setFifthPlayerChip] = useState(0);
    const [firstPlayerPrize, setFirstPlayerPrize] = useState(0);
    const [secondPlayerPrize, setSecondPlayerPrize] = useState(0);
    const [thirdPlayerPrize, setThirdPlayerPrize] = useState(0);
    const [fourthPlayerPrize, setFourthPlayerPrize] = useState(0);
    const [fifthPlayerPrize, setFifthPlayerPrize] = useState(0);
    const [totalPrize, setTotalPrize] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        window.location.reload();
    }


    // function onChange(a, b, c) {
    //     console.log(a, b, c);
    // }

    const confirmResult = () => {

        if (totalPrize > 0) {
            switch (playerNumber) {
                case 2:
                    if (firstPlayerChip > 0 && secondPlayerChip > 0) {
                        setFirstPlayerPrize((firstPlayerChip / (firstPlayerChip + secondPlayerChip)) * totalPrize);
                        setSecondPlayerPrize((secondPlayerChip / (firstPlayerChip + secondPlayerChip)) * totalPrize);
                        handleOpen();
                    } else {
                        alert("플레이어 칩수를 0개 이상 입력해주세요")
                    }
                    break;
                case 3:
                    if (firstPlayerChip > 0 && secondPlayerChip > 0 && thirdPlayerChip > 0) {
                        setFirstPlayerPrize((firstPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip)) * totalPrize);
                        setSecondPlayerPrize((secondPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip)) * totalPrize);
                        setThirdPlayerPrize((thirdPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip)) * totalPrize);
                        handleOpen();
                    } else {
                        alert("플레이어 칩수를 0개 이상 입력해주세요")
                    }
                    break;
                case 4:
                    if (firstPlayerChip > 0 && secondPlayerChip > 0 && thirdPlayerChip > 0 && fourthPlayerChip > 0) {
                        setFirstPlayerPrize((firstPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip)) * totalPrize);
                        setSecondPlayerPrize((secondPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip)) * totalPrize);
                        setThirdPlayerPrize((thirdPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip)) * totalPrize);
                        setFourthPlayerPrize((fourthPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip)) * totalPrize);
                        handleOpen();
                    } else {
                        alert("플레이어 칩수를 0개 이상 입력해주세요")
                    }
                    break;
                case 5:
                    if (firstPlayerChip > 0 && secondPlayerChip > 0 && thirdPlayerChip > 0 && fourthPlayerChip > 0 && fifthPlayerChip) {
                        setFirstPlayerPrize((firstPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip + fifthPlayerChip)) * totalPrize);
                        setSecondPlayerPrize((secondPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip + fifthPlayerChip)) * totalPrize);
                        setThirdPlayerPrize((thirdPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip + fifthPlayerChip)) * totalPrize);
                        setFourthPlayerPrize((fourthPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip + fifthPlayerChip)) * totalPrize);
                        setFifthPlayerPrize((fifthPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip + fourthPlayerChip + fifthPlayerChip)) * totalPrize);
                        handleOpen();
                    } else {
                        alert("플레이어 칩수를 0개 이상 입력해주세요")
                    }
                    break;
                default:
                    break;


            }
        } else {
            alert("총 프라이즈를 0이상 입력해주세요!")
        }
    }

    const u = 10000;

    return (
        <div className="App" style={{backgroundColor: "rgba(245,245,245,0.8)"}}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

            <div className="App">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            계산 결과(천반올림)
                        </Typography>
                        <Divider/>
                        <br />
                        <Row>
                            <Col span={6}><Typography variant={"subtitle1"}>1p</Typography> </Col>
                            <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{Math.round(firstPlayerPrize/u)*u} ₩</Typography></Row></Col>
                        </Row>
                        <Row>
                            <Col span={6}><Typography variant={"subtitle1"}>2p</Typography> </Col>
                            <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{Math.round(secondPlayerPrize/u)*u} ₩</Typography></Row></Col>
                        </Row>
                        {
                            playerNumber>=3 ?
                                <Row>
                                <Col span={6}><Typography variant={"subtitle1"}>3p</Typography> </Col>
                                <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{Math.round(thirdPlayerPrize/u)*u} ₩</Typography></Row></Col>
                                </Row>
                            :
                            <></>
                        }
                        {
                            playerNumber>=4 ?
                                <Row>
                                    <Col span={6}><Typography variant={"subtitle1"}>4p</Typography> </Col>
                                    <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{Math.round(fourthPlayerPrize/u)*u} ₩</Typography></Row></Col>
                                </Row>
                                :
                                <></>
                        }
                        {
                            playerNumber>=5 ?
                                <Row>
                                    <Col span={6}><Typography variant={"subtitle1"}>5p</Typography> </Col>
                                    <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{Math.round(fifthPlayerPrize/u)*u} ₩</Typography></Row></Col>
                                </Row>
                                :
                                <></>
                        }
                        <Divider />
                        <Row>
                            <Col span={6}><Typography variant={"subtitle1"}>합계</Typography> </Col>
                            <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{

                                (Math.round(fifthPlayerPrize/u)*u)
                                + (Math.round(fourthPlayerPrize/u)*u)
                                + (Math.round(thirdPlayerPrize/u)*u)
                                + (Math.round(secondPlayerPrize/u)*u)
                                + (Math.round(firstPlayerPrize/u)*u)

                            } ₩</Typography></Row></Col>
                        </Row>

                        <Button variant={"contained"} style={{position:"absolute",bottom:10, right:10, backgroundColor:"black"}} onClick={()=>{
                            handleClose();
                        }}>확인</Button>
                    </Box>
                </Modal>

                <Paper elevation={3}
                       style={{height: "25%", backgroundImage: `url(${backImage1})`, backgroundSize: "cover"}}>
                    <div style={kBackgroundG}>
                        <Row align={"middle"} style={{height: "100%", marginLeft: "20px"}}>
                            <div>
                                <Typography variant={"h4"} style={{color: "white"}}> 홀덤 프라이즈 계산기 </Typography>
                                <Typography variant={"h6"} style={{color: "white"}}> Hold'em Prize
                                    Calculator </Typography>
                            </div>
                        </Row>
                    </div>
                </Paper>

                {/*<Paper elevation={3}*/}
                {/*       style={{height: "25%", backgroundImage: `url("${backImage2}")`, backgroundSize: "cover"}}>*/}
                {/*    <div style={kBackgroundG}>*/}
                {/*        <Row justify={"end"} align={"bottom"} style={{height: "100%"}}>*/}
                {/*            <div>*/}
                {/*                <Typography variant={"body1"}*/}
                {/*                            style={{color: "white", marginRight: "10px", marginBottom: "10px"}}> 광고문의*/}
                {/*                    받습니다</Typography>*/}
                {/*            </div>*/}
                {/*        </Row>*/}
                {/*    </div>*/}
                {/*</Paper>*/}
                <div style={{width: "100%"}}>
                    <div style={{paddingTop: "20px", backgroundColor: "rgba(245,245,245,0.8)"}}></div>
                    <Paper style={{margin: "20px", marginTop: "0px"}}>
                        <div style={{padding: "20px"}}>
                            <Row>
                                <CssTextField fullWidth={true} placeholder="총 프라이즈 입력" variant="standard"
                                              type={"number"} onChange={(e) => {
                                    setTotalPrize(e.target.value * 1);
                                }}
                                              InputProps={{
                                                  endAdornment: <InputAdornment position="end">₩</InputAdornment>,
                                              }}
                                >
                                </CssTextField>
                            </Row>
                            <br/>
                            <div>
                                <Typography variant={"subtitle1"}>플레이어수 선택</Typography>
                                <ButtonGroup variant="contained">
                                    <Button style={{backgroundColor: "black", borderColor: "white"}} onClick={() => {
                                        setPlayerNumber(2);
                                    }}>2P</Button>
                                    <Button style={{backgroundColor: "black", borderColor: "white"}} onClick={() => {
                                        setPlayerNumber(3);
                                    }}>3P</Button>
                                    <Button style={{backgroundColor: "black", borderColor: "white"}} onClick={() => {
                                        setPlayerNumber(4);
                                    }}>4P</Button>
                                    <Button style={{backgroundColor: "black", borderColor: "white"}} onClick={() => {
                                        setPlayerNumber(5);
                                    }}>5P</Button>
                                </ButtonGroup>
                            </div>
                            <br/>
                            <div>
                                <Typography variant={"subtitle1"}>칩 개수 입력</Typography>
                                <CssTextField variant={"standard"} fullWidth={true} placeholder="1P 칩수" type={"number"}
                                              id = "input1"
                                              onChange={(e) => {
                                                  setFirstPlayerChip(e.target.value * 1);
                                              }} InputProps={{
                                    endAdornment: <InputAdornment position="end">개</InputAdornment>,
                                }} on />

                                <CssTextField variant={"standard"} fullWidth={true} placeholder="2P 칩수" type={"number"}
                                              id = "input2"
                                              onChange={(e) => {
                                                  setSecondPlayerChip(e.target.value * 1);
                                              }}
                                              InputProps={{
                                                  endAdornment: <InputAdornment position="end">개</InputAdornment>,
                                              }}/>

                                {playerNumber >= 3 ?
                                    <CssTextField variant={"standard"} fullWidth={true} placeholder="3P 칩수"
                                                  id = "input3"
                                                  type={"number"} onChange={(e) => {
                                        setThirdPlayerChip(e.target.value * 1);
                                    }}
                                                  InputProps={{
                                                      endAdornment: <InputAdornment position="end">개</InputAdornment>,
                                                  }}/> : <></>}

                                {playerNumber >= 4 ?
                                    <CssTextField variant={"standard"} fullWidth={true} placeholder="4P 칩수"
                                                  id = "input4"
                                                  type={"number"} onChange={(e) => {
                                        setFourthPlayerChip(e.target.value * 1);
                                    }}
                                                  InputProps={{
                                                      endAdornment: <InputAdornment position="end">개</InputAdornment>,
                                                  }}/> : <></>}

                                {playerNumber >= 5 ?
                                    <CssTextField variant={"standard"} fullWidth={true} placeholder="5P 칩수"
                                                  id = "input5"
                                                  type={"number"} onChange={(e) => {
                                        setFifthPlayerChip(e.target.value * 1);
                                    }}
                                                  InputProps={{
                                                      endAdornment: <InputAdornment position="end">개</InputAdornment>,
                                                  }}/> : <></>}

                            </div>
                            <br/>
                            <div>
                                <Button style={{backgroundColor: "black", borderColor: "white", color: "white"}}
                                        fullWidth={true} onClick={confirmResult}><b>결과보기</b></Button>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div style={{height:100}}></div>
                <Box style={{height:90, width:"100%", backgroundImage:`url("${backImage3}")`, backgroundSize:"cover", marginTop:20, bottom:0}}>
                    <div style={kBackgroundG}>
                        <Row justify={"end"} align={'bottom'} style={{height:"100%"}}><Typography variant={"caption"} style={{color:"white", marginBottom:10, marginRight:10}}>광고 및 기술 문의 / jrun2ng@gmail.com</Typography> </Row>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default App;
