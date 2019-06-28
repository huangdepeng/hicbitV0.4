/*
 hicbit package
*/
//% weight=10 icon="\uf211" color=#6A5ACD
namespace hicbit {

    // export enum hicbit_Colors {
    //     //% block="Red"
    //     Red = 0x01,
    //     //% block="Green"
    //     Green = 0x02,
    //     //% block="Blue"
    //     Blue = 0x03,
    //     //% block="Black"
    //     Black = 0x04,
    //     //% block="White"
    //     White = 0x05,
    //     //% block="None"
    //     None = 0x06
    // }

    export enum hicbit_lineFollower {
        //% blockId="S1_OUT_S2_OUT" block="Sensor1 and sensor2 are out black line"
        S1_OUT_S2_OUT = 0x00,
        //% blockId="S1_OUT_S2_IN" block="Sensor2 in black line but sensor1 not"
        S1_OUT_S2_IN = 0x01,
        //% blockId="S1_IN_S2_OUT" block="Sensor1 in black line but sensor2 not"
        S1_IN_S2_OUT = 0x02,
        //% blockId="S1_IN_S2_IN" block="Sensor1 and sensor2 are in black line "
        S1_IN_S2_IN = 0x03
    }

    // export enum hicbit_colorSensorPort {
    //     //% block="Port 4"
    //     port4 = 0x04
    // }

    export enum hicbit_Servos {
        //% block="servo 1"
        Servo1 = 0x01,
        //% block="servo 2"
        Servo2 = 0x02
    }

