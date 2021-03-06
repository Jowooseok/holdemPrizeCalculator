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
    height: 330,
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
    const [u, setU] = useState(10000);

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
                        alert("???????????? ????????? 0??? ?????? ??????????????????")
                    }
                    break;
                case 3:
                    if (firstPlayerChip > 0 && secondPlayerChip > 0 && thirdPlayerChip > 0) {
                        setFirstPlayerPrize((firstPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip)) * totalPrize);
                        setSecondPlayerPrize((secondPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip)) * totalPrize);
                        setThirdPlayerPrize((thirdPlayerChip / (firstPlayerChip + secondPlayerChip + thirdPlayerChip)) * totalPrize);
                        handleOpen();
                    } else {
                        alert("???????????? ????????? 0??? ?????? ??????????????????")
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
                        alert("???????????? ????????? 0??? ?????? ??????????????????")
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
                        alert("???????????? ????????? 0??? ?????? ??????????????????")
                    }
                    break;
                default:
                    break;


            }
        } else {
            alert("??? ??????????????? 0?????? ??????????????????!")
        }
    }
    
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
                            ?????? ??????({u===10000?"????????? ??????":"????????? ??????"})
                        </Typography>
                        <Divider/>
                        <br />
                        <Row>
                            <Col span={6}><Typography variant={"subtitle1"}>1p</Typography> </Col>
                            <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{(Math.round(firstPlayerPrize/u)*u).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Typography></Row></Col>
                        </Row>
                        <Row>
                            <Col span={6}><Typography variant={"subtitle1"}>2p</Typography> </Col>
                            <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{(Math.round(secondPlayerPrize/u)*u).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Typography></Row></Col>
                        </Row>
                        {
                            playerNumber>=3 ?
                                <Row>
                                <Col span={6}><Typography variant={"subtitle1"}>3p</Typography> </Col>
                                <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{(Math.round(thirdPlayerPrize/u)*u).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Typography></Row></Col>
                                </Row>
                            :
                            <></>
                        }
                        {
                            playerNumber>=4 ?
                                <Row>
                                    <Col span={6}><Typography variant={"subtitle1"}>4p</Typography> </Col>
                                    <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{(Math.round(fourthPlayerPrize/u)*u).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Typography></Row></Col>
                                </Row>
                                :
                                <></>
                        }
                        {
                            playerNumber>=5 ?
                                <Row>
                                    <Col span={6}><Typography variant={"subtitle1"}>5p</Typography> </Col>
                                    <Col span={18}><Row justify={"end"}><Typography variant={"body1"}>{(Math.round(fifthPlayerPrize/u)*u).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Typography></Row></Col>
                                </Row>
                                :
                                <></>
                        }
                        <Divider />
                        <Row>
                            <Col span={6}><Typography variant={"subtitle1"}><b>??????</b></Typography> </Col>
                            <Col span={18}><Row justify={"end"}><Typography variant={"body1"}><b>{

                                (
                                (Math.round(fifthPlayerPrize/u)*u)
                                + (Math.round(fourthPlayerPrize/u)*u)
                                + (Math.round(thirdPlayerPrize/u)*u)
                                + (Math.round(secondPlayerPrize/u)*u)
                                + (Math.round(firstPlayerPrize/u)*u)
                                ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

                            }</b> </Typography></Row></Col>
                        </Row>


                        <Button variant={"contained"} style={{position:"absolute",bottom:20, left:20, backgroundColor:"black"}} onClick={()=>{
                            if(u === 10000){
                                setU(1);
                            }else {
                                setU(10000);                                }
                            }
                        }>{u===10000?"????????? ??????":"????????? ??????"}</Button>
                        <Button variant={"contained"} style={{position:"absolute",bottom:20, right:20, backgroundColor:"black"}} onClick={()=>{
                            handleClose();
                        }}>??????</Button>
                    </Box>
                </Modal>

                <Paper elevation={3}
                       style={{height: "25%", backgroundImage: `url(${backImage1})`, backgroundSize: "cover"}}>
                    <div style={kBackgroundG}>
                        <Row align={"middle"} style={{height: "100%", marginLeft: "20px"}}>
                            <div>
                                <Typography variant={"h4"} style={{color: "white"}}> ?????? ???????????? ????????? </Typography>
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
                {/*                            style={{color: "white", marginRight: "10px", marginBottom: "10px"}}> ????????????*/}
                {/*                    ????????????</Typography>*/}
                {/*            </div>*/}
                {/*        </Row>*/}
                {/*    </div>*/}
                {/*</Paper>*/}
                <div style={{width: "100%"}}>
                    <div style={{paddingTop: "20px", backgroundColor: "rgba(245,245,245,0.8)"}}></div>
                    <Paper style={{margin: "20px", marginTop: "0px"}}>
                        <div style={{padding: "20px"}}>
                            <Row>
                                <CssTextField fullWidth={true} placeholder="??? ???????????? ??????" variant="standard"
                                              type={"number"} onChange={(e) => {
                                    setTotalPrize(e.target.value * 1);
                                }}
                                              // InputProps={{
                                              //     endAdornment: <InputAdornment position="end">???</InputAdornment>,
                                              // }}
                                >
                                </CssTextField>
                            </Row>
                            <br/>
                            <div>
                                <Typography variant={"subtitle1"}>??????????????? ??????</Typography>
                                <ButtonGroup variant="contained">

                                    {
                                        playerNumber === 2 ?
                                            <Button style={{backgroundColor: "black", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(2);
                                                    }}>2P</Button>
                                            :
                                            <Button style={{backgroundColor: "grey", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(2);
                                                    }}>2P</Button>

                                    }
                                    {
                                        playerNumber === 3 ?
                                            <Button style={{backgroundColor: "black", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(3);
                                                    }}>3P</Button>
                                            :
                                            <Button style={{backgroundColor: "grey", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(3);
                                                    }}>3P</Button>

                                    }
                                    {
                                        playerNumber === 4 ?
                                            <Button style={{backgroundColor: "black", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(4);
                                                    }}>4P</Button>
                                            :
                                            <Button style={{backgroundColor: "grey", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(4);
                                                    }}>4P</Button>

                                    }
                                    {
                                        playerNumber === 5 ?
                                            <Button style={{backgroundColor: "black", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(5);
                                                    }}>5P</Button>
                                            :
                                            <Button style={{backgroundColor: "grey", borderColor: "white"}}
                                                    onClick={() => {
                                                        setPlayerNumber(5);
                                                    }}>5P</Button>

                                    }
                                </ButtonGroup>
                            </div>
                            <br/>
                            <div>
                                <Typography variant={"subtitle1"}>??? ?????? ??????</Typography>
                                <CssTextField variant={"standard"} fullWidth={true} placeholder="1P ??????" type={"number"}
                                              id = "input1"
                                              onChange={(e) => {
                                                  setFirstPlayerChip(e.target.value * 1);
                                              }} InputProps={{
                                    endAdornment: <InputAdornment position="end">???</InputAdornment>,
                                }} on />

                                <CssTextField variant={"standard"} fullWidth={true} placeholder="2P ??????" type={"number"}
                                              id = "input2"
                                              onChange={(e) => {
                                                  setSecondPlayerChip(e.target.value * 1);
                                              }}
                                              InputProps={{
                                                  endAdornment: <InputAdornment position="end">???</InputAdornment>,
                                              }}/>

                                {playerNumber >= 3 ?
                                    <CssTextField variant={"standard"} fullWidth={true} placeholder="3P ??????"
                                                  id = "input3"
                                                  type={"number"} onChange={(e) => {
                                        setThirdPlayerChip(e.target.value * 1);
                                    }}
                                                  InputProps={{
                                                      endAdornment: <InputAdornment position="end">???</InputAdornment>,
                                                  }}/> : <></>}

                                {playerNumber >= 4 ?
                                    <CssTextField variant={"standard"} fullWidth={true} placeholder="4P ??????"
                                                  id = "input4"
                                                  type={"number"} onChange={(e) => {
                                        setFourthPlayerChip(e.target.value * 1);
                                    }}
                                                  InputProps={{
                                                      endAdornment: <InputAdornment position="end">???</InputAdornment>,
                                                  }}/> : <></>}

                                {playerNumber >= 5 ?
                                    <CssTextField variant={"standard"} fullWidth={true} placeholder="5P ??????"
                                                  id = "input5"
                                                  type={"number"} onChange={(e) => {
                                        setFifthPlayerChip(e.target.value * 1);
                                    }}
                                                  InputProps={{
                                                      endAdornment: <InputAdornment position="end">???</InputAdornment>,
                                                  }}/> : <></>}

                            </div>
                            <br/>
                            <div>
                                <Button style={{backgroundColor: "black", borderColor: "white", color: "white"}}
                                        fullWidth={true} onClick={confirmResult}><b>????????????</b></Button>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div style={{height:100}}></div>
                <Col xs={24} sm={0}>
                <Box style={{height:90, width:"100%", backgroundImage:`url("${backImage3}")`, backgroundSize:"cover", marginTop:20, bottom:0}}>
                    <div style={kBackgroundG}>
                        <Row justify={"end"} align={'bottom'} style={{height:"100%"}}><Typography variant={"caption"} style={{color:"white", marginBottom:10, marginRight:10}}>?????? ??? ?????? ?????? / jrun2ng@gmail.com</Typography> </Row>
                    </div>
                </Box>
                </Col>
                <Col xs={0} sm={24}>
                    <Box  position={'fixed'} style={{height:90, width:"100%", backgroundImage:`url("${backImage3}")`, backgroundSize:"cover", marginTop:20, bottom:0}}>
                        <div style={kBackgroundG}>
                            <Row justify={"end"} align={'bottom'} style={{height:"100%"}}><Typography variant={"caption"} style={{color:"white", marginBottom:10, marginRight:10}}>?????? ??? ?????? ?????? / jrun2ng@gmail.com</Typography> </Row>
                        </div>
                    </Box>
                </Col>
            </div>
        </div>
    );
}

export default App;
