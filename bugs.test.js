
describe('Room Object Methods', () => {
  let room;

  beforeEach(() => {
    room = {
      name: "Test Room",
      currTemp: 25,
      coldPreset: 20,
      warmPreset: 30,
      airConditionerOn: false,
      
      setCurrTemp(temp) {
        this.currTemp = temp;
      },
      setColdPreset(newCold) {
        this.coldPreset = newCold;
      },
      setWarmPreset(newWarm) {
        this.warmPreset = newWarm;
      },
      decreaseTemp() {
        this.currTemp > 10 ? this.currTemp-- : this.currTemp;
      },
      increaseTemp() {
        this.currTemp < 32 ? this.currTemp++ : this.currTemp;
      },
      toggleAircon() {
        this.airConditionerOn = !this.airConditionerOn;
      }
    };
  });

  describe('Temperature Methods', () => {
    test('setCurrTemp should set current temperature', () => {
      room.setCurrTemp(22);
      expect(room.currTemp).toBe(22);
    });

    test('increaseTemp should increase temperature by 1 if below 32', () => {
      room.setCurrTemp(25);
      room.increaseTemp();
      expect(room.currTemp).toBe(26);
    });

    test('increaseTemp should not increase temperature above 32', () => {
      room.setCurrTemp(32);
      room.increaseTemp();
      expect(room.currTemp).toBe(32);
    });

    test('decreaseTemp should decrease temperature by 1 if above 10', () => {
      room.setCurrTemp(25);
      room.decreaseTemp();
      expect(room.currTemp).toBe(24);
    });

    test('decreaseTemp should not decrease temperature below 10', () => {
      room.setCurrTemp(10);
      room.decreaseTemp();
      expect(room.currTemp).toBe(10);
    });
  });

  describe('Preset Methods', () => {
    test('setColdPreset should update cold preset temperature', () => {
      room.setColdPreset(18);
      expect(room.coldPreset).toBe(18);
    });

    test('setWarmPreset should update warm preset temperature', () => {
      room.setWarmPreset(28);
      expect(room.warmPreset).toBe(28);
    });
  });

  describe('Air Conditioner Methods', () => {
    test('toggleAircon should turn AC on if off', () => {
      room.airConditionerOn = false;
      room.toggleAircon();
      expect(room.airConditionerOn).toBe(true);
    });

    test('toggleAircon should turn AC off if on', () => {
      room.airConditionerOn = true;
      room.toggleAircon();
      expect(room.airConditionerOn).toBe(false);
    });
  });
});

