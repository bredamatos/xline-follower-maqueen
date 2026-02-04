maqueenPlusV2.I2CInit()
maqueenPlusV2.ledBlank(DigitalPin.P15)
basic.forever(function () {
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1) {
        maqueenPlusV2.ledBlank(DigitalPin.P15)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    } else {
        if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0) {
            maqueenPlusV2.ledBlank(DigitalPin.P15)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
            maqueenPlusV2.setIndexColor(DigitalPin.P15, maqueenPlusV2.ledRange(0, 1), maqueenPlusV2.colors(maqueenPlusV2.NeoPixelColors.Yellow))
        }
        if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0) {
            maqueenPlusV2.ledBlank(DigitalPin.P15)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
            maqueenPlusV2.setIndexColor(DigitalPin.P15, maqueenPlusV2.ledRange(2, 3), maqueenPlusV2.colors(maqueenPlusV2.NeoPixelColors.Yellow))
        }
        if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 0 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 0) {
            maqueenPlusV2.ledBlank(DigitalPin.P15)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
            maqueenPlusV2.setIndexColor(DigitalPin.P15, maqueenPlusV2.ledRange(0, 3), maqueenPlusV2.colors(maqueenPlusV2.NeoPixelColors.Red))
        }
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1 && maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1) {
        maqueenPlusV2.ledBlank(DigitalPin.P15)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        maqueenPlusV2.setIndexColor(DigitalPin.P15, maqueenPlusV2.ledRange(0, 3), maqueenPlusV2.colors(maqueenPlusV2.NeoPixelColors.Blue))
        basic.pause(500)
    }
})