    export enum hicbit_ultrasonicPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05,
        //% block="Port 7"
        port7 = 0x06,
        //% block="Port 8"
        port8 = 0x07

    }

    // export enum hicbit_touchKeyPort {
    //     //% block="Port 1"
    //     port1 = 0x01,
    //     //% block="Port 2"
    //     port2 = 0x02,
    //     //% block="Port 3"
    //     port3 = 0x03
    // }

    export enum hicbit_lineFollowPort {
        //% block="Port 1"
        port1 = 0x01
    }


    export enum hicbit_PinIOStatus {
        //% block="Low"
        Low = 0x00,
        //% block="High"
        Hight = 0x01
    }

    export enum hicbit_LineFollowerSensor {
        //% block="Sensor 1"
        LFSensor_1 = 0x00,
        //% block="Sensor 2"
        LFSensor_2 = 0x01
    }

    export enum hicbit_busServoPort {
        //% block="Port 6"
        port6 = 0x06
    }

    export enum hicbit_knobPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05
    }
	
    export enum hicbit_photosensitivePort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05
    }
	
    export enum hicbit_PhotosensitiveSensor {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,
        //% block="Port 5"
        port5 = 0x05,
        //% block="Port 7"
        port7 = 0x06,
        //% block="Port 8"
        port8 = 0x07	    
    }

    export enum hicbit_fanPort {
        //% block="Port 1"
        port1,
        //% block="Port 2"
        port2
    }

    export enum hicbit_servorange {
        //% block="180"
        range1 = 180,
        //% block="270"
        range2 =270
    }
	
    // export enum hicbit_digitaltubePort {
    //     //% block="Port 1"
    //     port1 = 0x01,
    //     //% block="Port 2"
    //     port2 = 0x02
    // }
	
    export enum hicbit_CmdType {
        //% block="Invalid command"
        NO_COMMAND = 0,
        //% block="car run"
        CAR_RUN = 1,
        //% block="robot run"   
        ROBOT_RUN = 1,
        //% block="Servo"
        SERVO = 2,
        //% block="Ultrasonic distance"
        ULTRASONIC = 3,
        //% block="Temperature"
        TEMPERATURE = 4,
        //% block="Sound"
        SOUND = 5,
        //% block="Light"
        LIGHT = 6,
        //% block="Voltage"
        BAT = 7,
        //% block="Rgb light"
        RGB_LIGHT = 8,
        //% block="Honk horn"
        DIDI = 9,
        //% block="Read firmware version"
        VERSION = 10,
        //% block="Read angle"
        READ_ANGLE = 11,
        //% block="Light belt"        
        RGB_BELT = 12,
        //% block="WIFI mode"
        WIFI_MODE = 13,
        //% block="Get mac"
        GET_MAC = 14,
        //% block="Get hand cmd"
        GET_HAND_CMD = 15
     }

    export enum hicbit_CarRunCmdType {
        //% block="Stop"
        STOP = 0,
        //% block="Go ahead"
        GO_AHEAD,
        //% block="Back"
        GO_BACK,
        //% block="Turn left"
        TURN_LEFT,
        //% block="Turn right"
        TURN_RIGHT,
        //% block="Go ahead slowly"
        GO_AHEAD_SLOW,
        //% block="Turn left slowly"
        TURN_LEFT_SLOW,
        //% block="Turn right slowly"
        TURN_RIGHT_SLOW,
        //% block="Invalid command"
        COMMAND_ERRO
    }

    export let NEW_LINE = "\r\n";

    export enum Linenum {
        //% block="first_line"
        first_line = 0x01,
        //% block="second_line"
        second_line = 0x02,
        //% block="Third_line"
        Third_line = 0x03,
        //% block="Fourth_line"
        Fourth_line = 0x04,
        //% block="Fifth_line"
        Fifth_line = 0x05,
        //% block="Sixth_line"
        Sixth_line = 0x06,
        //% block="Seventh_line"
        Seventh_line = 0x07,
        //% block="Eighth_line"
        Eighth_line = 0x08
    }

    export enum unit {
        //% block="m"
        m = 0x01,
        //% block="cm"
        cm = 0x02,
        //% block="mm"
        mm = 0x03,
        //% block="null1"
        null1 = 0x04
    }
    
    export enum buzzer {
        //% block="ring"
        ring = 0x01,
        //% block="Not_ringing"
        Not_ringing = 0x02,
        
    }


    /**
        * Buzzer
        */
    //% weight=99 blockId=Buzzer block="Buzzer(P0):| %buzzer"
    export function Buzzer(buz:buzzer):void{
        switch (buz) {
            case hicbit.buzzer.ring:
                pins.digitalWritePin(DigitalPin.P0, 1);
                break;
            case hicbit.buzzer.Not_ringing:
                pins.digitalWritePin(DigitalPin.P0, 0);
                break;
        }
    }



    /**
        * Display clear
        */
    //% weight=99 blockId=Clearscreen block="Clear screen"
    export function Clearscreen():void{
        let num: number = 0;
        serial.writeString(NEW_LINE);
        serial.writeString(num.toString());
    }

    /**
        * Display ultrasonic distance
        */
    //% weight=98 blockId=setDisplay block="Display %line |text: %text | value: %value| unit1: %unit1"
    export function setDisplay(line: Linenum, text: string, value: number = 0, unit1: unit): void {
        let num: number = 1;
        let text2: string = "   ";
        switch (line) {
            case Linenum.first_line:
                num = 1;
                break;
            case Linenum.second_line:
                num = 2;
                break;
            case Linenum.Third_line:
                num = 3;
                break;
            case Linenum.Fourth_line:
                num = 4;
                break;
            case Linenum.Fifth_line:
                num = 5;
                break;
            case Linenum.Sixth_line:
                num = 6;
                break;
            case Linenum.Seventh_line:
                num = 7;
                break;
            case Linenum.Eighth_line:
                num = 8;
                break;
        }
        serial.writeString(num.toString());
        if (!text) text = "";
        serial.writeString(text);
        serial.writeString(value.toString());
        switch (unit1) {
            case unit.m:
                text2 = "m  ";
                break;
            case unit.cm:
                text2 = "cm  ";
                break;
            case unit.mm:
                text2 = "mm  ";
                break;
            case unit.null1:
                text2 = "   ";
                break;
        }
        serial.writeString(text2);
        serial.writeString(NEW_LINE);
    }

    /**
     * hicbit initialization, please execute at boot time
    */
    //% weight=100 blockId=hicbit_Init block="Initialize hicbit"
    export function hicbit_Init() {
        // hicbit_initRGBLight();
        serial.redirect(
            SerialPin.P12,
            SerialPin.P8,
            BaudRate.BaudRate115200);

        basic.forever(() => {
            getHandleCmd();
        });
        // basic.pause(2000);
    }


    let handleCmd: string = "";
    let currentVoltage: number = 0;
    let volume: number = 0;
    let lhRGBLight: hicbitRGBLight.LHhicbitRGBLight;
    let lhRGBLightBelt: hicbitRGBLight.LHhicbitRGBLight;

    let P14_ad = 0;


    let MESSAGE_MAC = 0xff;
    let MESSAGE_ANGLE = 0x100;

    let i2cPortValid: boolean = true;
    let connectStatus: boolean = false;

    let servo1Angle: number = 0xfff;
    let servo2Angle: number = 0xfff;

    let macStr: string = "";
    let actiongroup_finished = true;
    
    // let Digitaltube:hicbit_TM1640LEDs
    // let TM1640_CMD1 = 0x40;
    // let TM1640_CMD2 = 0xC0;
    // let TM1640_CMD3 = 0x80;
    // let _SEGMENTS = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];
	
    /**
    * Get the handle command.
    */
    function getHandleCmd() {
        let charStr: string = serial.readString();
        handleCmd = handleCmd.concat(charStr);
        let cnt: number = countChar(handleCmd, "$");
        if (cnt == 0)
            return;
        let index = findIndexof(handleCmd, "$", 0);
        if (index != -1) {
            let cmd: string = handleCmd.substr(0, index);
            if (cmd.charAt(0).compare("A") == 0) {
                if (cmd.length == 7) {
                    let arg1Int: number = strToNumber(cmd.substr(1, 2));
                    let arg2Int: number = strToNumber(cmd.substr(3, 2));
                    let arg3Int: number = strToNumber(cmd.substr(5, 2));

                    P14_ad = arg1Int;

                    if (arg3Int != -1) {
                        currentVoltage = arg3Int * 10353 / 400;
                        currentVoltage = Math.round(currentVoltage);
                    }

                    if (arg2Int != -1) {
                        volume = arg2Int;
                    }
                } else if (cmd.length == 5) {
                    actiongroup_finished = true;
                } else {

                }
            }
            if (cmd.charAt(0).compare("C") == 0 && cmd.length == 11) {
                if (lhRGBLightBelt != null) {
                    for (let i = 0; i < 10; i++) {
                        let color = converOneChar(cmd.charAt(i + 1));
                        if (color != -1)
                            lhRGBLightBelt.setBeltPixelColor(i, color);
                    }
                    lhRGBLightBelt.show();
                }
            }
            if (cmd.charAt(0).compare("M") == 0 && cmd.length == 18) {
                macStr = cmd.substr(1, 17);
                control.raiseEvent(MESSAGE_MAC, 1);
            }
            if (cmd.compare("WIFI_S_CONNECT") == 0) {
                connectStatus = true;
            }
            if (cmd.compare("WIFI_S_DISCONNECT") == 0) {
                connectStatus = false;
            }
            if (cmd.charAt(0).compare("S") == 0 && cmd.length == 5) {
                let arg1Int: number = strToNumber(cmd.substr(1, 1));
                let arg2Str = cmd.substr(2, 3);
                if (arg2Str.compare("XXX") == 0) {
                    return;
                }
                let arg2Int: number = 0;
                if (arg2Str.charAt(0).compare("F") != 0) {
                    arg2Int = strToNumber(arg2Str);
                }
                if (arg2Int > 1000)
                    arg2Int = 1000;
                if (arg1Int == 1) {
                    servo1Angle = mapRGB(arg2Int, 0, 1000, 0, 240);
                    servo1Angle -= 120;
                    control.raiseEvent(MESSAGE_ANGLE, 1);
                }
                else if (arg1Int == 2) {
                    servo2Angle = mapRGB(arg2Int, 0, 1000, 0, 240);
                    servo2Angle -= 120;
                    control.raiseEvent(MESSAGE_ANGLE, 2);
                }
            }
        }
        handleCmd = "";
    }

    function checkADPortValue(value: number): number {
        if (value == -1)
            return 2;
        if (value <= 0x2E)
            return 0;
        else if (value >= 0xAA)
            return 1;
        else
            return 2;//未识别电平状态
    }

    function findIndexof(src: string, strFind: string, startIndex: number): number {
        for (let i = startIndex; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                return i;
            }
        }
        return -1;
    }

    function countChar(src: string, strFind: string): number {
        let cnt: number = 0;
        for (let i = 0; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                cnt++;
            }
        }
        return cnt;
    }

    function strToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++) {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;
            if (i > 0)
                num *= 16;
            num += tmp;
        }
        return num;
    }

    function decStrToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++) {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;
            if (i > 0)
                num *= 10;
            num += tmp;
        }
        return num;
    }

    function converOneChar(str: string): number {
        if (str.compare("0") >= 0 && str.compare("9") <= 0) {
            return parseInt(str);
        }
        else if (str.compare("A") >= 0 && str.compare("F") <= 0) {
            if (str.compare("A") == 0) {
                return 10;
            }
            else if (str.compare("B") == 0) {
                return 11;
            }
            else if (str.compare("C") == 0) {
                return 12;
            }
            else if (str.compare("D") == 0) {
                return 13;
            }
            else if (str.compare("E") == 0) {
                return 14;
            }
            else if (str.compare("F") == 0) {
                return 15;
            }
            return -1;
        }
        else
            return -1;
    }

    /**
    * Set the angle of servo 1 to 8, range of 0~270 degree
    */
    //% weight=99 blockId=setServo block="Set pwm servo range|range %range|index %index|angle %angle|duration %duration"
    //% angle.min=0 angle.max=270
    //% inlineInputMode=inline
    export function setServo(range:hicbit_servorange, index: number = 1, angle: number, duration: number = 300) {
	    
        let position = mapRGB(angle, 0, range, 500, 2500);

        let buf = pins.createBuffer(10);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x08;
        buf[3] = 0x03;//cmd type
        buf[4] = 0x01;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        buf[7] = index;
        buf[8] = position & 0xff;
        buf[9] = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
    }


    /**
    * Set the angle of servo 1 to 8, range of 0~270 degree
    */
    //% weight=98 blockId=setArrayServo block="Set pwm servo range|range %range|index(array type) %index|angle(array type) %angle|duration %duration"
    //% angle.min=0 angle.max=270
    //% inlineInputMode=inline
    export function setArrayServo(range:hicbit_servorange, index: number[], angle: number[], duration: number) {
        let buf = pins.createBuffer(index.length *3 + 7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = index.length * 3 + 5;
        buf[3] = 0x03;//cmd type
        buf[4] = index.length;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        for(let i = 0;i < index.length;i++)
        {
            let position = mapRGB(angle[i], 0, range, 500, 2500)
            buf[7 + 3 * i] = index[i];
            buf[8 + 3 * i] = position & 0xff;
            buf[9 + 3 * i] = (position >> 8) & 0xff;
        }
        serial.writeBuffer(buf);
    }
    /**
    * Set the angle of bus servo 1 to 12, range of -120~120 degree
    */
    //% weight=97 blockId=hicbit_setBusServo block="Set bus servo|port %port|index(array type) %index|angle(array type)(-120~120) %angle|duration %duration"
    //% angle.min=-120 angle.max=120
    //% index.defl= [1]
    export function hicbit_setBusServo(port: hicbit_busServoPort, index: number[], angle: number[], duration: number) {
        for (let i = 0; i < angle.length; i++) {
	    if (angle[i] > 120 || angle[i] < -120) {
            return;
	    }
	    angle[i] += 120;
            angle[i] = mapRGB(angle[i], 0, 240, 0, 1000);
	}
	    
        let buf = pins.createBuffer(3*index.length+7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = (index.length*3 + 5) & 0xff;
        buf[3] = 0x35;//cmd type DEC 54
        buf[4] = (index.length) & 0xff;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
	for (let i = 0; i < index.length; i++) {
	    buf[7 + i*3] = index[i];
	    buf[8 + i*3] = angle[i] & 0xff;
	    buf[9 + i*3] = (angle[i] >> 8) & 0xff;
	}
        serial.writeBuffer(buf);    
    }

    /**
    * Set the angle of bus servo 1 to 8, range of -120~120 degree
    */
    /*
    //% weight=98 blockId=hicbit_setBusServo block="Set bus servo|port %port|index %index|angle(-120~1200) %angle|duration %duration"
    //% angle.min=-120 angle.max=120

    export function hicbit_setBusServo(port: hicbit_busServoPort, index: number, angle: number, duration: number) {
        if (angle > 120 || angle < -120) {
            return;
        }

        angle += 120;

        let position = mapRGB(angle, 0, 240, 0, 1000);

        let buf = pins.createBuffer(10);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x08;
        buf[3] = 0x35;//cmd type DEC 53
        buf[4] = 0x01;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        buf[7] = index;
        buf[8] = position & 0xff;
        buf[9] = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
    }
    */
	
    /**
    * Set the servo controller to run a actiongroup
    * @param times Running times. eg: 1
    */
    //% weight=96 blockId=hicbit_runActionGroup block="Run ActionGroup|index %index|times %times"
    export function hicbit_runActionGroup(index: number, times: number = 1) {

        let buf = pins.createBuffer(7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x06;//cmd type CMD_ACTION_GROUP_RUN
        buf[4] = index & 0xff;
        buf[5] = times & 0xff;
        buf[6] = (times >> 8) & 0xff;

        actiongroup_finished = false;
        serial.writeBuffer(buf);
    }
	
    /**
    * Stop running actiongroup
    */
    //% weight=95 blockId=hicbit_stopnActionGroup block="Stop ActionGroup"
    export function hicbit_stopActionGroup() {

        let buf = pins.createBuffer(7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x02;
        buf[3] = 0x07;//cmd type CMD_ACTION_GROUP_STOP
	    
	actiongroup_finished = false;
        serial.writeBuffer(buf);
    }
	
    /**
     * Wait for Actiongroup Finishing
     */
    //% weight=94 blockId=hicbit_actionRunover block="Action run over"
    export function hicbit_actionRunover(): boolean {
        // let ret = false;
        if (actiongroup_finished == true) {
            // ret = true;
            actiongroup_finished = true;
        }
        else {
            actiongroup_finished = false;
        }
        return actiongroup_finished;
    }

	
    /**
     * Send read hicbit servos angle command
     */
    //% weight=92 blockId=hicbit_readAngle block="Send |%servo|angle command "
    export function hicbit_readAngle(servo: hicbit_Servos) {
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x05;
        buf[5] = servo;
        serial.writeBuffer(buf);
    }


    /**
     * Do someting when hicbit receive angle
     * @param body code to run when event is raised
     */
    //% weight=90 blockId=onhicbit_getAngle block="on hicbit|%servo|get angle"
    export function onhicbit_getAngle(servo: hicbit_Servos, body: Action) {
        control.onEvent(MESSAGE_ANGLE, servo, body);
    }


    /**
     *  Get servos angle
     */
    //% weight=88 blockId=getServosAngle blockGap=50 block="Get|%servo|angle(-120~120)"
    export function getServosAngle(servo: hicbit_Servos): number {
        if (servo == hicbit_Servos.Servo1) {
            return servo1Angle;
        }
        else if (servo == hicbit_Servos.Servo2) {
            return servo2Angle;
        }
        else
            return 0xFFF;
    }
    
    /**
     *  Send robot attitude to the servo controller
     *  @param pitch eg: 0
     *  @param roll eg: 0
     */
    //% weight=91 blockId=hicbit_sendAttitude block="Send pitch|%pitch|and roll|%roll"
   /*
    export function hicbit_sendAttitude(pitch: number, roll: number) {
        pitch < -90 ? -90 : pitch;
        pitch > 90 ? 90 : pitch;
        roll < -90 ? -90 : roll;
        roll > 90 ? 90 : roll;

        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x5A;
        buf[4] = pitch;
        buf[5] = roll;
        serial.writeBuffer(buf);
    }
    */
	
    /**
    *	Set the speed of the number 1 motor and number 2 motor, range of -100~100, that can control the tank to go advance or turn of.
    */
    //% weight=86 blockId=hicbit_setMotorSpeed  block="Set motor1 speed(-100~100)|%speed1|and motor2|speed %speed2"
    //% speed1.min=-100 speed1.max=100
    //% speed2.min=-100 speed2.max=100
    export function hicbit_setMotorSpeed(speed1: number, speed2: number) {
        if (speed1 > 100 || speed1 < -100 || speed2 > 100 || speed2 < -100) {
            return;
        }
        speed1 = speed1 * -1;
        speed2 = speed2 * -1;
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x32;//cmd type
        buf[4] = speed1;
        buf[5] = speed2;
        serial.writeBuffer(buf);
    }

    /**
    *	Set the speed of the fan, range of -100~100.
    */
    //% weight=84 blockId=hicbit_setFanSpeed  block="Set |%port fan speed(-100~100)|%speed1"
    //% speed1.min=-100 speed1.max=100
    export function hicbit_setFanSpeed(port: hicbit_fanPort, speed1: number) {
        if (speed1 > 100 || speed1 < -100) {
            return;
        }
        let pin1 = AnalogPin.P1;
        let pin2 = AnalogPin.P0;

        if (port == hicbit_fanPort.port2) {
            pin1 = AnalogPin.P2;
            pin2 = AnalogPin.P13;
        }
        if (speed1 < 0) {
            pins.analogWritePin(pin2, 0);
            pins.analogWritePin(pin1, pins.map(-speed1, 0, 100, 0, 1023));
        }
        else if (speed1 > 0) {
            pins.analogWritePin(pin1, 0);
            pins.analogWritePin(pin2, pins.map(speed1, 0, 100, 0, 1023));
        }
        else {
            pins.analogWritePin(pin2, 0);
            pins.analogWritePin(pin1, 0);
        }

    }

    // /**
    // * Get the volume level detected by the sound sensor, range 0 to 255
    // */
    // //% weight=82 blockId=hicbit_getSoundVolume block="Sound volume"
    // export function hicbit_getSoundVolume(): number {
    //     return volume;
    // }

    /**
     *  Get hicbit current voltage,the unit is mV
    */
    //% weight=80 blockGap=50 blockId=hicbit_getBatVoltage block="Get hicbit current voltage (mV)"
    export function hicbit_getBatVoltage(): number {
        return currentVoltage;
    }
	
    // /**
    //     * TM1640 LED display
    //     */
    // export class hicbit_TM1640LEDs {
    //     buf: Buffer;
    //     clk: DigitalPin;
    //     dio: DigitalPin;
    //     _ON: number;
    //     brightness: number;
    //     count: number;  // number of LEDs

    //     /**
    //      * initial TM1640
    //      */
    //     init(): void {
    //         pins.digitalWritePin(this.clk, 0);
    //         pins.digitalWritePin(this.dio, 0);
    //         this._ON = 8;
    //         this.buf = pins.createBuffer(this.count);
    //         this.clear();
    //     }

    //     /**
    //      * Start 
    //      */
    //     _start() {
    //         pins.digitalWritePin(this.dio, 0);
    //         pins.digitalWritePin(this.clk, 0);
    //     }

    //     /**
    //      * Stop
    //      */
    //     _stop() {
    //         pins.digitalWritePin(this.dio, 0);
    //         pins.digitalWritePin(this.clk, 1);
    //         pins.digitalWritePin(this.dio, 1);
    //     }

    //     /**
    //      * send command1
    //      */
    //     _write_data_cmd() {
    //         this._start();
    //         this._write_byte(TM1640_CMD1);
    //         this._stop();
    //     }

    //     /**
    //      * send command3
    //      */
    //     _write_dsp_ctrl() {
    //         this._start();
    //         this._write_byte(TM1640_CMD3 | this._ON | this.brightness);
    //         this._stop();
    //     }

    //     /**
    //      * send a byte to 2-wire interface
    //      */
    //     _write_byte(b: number) {
    //         for (let i = 0; i < 8; i++) {
    //             pins.digitalWritePin(this.clk, 0);
    //             pins.digitalWritePin(this.dio, (b >> i) & 1);
    //             pins.digitalWritePin(this.clk, 1);

    //         }
    //         pins.digitalWritePin(this.clk, 1);
    //         pins.digitalWritePin(this.clk, 0);
    //     }

    //     intensity(val: number = 7) {
    //         if (val < 1) {
    //             this.off();
    //             return;
    //         }
    //         if (val > 8) val = 8;
    //         this._ON = 8;
    //         this.brightness = val - 1;
    //         this._write_data_cmd();
    //         this._write_dsp_ctrl();
    //     }

    //     /**
    //      * set data to TM1640, with given bit
    //      */
    //     _dat(bit: number, dat: number) {
    //         this._write_data_cmd();
    //         this._start();
    //         this._write_byte(TM1640_CMD2 | (bit % this.count))
    //         this._write_byte(dat);
    //         this._stop();
    //         this._write_dsp_ctrl();
    //     }


    //     showbit(num: number = 5, bit: number = 0) {
    //         this.buf[bit % this.count] = _SEGMENTS[num % 16]
    //         this._dat(bit, _SEGMENTS[num % 16])
    //     }

    //     showNumber(num: number) {
    //         if (num < 0) {
    //             this._dat(0, 0x40) // '-'
    //             num = -num
    //         }
    //         else
    //             this.showbit(Math.idiv(num, 1000) % 10)
    //         this.showbit(num % 10, 3)
    //         this.showbit(Math.idiv(num, 10) % 10, 2)
    //         this.showbit(Math.idiv(num, 100) % 10, 1)
    //     }

    //     showHex(num: number) {
    //         if (num < 0) {
    //             this._dat(0, 0x40) // '-'
    //             num = -num
    //         }
    //         else
    //             this.showbit((num >> 12) % 16)
    //         this.showbit(num % 16, 3)
    //         this.showbit((num >> 4) % 16, 2)
    //         this.showbit((num >> 8) % 16, 1)
    //     }


    //     showDP(bit: number = 1, show: boolean = true) {
    //         bit = bit % this.count
    //         if (show) this._dat(bit, this.buf[bit] | 0x80)
    //         else this._dat(bit, this.buf[bit] & 0x7F)
    //     }

    //     clear() {
    //         for (let i = 0; i < this.count; i++) {
    //             this._dat(i, 0)
    //             this.buf[i] = 0
    //         }
    //     }

    //     on() {
    //         this._ON = 8;
    //         this._write_data_cmd();
    //         this._write_dsp_ctrl();
    //     }

    //     off() {
    //         this._ON = 0;
    //         this._write_data_cmd();
    //         this._write_dsp_ctrl();
    //     }
    // }
    // /**
    //  * 创建 TM1640 对象.
    //  * @param clk the CLK pin for TM1640, eg: DigitalPin.P1
    //  * @param dio the DIO pin for TM1640, eg: DigitalPin.P2
    //  * @param intensity the brightness of the LED, eg: 7
    //  * @param count the count of the LED, eg: 4
    //  */
    // function hicbit_TM1640create(port: hicbit_digitaltubePort, intensity: number, count: number): hicbit_TM1640LEDs {
    //     let digitaltube = new hicbit_TM1640LEDs();
    //     switch (port) {
    //         case hicbit_digitaltubePort.port1:
    //             digitaltube.clk = DigitalPin.P2;
    //             digitaltube.dio = DigitalPin.P1;
    //             break;
    //         case hicbit_digitaltubePort.port2:
    //             digitaltube.clk = DigitalPin.P14;
    //             digitaltube.dio = DigitalPin.P13;
    //             break;
    //     }

    //     if ((count < 1) || (count > 5)) count = 4;
    //     digitaltube.count = count;
    //     digitaltube.brightness = intensity;
    //     digitaltube.init();
    //     return digitaltube;
    // }

//   /**
//      * @param clk the CLK pin for TM1640, eg: DigitalPin.P1
//      * @param dio the DIO pin for TM1640, eg: DigitalPin.P2
//      * @param intensity the brightness of the LED, eg: 7
//      * @param count the count of the LED, eg: 4
//      */
//     //% weight=77 blockId=hicbit_digitaltube block="digitaltube|%port|intensity %intensity|LED count %count"
//     export function hicbit_digitaltube(port: hicbit_digitaltubePort, intensity: number, count: number) {
//         Digitaltube = hicbit_TM1640create(port, intensity, count);
//     }

//     /**
//      * show a number. 
//      * @param num is a number, eg: 0
//      */
//     //% weight=76 blockId=hicbit_showNumber block="digitaltube show number| %num"
//     export function hicbit_showNumber(num: number)  {
//         Digitaltube.showNumber(num);
//     }

//     /**
//      * show a number in given position. 
//      * @param num number will show, eg: 5
//      * @param bit the position of the LED, eg: 0
//      */
//     //% weight=75 blockId=hicbit_showbit block="digitaltube show digit| %num|at %bit"
//     export function hicbit_showbit(num: number = 5, bit: number = 0) {
//         Digitaltube.showbit(num, bit);
//     }

//     /**
//      * show a hex number. 
//      * @param num is a hex number, eg: 0
//      */
//     //% weight=74 blockId=hicbit_showhex block="digitaltube show hex number| %num"
//     export function hicbit_showhex(num: number) {
//         Digitaltube.showHex(num);
//     }

//     /**
//      * show or hide dot point. 
//      * @param bit is the position, eg: 1
//      * @param show is show/hide dp, eg: true
//      */
//     //% weight=73 blockId=hicbit_showDP block="digitaltube DotPoint at| %bit|show %show"
//     export function hicbit_showDP(bit: number = 1, show: boolean = true) {
//         Digitaltube.showDP(bit, show);
//     } 

//     /**
//      * set TM1640 intensity, range is [0-8], 0 is off.
//      * @param val the brightness of the TM1640, eg: 7
//      */
//     //% weight=72 blockId=hicbit_intensity block=" digitaltube set intensity %val"
//     export function hicbit_intensity(val: number = 7) {
//         Digitaltube.intensity(val);
//     } 

//     /**
//      * turn off LED. 
//      */
//     //% weight=71 blockId=hicbit_off block="turn off digitaltube"
//     export function hicbit_off() {
//         Digitaltube.off();
//     }

//     /**
//      * turn on LED. 
//      */
//     //% weight=70 blockId=hicbit_on block="turn on digitaltube"
//     export function hicbit_on() {
//         Digitaltube.on();
//     }

//     /**
//      * clear LED. 
//      */
//     //%weight=69 blockId=hicbit_clear blockGap=50 block="clear digitaltube"
//     export function hicbit_clear() {
//         Digitaltube.clear();
//     }  

    const APDS9960_I2C_ADDR = 0x39;
    const APDS9960_ID_1 = 0xA8;
    const APDS9960_ID_2 = 0x9C;
    /* APDS-9960 register addresses */
    const APDS9960_ENABLE = 0x80;
    const APDS9960_ATIME = 0x81;
    const APDS9960_WTIME = 0x83;
    const APDS9960_AILTL = 0x84;
    const APDS9960_AILTH = 0x85;
    const APDS9960_AIHTL = 0x86;
    const APDS9960_AIHTH = 0x87;
    const APDS9960_PERS = 0x8C;
    const APDS9960_CONFIG1 = 0x8D;
    const APDS9960_PPULSE = 0x8E;
    const APDS9960_CONTROL = 0x8F;
    const APDS9960_CONFIG2 = 0x90;
    const APDS9960_ID = 0x92;
    const APDS9960_STATUS = 0x93;
    const APDS9960_CDATAL = 0x94;
    const APDS9960_CDATAH = 0x95;
    const APDS9960_RDATAL = 0x96;
    const APDS9960_RDATAH = 0x97;
    const APDS9960_GDATAL = 0x98;
    const APDS9960_GDATAH = 0x99;
    const APDS9960_BDATAL = 0x9A;
    const APDS9960_BDATAH = 0x9B;
    const APDS9960_POFFSET_UR = 0x9D;
    const APDS9960_POFFSET_DL = 0x9E;
    const APDS9960_CONFIG3 = 0x9F;
    const APDS9960_GCONF4 = 0xAB;
    const APDS9960_AICLEAR = 0xE7;


    /* LED Drive values */
    const LED_DRIVE_100MA = 0;

    /* ALS Gain (AGAIN) values */
    const AGAIN_4X = 1;

    /* Default values */
    const DEFAULT_ATIME = 219;    // 103ms
    const DEFAULT_WTIME = 246;    // 27ms
    const DEFAULT_PROX_PPULSE = 0x87;    // 16us, 8 pulses
    const DEFAULT_POFFSET_UR = 0;       // 0 offset
    const DEFAULT_POFFSET_DL = 0;       // 0 offset      
    const DEFAULT_CONFIG1 = 0x60;    // No 12x wait (WTIME) factor
    const DEFAULT_AILT = 0xFFFF;  // Force interrupt for calibration
    const DEFAULT_AIHT = 0;
    const DEFAULT_PERS = 0x11;    // 2 consecutive prox or ALS for int.
    const DEFAULT_CONFIG2 = 0x01;    // No saturation interrupts or LED boost  
    const DEFAULT_CONFIG3 = 0;       // Enable all photodiodes, no SAI
    const DEFAULT_LDRIVE = LED_DRIVE_100MA;
    const DEFAULT_AGAIN = AGAIN_4X;

    const OFF = 0;
    const POWER = 0;
    const AMBIENT_LIGHT = 1;
    const ALL = 7;

    const red_wb = 2130;
    const green_wb = 3500;
    const blue_wb = 4620;

    function i2cwrite(reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf);
    }

    function i2cread(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
        return val;
    }


    function InitColor(): boolean {
        let id = i2cread(APDS9960_ID);
        //  serial.writeLine("id:")
        //  serial.writeNumber(id); 
        // if (!(id == APDS9960_ID_1 || id == APDS9960_ID_2)) {
        //     return false;
        // }
        //  serial.writeLine("set mode:")
        setMode(ALL, OFF);
        i2cwrite(APDS9960_ATIME, DEFAULT_ATIME);
        i2cwrite(APDS9960_WTIME, DEFAULT_WTIME);
        i2cwrite(APDS9960_PPULSE, DEFAULT_PROX_PPULSE);
        i2cwrite(APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR);
        i2cwrite(APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL);
        i2cwrite(APDS9960_CONFIG1, DEFAULT_CONFIG1);
        setLEDDrive(DEFAULT_LDRIVE);
        setAmbientLightGain(DEFAULT_AGAIN);
        setLightIntLowThreshold(DEFAULT_AILT);
        setLightIntHighThreshold(DEFAULT_AIHT);
        i2cwrite(APDS9960_PERS, DEFAULT_PERS);
        i2cwrite(APDS9960_CONFIG2, DEFAULT_CONFIG2);
        i2cwrite(APDS9960_CONFIG3, DEFAULT_CONFIG3);
        return true;
    }

    function setLEDDrive(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 6;
        val &= 0b00111111;
        val |= drive;
        i2cwrite(APDS9960_CONTROL, val);
    }

    function setLightIntLowThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AILTL, val_low);
        i2cwrite(APDS9960_AILTH, val_high);
    }

    function setLightIntHighThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AIHTL, val_low);
        i2cwrite(APDS9960_AIHTH, val_high);
    }


    function rgb2hue(r: number, g: number, b: number): number {
        let max = Math.max(r, Math.max(g, b))
        let min = Math.min(r, Math.min(g, b))
        let c = max - min;
        let hue = 0;
        let segment = 0;
        let shift = 0;
        if (c == 0)
            return 0;
        if ((r > g) && (r > b)) {
            segment = (60.0 * (g - b)) / c;
            if (segment < 0)
                hue = segment + 360;
        }
        else if ((g > b) && (g > r)) {
            segment = (60.0 * (b - r)) / c;
            hue = segment + 120;
        }
        else if ((b > g) && (b > r)) {
            segment = (60.0 * (r - g)) / c;
            hue = segment + 240;
        }
        return hue;
    }

    function setMode(mode: number, enable: number) {
        let reg_val = getMode();
        /* Change bit(s) in ENABLE register */
        enable = enable & 0x01;
        if (mode >= 0 && mode <= 6) {
            if (enable > 0) {
                reg_val |= (1 << mode);
            }
            else {
                //reg_val &= ~(1 << mode);
                reg_val &= (0xff - (1 << mode));
            }
        }
        else if (mode == ALL) {
            if (enable > 0) {
                reg_val = 0x7F;
            }
            else {
                reg_val = 0x00;
            }
        }
        i2cwrite(APDS9960_ENABLE, reg_val);
    }

    function getMode(): number {
        let enable_value = i2cread(APDS9960_ENABLE);
        return enable_value;
    }

    function enableLightSensor(interrupts: boolean) {
        setAmbientLightGain(DEFAULT_AGAIN);
        if (interrupts) {
            setAmbientLightIntEnable(1);
        }
        else {
            setAmbientLightIntEnable(0);
        }
        enablePower();
        setMode(AMBIENT_LIGHT, 1);
    }

    function setAmbientLightGain(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
        /* Set bits in register to given value */
        drive &= 0b00000011;
        val &= 0b11111100;
        val |= drive;
        i2cwrite(APDS9960_CONTROL, val);
    }

    function getAmbientLightGain(): number {
        let val = i2cread(APDS9960_CONTROL);
        val &= 0b00000011;
        return val;
    }

    function enablePower() {
        setMode(POWER, 1);
    }

    function setAmbientLightIntEnable(enable: number) {
        let val = i2cread(APDS9960_ENABLE);
        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 4;
        val &= 0b11101111;
        val |= enable;
        i2cwrite(APDS9960_ENABLE, val);
    }

    function readAmbientLight(): number {
        let val = i2cread(APDS9960_CDATAL);
        let val_byte = i2cread(APDS9960_CDATAH);
        val = val + val_byte * 256;
        return val;
    }


    // /**
    //  * Initialize the color sensor,please execute at boot time
    //  */
    // //% weight=87 blockId=hicbit_init_colorSensor block="Initialize color sensor port at %port"
    // export function hicbit_init_colorSensor(port: hicbit_colorSensorPort) {
    //     InitColor();
    //     enableLightSensor(true);
    //     control.waitMicros(100);
    // }

    // /**
	//  *  Color sensor return the color.
	//  */
    // //% weight=86 blockId=hicbit_checkCurrentColor block="Current color %color"
    // export function hicbit_checkCurrentColor(color: hicbit_Colors): boolean {
    //     let c = i2cread(APDS9960_CDATAL) + i2cread(APDS9960_CDATAH) * 256;
    //     let r = i2cread(APDS9960_RDATAL) + i2cread(APDS9960_RDATAH) * 256;
    //     let g = i2cread(APDS9960_GDATAL) + i2cread(APDS9960_GDATAH) * 256;
    //     let b = i2cread(APDS9960_BDATAL) + i2cread(APDS9960_BDATAH) * 256;

    //     // serial.writeNumber(c);
    //     // serial.writeLine("->ccc");
    //     // serial.writeNumber(r);
    //     // serial.writeLine("->red");
    //     // serial.writeNumber(g);
    //     // serial.writeLine("->green");
    //     // serial.writeNumber(b);
    //     // serial.writeLine("->blue");

    //     if (r > red_wb)
    //         r = red_wb;
    //     if (g > green_wb)
    //         g = green_wb;
    //     if (b > blue_wb)
    //         b = blue_wb;

    //     r = Math.round(mapRGB(r, 0, red_wb, 0, 255));
    //     g = Math.round(mapRGB(g, 0, green_wb, 0, 255));
    //     b = Math.round(mapRGB(b, 0, blue_wb, 0, 255));
    //     // serial.writeNumber(r);
    //     // serial.writeLine("->rred");
    //     // serial.writeNumber(g);
    //     // serial.writeLine("->ggreen");
    //     // serial.writeNumber(b);
    //     // serial.writeLine("->bblue");
    //      let hsv = rgb2hue(r, g, b);
    //     // serial.writeNumber(hsv);
    //     // serial.writeLine("->hsv");
    //     let t = hicbit_Colors.None;
    //     if (c > 2200 && r > 65 && g > 65 && b > 65) {
    //         t = hicbit_Colors.White;
    //     }
    //     else if (c > 800) {
    //         if (hsv < 8 || hsv > 350)
    //             t = hicbit_Colors.Red;
    //         else if (hsv > 60 && hsv < 170) {
    //             t = hicbit_Colors.Green;
    //         }
    //         else if (hsv > 210 && hsv < 230) {
    //             t = hicbit_Colors.Blue;
    //         }
    //     }
    //     else if (c > 200 && r > 10 && g > 7 && b > 7 && r < 16.5 && g < 15 && b < 14) {
    //         t = hicbit_Colors.Black;
    //     }
    //     return (color == t);
    // }

    // /**
    // * Get the obstacle avoidance sensor status,1 detect obstacle,0 no detect obstacle
    // */
    // //% weight=85 blockId=hicbit_avoidSensor block="Obstacle avoidance sensor|port %port|detect obstacle"
    // export function hicbit_avoidSensor(port: hicbit_touchKeyPort): boolean {
    //     let status = 0;
    //     let flag: boolean = false;
    //     switch (port) {
    //         case hicbit_touchKeyPort.port1:
    //             pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
    //             status = pins.digitalReadPin(DigitalPin.P1);
    //             break;
    //         case hicbit_touchKeyPort.port2:
    //             pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
    //             status = pins.digitalReadPin(DigitalPin.P13);
    //             break;
    //         case hicbit_touchKeyPort.port3:
    //             if (P14_ad > 0xA)
    //                 status = 1
    //             else
    //                 status = 0;
    //             break;
    //     }
    //     if (status == 1)
    //         flag = false;
    //     else
    //         flag = true;
    //     return flag;
    // }


    /**
    * Get the condition of the line follower sensor
    */
    //% weight=84 blockId=hicbit_readLineFollowerStatus block="Line follower status|port %port|%status"
    export function hicbit_readLineFollowerStatus(port: hicbit_lineFollowPort, status: hicbit_lineFollower): boolean {
        let s1 = 0;
        let s2 = 0;
        switch (port) {
            case hicbit_lineFollowPort.port1:
                s1 = pins.analogReadPin(AnalogPin.P1);
                s2 = pins.analogReadPin(AnalogPin.P0);
                s1 = s1 * 255 / 1023;
                s2 = s2 * 255 / 1023;
                if (s1 < 100)
                    s1 = 0;
                else
                    s1 = 1;
                if (s2 < 100)
                    s2 = 0;
                else
                    s2 = 1;
                break;
        }
        let s = ((1 & s1) << 1) | s2;
        if (s == status) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Get the line follower sensor port ad value
     */
    //% weight=83 blockId=hicbit_lineSensorValue block="Get line follower sensor|port %port|%sensor|ad value"
    export function hicbit_lineSensorValue(port: hicbit_lineFollowPort, sensor: hicbit_LineFollowerSensor): number {
        let s1 = 0;
        let s2 = 0;
        switch (port) {
            case hicbit_lineFollowPort.port1:
                s1 = pins.analogReadPin(AnalogPin.P1);
                s2 = pins.analogReadPin(AnalogPin.P0);
                s1 = s1 * 255 / 1023;
                s2 = s2 * 255 / 1023;
                break;
        }
        if (sensor == hicbit_LineFollowerSensor.LFSensor_1) {
            return 255 - s1;
        }
        else {
            return 255 - s2;
        }

    }
    // /**
    // * Get the condition of the touch button,press return 1,or return 0
    // */
    // //% weight=82 blockId=hicbit_touchButton block="Touch button|port %port|is pressed"    
    // export function hicbit_touchButton(port: hicbit_touchKeyPort): boolean {
    //     let status: boolean = false;
    //     switch (port) {
    //         case hicbit_touchKeyPort.port1:
    //             pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
    //             status = !pins.digitalReadPin(DigitalPin.P1);
    //             break;
    //         case hicbit_touchKeyPort.port2:
    //             pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
    //             status = !pins.digitalReadPin(DigitalPin.P13);
    //             break;
    //         case hicbit_touchKeyPort.port3:
    //             if (P14_ad > 0xA)
    //                 status = false;
    //             else
    //                 status = true;
    //             break;
    //     }
    //     return status;
    // }

    let distanceBak = 0;
    /**
     * Get the distance of ultrasonic detection to the obstacle 
     */
    //% weight=81 blockId=hicbit_ultrasonic  block="Ultrasonic|port %port|distance(cm)"
    export function hicbit_ultrasonic(port: hicbit_ultrasonicPort): number {
        let echoPin: DigitalPin;
        let trigPin: DigitalPin;
        switch (port) {
            case hicbit_ultrasonicPort.port1:
                echoPin = DigitalPin.P0;
                trigPin = DigitalPin.P1;
                break;
            case hicbit_ultrasonicPort.port2:
                echoPin = DigitalPin.P13;
                trigPin = DigitalPin.P2;
                break;
            case hicbit_ultrasonicPort.port3:
                echoPin = DigitalPin.P14;
                trigPin = DigitalPin.P3;
                break;
            case hicbit_ultrasonicPort.port4:
                echoPin = DigitalPin.P15;
                trigPin = DigitalPin.P4;
                break;
            case hicbit_ultrasonicPort.port5:
                echoPin = DigitalPin.P16;
                trigPin = DigitalPin.P10;
                break;
            case hicbit_ultrasonicPort.port7:
                echoPin = DigitalPin.P7;
                trigPin = DigitalPin.P6;
                break;
            case hicbit_ultrasonicPort.port8:
                echoPin = DigitalPin.P11;
                trigPin = DigitalPin.P9;
                break;
        }
        pins.setPull(echoPin, PinPullMode.PullNone);
        pins.setPull(trigPin, PinPullMode.PullNone);

        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigPin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(5);
        let d = pins.pulseIn(echoPin, PulseValue.High, 25000);
        let distance = d;
        // filter timeout spikes
        if (distance == 0 && distanceBak != 0) {
            distance = distanceBak;
        }
        distanceBak = d;
        return Math.round(distance * 10 / 6 / 58);
    }

    /**
    * Get the ad value of the knob moudule
    */
    //% weight=80 blockId=hicbit_getKnobValue  block="Get knob|port %port|value(0~255)"
    export function hicbit_getKnobValue(port: hicbit_knobPort): number {
        let ADCPin: AnalogPin;
        switch (port) {
            case hicbit_knobPort.port1:
                ADCPin = AnalogPin.P1;
                break;
            case hicbit_knobPort.port2:
                ADCPin = AnalogPin.P2;
                break;
            case hicbit_knobPort.port3:
                ADCPin = AnalogPin.P3;
                break;
            case hicbit_knobPort.port4:
                ADCPin = AnalogPin.P4;
                break;
            case hicbit_knobPort.port5:
                ADCPin = AnalogPin.P10;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return adValue;
    }
	
    /**
    * Get the ad value of the photosensitive moudule
    */
    //% weight=79 blockId=hicbit_getphotosensitiveValue  block="Get Photosensitive|port %port|value(0~255)"
    export function hicbit_getphotosensitiveValue(port: hicbit_photosensitivePort): number {
        let ADCPin: AnalogPin;
        switch (port) {
            case hicbit_photosensitivePort.port1:
                ADCPin = AnalogPin.P1;
                break;
            case hicbit_photosensitivePort.port2:
                ADCPin = AnalogPin.P2;
                break;
            case hicbit_photosensitivePort.port3:
                ADCPin = AnalogPin.P3;
                break;
            case hicbit_photosensitivePort.port4:
                ADCPin = AnalogPin.P4;
                break;
            case hicbit_photosensitivePort.port5:
                ADCPin = AnalogPin.P10;
                break;
        }
        let adValue = pins.analogReadPin(ADCPin);
        adValue = adValue * 255 / 1023;
        return 255 - adValue;
    }

    /**
    * Get the Photosensitive sensor status,1 detect bright,0 no detect bright
    */
    //% weight=78 blockId=hicbit_photosensitiveSensor blockGap=50 block="Photosensitive sensor|port %port|detect bright"
    export function hicbit_photosensitiveSensor(port: hicbit_PhotosensitiveSensor): boolean {
        let status = 0;
        let flag: boolean = false;
        switch (port) {
            case hicbit_PhotosensitiveSensor.port1:
                pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P0);
                break;
            case hicbit_PhotosensitiveSensor.port2:
                pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P13);
                break;
            case hicbit_PhotosensitiveSensor.port3:
                pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P14);
                break;
            case hicbit_PhotosensitiveSensor.port4:
                pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P15);
                break;
            case hicbit_PhotosensitiveSensor.port5:
                pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P16);
                break;
            case hicbit_PhotosensitiveSensor.port7:
                pins.setPull(DigitalPin.P7, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P7);
                break;
            case hicbit_PhotosensitiveSensor.port8:
                pins.setPull(DigitalPin.P11, PinPullMode.PullUp);
                status = pins.digitalReadPin(DigitalPin.P11);
                break;
        }
        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }
	
    // /**
	//  * Initialize RGB
	//  */
    // function hicbit_initRGBLight() {
    //     if (!lhRGBLight) {
    //         lhRGBLight = hicbitRGBLight.create(DigitalPin.P15, 6, hicbitRGBPixelMode.RGB);
    //     }
    //     hicbit_clearLight();
    // }

    // /**
    //      * Set the brightness of the strip. This flag only applies to future operation.
    //      * @param brightness a measure of LED brightness in 0-255. eg: 255
    // */
    // //% blockId="hicbit_setBrightness" block="set brightness %brightness"
    // //% weight=68
    // export function hicbit_setBrightness(brightness: number): void {
    //     lhRGBLight.setBrightness(brightness);
    // }

    // /**
    //  * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
    //  */
    // //% weight=67 blockId=hicbit_setPixelRGB block="Set|%lightoffset|color to %rgb"
    // export function hicbit_setPixelRGB(lightoffset: hicbitLights, rgb: hicbitRGBColors) {
    //     lhRGBLight.setPixelColor(lightoffset, rgb);
    // }


    // /**
    //  * Set RGB Color argument
    //  */
    // //% weight=66 blockId=hicbit_setPixelRGBArgs block="Set|%lightoffset|color to %rgb"
    // export function hicbit_setPixelRGBArgs(lightoffset: hicbitLights, rgb: number) {
    //     lhRGBLight.setPixelColor(lightoffset, rgb);
    // }


    // /**
    //  * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
    //  */
    // //% weight=65 blockId=hicbit_showLight block="Show light"
    // export function hicbit_showLight() {
    //     lhRGBLight.show();
    // }

    // /**
    //  * Clear the color of the colored lights and turn off the lights.
    //  */
    // //% weight=64 blockGap=50 blockId=hicbit_clearLight block="Clear light"
    // export function hicbit_clearLight() {
    //     lhRGBLight.clear();
    // }

    /**
	 * Initialize Light belt
	 */
    //% weight=63 blockId=hicbit_belt_initRGBLight block="Initialize light belt at port %port"
    export function hicbit_belt_initRGBLight(port: hicbit_ultrasonicPort) {
        switch (port) {
            case hicbit_ultrasonicPort.port1:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P0, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port2:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P13, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port3:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P14, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port4:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P15, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port5:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P16, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port7:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P7, 30, hicbitRGBPixelMode.RGB);
                }
                break;
            case hicbit_ultrasonicPort.port8:
                if (!lhRGBLightBelt) {
                    lhRGBLightBelt = hicbitRGBLight.create(DigitalPin.P11, 30, hicbitRGBPixelMode.RGB);
                }
                break;
        }

        hicbit_belt_clearLight();
    }

    /**
     * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
     */
    //% weight=62 blockId=hicbit_belt_setPixelRGB block="Set light belt|%lightoffset|color to %rgb"
    export function hicbit_belt_setPixelRGB(lightoffset: hicbitLightsBelt, rgb: hicbitRGBColors) {
        lhRGBLightBelt.setBeltPixelColor(lightoffset, rgb);
    }

    /**
     * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
     */
    //% weight=61 blockId=hicbit_belt_showLight block="Show light belt"
    export function hicbit_belt_showLight() {
        lhRGBLightBelt.show();
    }

    /**
     * Clear the color of the colored lights and turn off the lights.
     */
    //% weight=60 blockGap=50 blockId=hicbit_belt_clearLight block="Clear light belt"
    export function hicbit_belt_clearLight() {
        lhRGBLightBelt.clear();
    }

    function mapRGB(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    // /**
    // * Resolve the Bluetooth that phone APP send command type, the total of nine types of commands: tank display command, servo debug command, obtaining the distance of ultrasonic command, obtaining temperature command, obtain sound size rank orders, to obtain the light level command, set the color lights command, honking command, firmware version information command.
    // */
    // //% weight=59 blockId=hicbit_analyzeBluetoothCmd block="Get bluetooth command type %str"
    // export function hicbit_analyzeBluetoothCmd(str: string): number {
    //     if (str.length > 6) {
    //         let cmdHead = str.substr(0, 3);

    //         if (cmdHead == "CMD") {
    //             let cmdTypeStr: string = str.substr(4, 2);
    //             let cmdType = strToNumber(cmdTypeStr);
    //             if (cmdType > hicbit_CmdType.GET_HAND_CMD || cmdType < 0) {
    //                 return hicbit_CmdType.NO_COMMAND;
    //             }
    //             else {
    //                 return cmdType;
    //             }
    //         }
    //         else {
    //             return hicbit_CmdType.NO_COMMAND;
    //         }
    //     }
    //     else {
    //         return hicbit_CmdType.NO_COMMAND;
    //     }
    // }
    // /**
    //  * Resolve the parameters that the phone APP send the command,there are 3 parameters of servo debug command,the other command has just one parameter.
    //  */
    // //% weight=58  blockId=hicbit_cgetArgs block="Get bluetooth command|%str|argument at %index"
    // //% index.min=1 index.max=3
    // export function hicbit_getArgs(str: string, index: number): number {
    //     let cmdType = hicbit_analyzeBluetoothCmd(str);
    //     if (cmdType == hicbit_CmdType.NO_COMMAND) {
    //         return hicbit_CarRunCmdType.COMMAND_ERRO;
    //     }
    //     else {
    //         let dataIndex = 7;
    //         let subLegth = 2;
    //         if (index == 2) {
    //             dataIndex = 10;
    //             subLegth = 2;
    //         }
    //         else if (index == 3) {
    //             dataIndex = 13;
    //             subLegth = 4;
    //         }
    //         if (cmdType == hicbit_CmdType.SERVO) {
    //             if (str.length < 17) {
    //                 return hicbit_CmdType.NO_COMMAND;
    //             }
    //         }
    //         if ((index == 1 && str.length < 10) || (index == 2 && str.length < 13) || (index == 3 && str.length < 17)) {
    //             return 0;
    //         }
    //         let strArgs = str.substr(dataIndex, subLegth);
    //         let arg = strToNumber(strArgs);
    //         if (arg == -1)
    //             return 0;
    //         return arg;
    //     }
    // }

    // /**
    //  * Returns the enumeration of the command type, which can be compared with this module after obtaining the bluetooth command type sent by the mobile phone APP.
    //  */
    // //% weight=57 blockId=hicbit_getBluetoothCmdtype block="Bluetooth command type %type"
    // export function hicbit_getBluetoothCmdtype(type: hicbit_CmdType): number {
    //     return type;
    // }

    // /**
    //  * The command type of the tank is stop, go ahead, back, turn left, turn right, slow down, turn left slowly, turn right slowly.
    //  */
    // //% weight=56 blockId=hicbit_getRunCarType block="Car run type %type"
    // export function hicbit_getRunCarType(type: hicbit_CarRunCmdType): number {
    //     return type;
    // }

    // /**
    //  * The distance from the ultrasonic obstacle is the standard command, which is sent to the mobile phone. The APP will indicate the distance of the ultrasonic obstacle.
    //  */
    // //% weight=55 blockId=hicbit_convertUltrasonic block="Convert ultrasonic distance %data"
    // export function hicbit_convertUltrasonic(data: number): string {
    //     let cmdStr: string = "CMD|03|";
    //     cmdStr += data.toString();
    //     cmdStr += "|$";
    //     return cmdStr;
    // }

    // /**
    //  * The conversion temperature value to standard command, sent to the mobile phone, and the APP displays the current temperature.
    //  */
    // //% weight=54 blockId=hicbit_convertTemperature block="Convert temperature %data"
    // export function hicbit_convertTemperature(data: number): string {
    //     let cmdStr: string = "CMD|04|";
    //     cmdStr += data.toString();
    //     cmdStr += "|$";
    //     return cmdStr;
    // }

    // /**
    //  * Convert the light value to the standard command and send it to the mobile phone. The APP displays the current light level (0~255).
    //  */
    // //% weight=53 blockId=hicbit_convertLight block="Convert light %data"
    // export function hicbit_convertLight(data: number): string {
    //     let cmdStr: string = "CMD|06|";
    //     cmdStr += data.toString();
    //     cmdStr += "|$";
    //     return cmdStr;
    // }

    // /**
    //  * Convert the battery value to the standard command and send it to the mobile phone. The APP displays the current voltage.
    //  */
    // //% weight=52 blockId=hicbit_convertBattery blockGap=50 block="Convert battery %data"
    // export function hicbit_convertBattery(data: number): string {
    //     let cmdStr: string = "CMD|07|";
    //     cmdStr += data.toString();
    //     cmdStr += "|$";
    //     return cmdStr;
    // }

    // /**
    //  * Convert the hand cmd to phone app
    //  */
    // //% weight=51 blockId=hicbit_convertHandCmd blockGap=50 block="Convert uHand:bit %data"
    // export function hicbit_convertHandCmd(data: number): string {
    //     let cmdStr: string = "CMD|15|";
    //     cmdStr += data.toString();
    //     cmdStr += "|$";
    //     return cmdStr;
    // }

    // /**
    //  * Connect to the wifi
    //  */
    // //% weight=50 blockId=hicbit_connectWifi block="Connect to the Wifi,name|%ssid|and password %passwrd"
    // export function hicbit_connectWifi(ssid: string, passwrd: string) {
    //     let buf = pins.createBuffer(ssid.length + passwrd.length + 10);
    //     buf[0] = 0x55;
    //     buf[1] = 0x55;
    //     buf[2] = (ssid.length + passwrd.length + 8) & 0xff;
    //     buf[3] = 0x3E;//cmd type
    //     buf[4] = 0x6;
    //     buf[5] = 0x22;
    //     for (let i = 0; i < ssid.length; i++) {
    //         buf[6 + i] = ssid.charCodeAt(i);
    //     }
    //     buf[ssid.length + 6] = 0x22;
    //     buf[ssid.length + 7] = 0x2C;
    //     buf[ssid.length + 8] = 0x22;
    //     for (let i = 0; i < passwrd.length; i++) {
    //         buf[ssid.length + 9 + i] = passwrd.charCodeAt(i);
    //     }
    //     buf[ssid.length + passwrd.length + 9] = 0x22;
    //     serial.writeBuffer(buf);
    // }

    // /**
    //  * Detect the device connect status
    //  */
    // //% weight=49 blockId=hicbit_isConnectedServer block="Device is connected to server?"
    // export function hicbit_isConnectedServer(): boolean {
    //     return connectStatus;
    // }

    // /**
    //  * Send get mac address command
    //  */
    // //% weight=48 blockId=hicbit_send_getMac block="Send pair command"
    // export function hicbit_send_getMac() {
    //     let buf = pins.createBuffer(5);
    //     buf[0] = 0x55;
    //     buf[1] = 0x55;
    //     buf[2] = 0x03;
    //     buf[3] = 0x3E;//cmd type
    //     buf[4] = 0x08;
    //     serial.writeBuffer(buf);
    // }

    // /**
    //  * Do someting when hicbit receive mac adress
    //  * @param body code to run when event is raised
    //  */
    // //% weight=47 blockId=onhicbit_getMac block="on hicbit get device id"
    // export function onhicbit_getMac(body: Action) {
    //     control.onEvent(MESSAGE_MAC, 1, body);
    // }

    // /**
    //  * Get device mac address
    //  */
    // //% weight=46 blockId=hicbit_getMacAddress block="Get device id"
    // export function hicbit_getMacAddress(): string {
    //     return macStr + "$";
    // }
}
